import { useState, useEffect } from 'react';
import { useStorageOperations } from '@/hooks/useStorageOperations';
import posthog from '@/integrations/posthog/client'; // Make sure this is set up

interface Document {
  id: string;
  name: string;
  url: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { listFiles } = useStorageOperations();

  const fetchDocuments = async () => {
    try {
      setLoading(true);

      // Fetch documents from Vercel storage
      const { success, files, error: listError } = await listFiles('documents');
      if (!success) throw new Error(listError || 'Failed to fetch documents');

      // Map files to Document interface (customize as needed)
      const data: Document[] = files.map((file: any) => ({
        id: file.id || file.name,
        name: file.name,
        url: file.url || `/documents/${file.name}`,
        category: file.category || 'other',
        created_at: file.created_at || '',
        updated_at: file.updated_at || '',
      }));

      setDocuments(data);

      // Track with PostHog
      posthog.capture('documents_fetched', { count: data.length });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getDocumentUrl = (fileName: string) => {
    return `/documents/${fileName}`;
  };

  const getCertifications = () => {
    return documents.filter(doc => doc.category === 'certification');
  };

  const getResume = () => {
    return documents.find(
      doc =>
        doc.category === 'resume' ||
        doc.name.toLowerCase().includes('resume')
    );
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return {
    documents,
    loading,
    error,
    fetchDocuments,
    getDocumentUrl,
    getCertifications,
    getResume,
  };
};
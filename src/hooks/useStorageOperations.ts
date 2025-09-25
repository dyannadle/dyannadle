import { useToast } from '@/hooks/use-toast';
import { uploadFileToVercel, deleteFileFromVercel, getPublicUrlFromVercel, listFilesFromVercel } from '@/integrations/vercel/client';

export const useStorageOperations = () => {
  const { toast } = useToast();

  const uploadFile = async (file: File, filePath?: string) => {
    try {
      const { success, url, error } = await uploadFileToVercel(file, filePath);

      if (!success) throw error;

      return { success: true, url, fileName: file.name };
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: error instanceof Error ? error.message : 'Failed to upload file',
        variant: 'destructive'
      });
      return { success: false, error };
    }
  };

  const deleteFile = async (filePath: string) => {
    try {
      const { success, error } = await deleteFileFromVercel(filePath);

      if (!success) throw error;

      return { success: true };
    } catch (error) {
      toast({
        title: 'Delete failed',
        description: error instanceof Error ? error.message : 'Failed to delete file',
        variant: 'destructive'
      });
      return { success: false, error };
    }
  };

  const getPublicUrl = (filePath: string) => {
    return getPublicUrlFromVercel(filePath);
  };

  const listFiles = async (folder?: string) => {
    try {
      const { success, files, error } = await listFilesFromVercel(folder);

      if (!success) throw error;

      return { success: true, files };
    } catch (error) {
      toast({
        title: 'Failed to list files',
        description: error instanceof Error ? error.message : 'Failed to list files',
        variant: 'destructive'
      });
      return { success: false, error };
    }
  };

  return {
    uploadFile,
    deleteFile,
    getPublicUrl,
    listFiles
  };
};
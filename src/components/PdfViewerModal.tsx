import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface PdfViewerModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    pdfUrl: string; // This will now be a Data URI (base64)
    title?: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
    isOpen,
    onOpenChange,
    pdfUrl,
    title = "Document Viewer",
}) => {
    // Create a Blob URL from the Data URI to avoid showing the massive Base64 string
    // and to improve performance/compatibility.
    // Use state to manage the Blob URL
    const [blobUrl, setBlobUrl] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!pdfUrl) {
            setBlobUrl(null);
            return;
        }

        // If it's not a data URI, just use it as is (though we expect data URI)
        if (!pdfUrl.startsWith('data:')) {
            setBlobUrl(pdfUrl);
            return;
        }

        let url: string | null = null;
        try {
            const arr = pdfUrl.split(',');
            const mimeMatch = arr[0].match(/:(.*?);/);
            const mime = mimeMatch ? mimeMatch[1] : 'application/pdf';
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            const blob = new Blob([u8arr], { type: mime });
            url = URL.createObjectURL(blob);
            setBlobUrl(url);
        } catch (e) {
            console.error("Error creating Blob URL:", e);
            setBlobUrl(pdfUrl); // Fallback to raw data URI
        }

        // Cleanup function
        return () => {
            if (url) {
                URL.revokeObjectURL(url);
            }
        };
    }, [pdfUrl]);

    const downloadName = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] flex flex-col p-4">
                <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
                    <div className="flex gap-2 mr-8">
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="gap-2"
                        >
                            <a href={blobUrl} download={downloadName} target="_blank" rel="noopener noreferrer">
                                <Download size={16} />
                                <span className="hidden sm:inline">Download</span>
                            </a>
                        </Button>
                    </div>
                </DialogHeader>

                <div className="flex-1 w-full bg-muted/20 rounded-md overflow-hidden border">
                    <iframe
                        src={blobUrl}
                        className="w-full h-full"
                        title={title}
                        style={{ border: "none" }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PdfViewerModal;

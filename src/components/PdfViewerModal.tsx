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
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] flex flex-col p-4">
                <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2"
                    >
                        <a href={pdfUrl} download="document.pdf" target="_blank" rel="noopener noreferrer">
                            <Download size={16} />
                            <span className="hidden sm:inline">Download</span>
                        </a>
                    </Button>
                </DialogHeader>

                <div className="flex-1 w-full bg-muted/20 rounded-md overflow-hidden border">
                    <iframe
                        src={pdfUrl}
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

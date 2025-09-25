export type FileUploadResponse = {
  success: boolean;
  url?: string;
  fileName?: string;
  error?: Error;
};

export type FileDeleteResponse = {
  success: boolean;
  error?: Error;
};

export type ListFilesResponse = {
  success: boolean;
  files?: Array<{ name: string; path: string; }>;
  error?: Error;
};
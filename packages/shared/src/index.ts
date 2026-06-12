export type DocumentSummary = {
  id: string;
  title: string;
  updatedAt: string;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};
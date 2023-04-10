export interface PaginationParams {
  page: number;
  total: number;
  limit: number;
};

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
};

export interface ListParams {
  page: number;
  limit: number;
  sort: string;
  order: 'asc' | 'desc';
  
  [key: string]: any;
}
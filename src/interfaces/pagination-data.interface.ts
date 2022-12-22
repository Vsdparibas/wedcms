export interface PaginationData<T> {
  data: T;
  pages: number;
  nextPage: boolean;
  previousPage: boolean;
}

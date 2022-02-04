export interface PaginationProps {
    arrPages?: number[];
    totalPages?: number;
    currentPage: number;
    numberPagination?: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setCurrentSubPage: React.Dispatch<React.SetStateAction<number>>
  }
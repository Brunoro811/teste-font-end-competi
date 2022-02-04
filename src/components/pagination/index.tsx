import ButtonPage from "../buttonPage";
import { ContainerPagination } from "../ContainerMain/style";

import next from "../../assets/svg/next.svg";
import previous from "../../assets/svg/previous.svg";

import { PaginationProps } from "./pagination.model";

function Pagination({
  arrPages = [1, 2, 3, 4, 5, 6],
  totalPages = 6,
  currentPage = 0,
  numberPagination = 2,
  setCurrentPage,
  setCurrentSubPage,
}: PaginationProps) {
  const walkArray = (array: number[], inicio: number, fim: number) => {
    let newArray = [];
    let diferenca = fim - inicio;
    if (inicio + diferenca <= array.length - 1) {
      for (let i = inicio; i <= fim; i++) {
        newArray.push(array[i]);
      }
    } else {
      for (let i = inicio; i < array.length; i++) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };

  return (
    <ContainerPagination>
      {walkArray(arrPages, currentPage, currentPage + numberPagination)[0] >
        0 && (
        <ButtonPage
          onClick={(e) => setCurrentPage(currentPage - 1)}
          isImage
          image={previous}
        />
      )}

      {walkArray(arrPages, currentPage, currentPage + numberPagination).map(
        (element, index) => (
          <ButtonPage
            key={index}
            value={Number(currentPage + index)}
            children={currentPage + index + 1}
            onClick={(e) => setCurrentSubPage(Number(e.target.value))}
          />
        )
      )}
      {walkArray(arrPages, currentPage, currentPage + numberPagination)[
        walkArray(arrPages, currentPage, currentPage + numberPagination)
          .length - 1
      ] <
        totalPages - 1 && (
        <ButtonPage
          onClick={() => setCurrentPage(currentPage + 1)}
          isImage
          image={next}
        />
      )}
    </ContainerPagination>
  );
}
export default Pagination;

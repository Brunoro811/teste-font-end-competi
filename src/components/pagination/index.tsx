import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { number } from "yup";
import {
  PagesOfPokemons,
  Pokemon,
} from "../../providers/pokemon/pokemon.model";
import { baseURL } from "../../services/api";

import { POKEMON_COUNT } from "./actionsLocalStorage";

interface TotalRecords {
  count: number;
  results: any[];
}

function Pagination() {
  const [totalRecords, setTotalRecords] = useState<TotalRecords>(
    JSON.parse(localStorage.getItem(POKEMON_COUNT) || "{}")
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageLimit: number = 6;
  const LEFT_PAGE: any = "LEFT";
  const RIGHT_PAGE: any = "RIGHT";

  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageNeighbours, setPageNeighbours] = useState<number>(1);

  const range = (from: number, to: number, step: number = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  };

  const fetchPageNumbers = () => {
    //totalpage
    //currentPage,
    //pageNeighbours
    console.log("executou");
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };
  useEffect(() => {
    if (!totalRecords.count) {
      console.log("rodou");
      axios
        .get(`${baseURL}?limit=1118&offset=0`)
        .then((response) => {
          setTotalRecords(response.data);
          setTotalPages(Math.ceil(response.data.count / pageLimit));
          localStorage.setItem("@PokemonCount", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error.response.data);
          return 0;
        });
    }
  }, [totalRecords.count]);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleMoveLeft = () => {
    setCurrentPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = () => {
    setCurrentPage(currentPage + pageNeighbours * 2 + 1);
  };

  return (
    <>
      {totalRecords && console.log("totalRecords:", totalRecords)}
      {totalPages && console.log("totalPages:", totalPages)}
      {totalRecords && console.log("Array:", fetchPageNumbers())}
      <h1>Pagination</h1>
      <Fragment>
        <nav aria-label="Countries Pagination">
          <ul className="pagination">
            {fetchPageNumbers().map((page: any, index: any) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={() => handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={() => handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                );

              return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handleClick(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fragment>
    </>
  );
}
//export default React.memo(Pagination);
export default Pagination;

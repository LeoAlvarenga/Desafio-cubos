import React, { useState, useCallback, HTMLAttributes, useEffect } from "react";

import { Container, PageNumber, PageNumbersList } from "./styles";
import BlueCircle from "../BlueCircle";
import { IMovie } from "../../config/interfaces";

interface IPageNumber {
  number: number;
  isActive: boolean;
}

interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {
  movieList: IMovie[];
  setRenderList(value: IMovie[]): void;
  totalResults: number;
  apiPage: number;
  callNewPage(value: number): void;
  search: string;
}

const PaginationControl: React.FC<IPaginationProps> = ({
  movieList,
  setRenderList,
  totalResults,
  callNewPage,
  apiPage,
  search
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const numberOfPages = totalResults / 5;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(5);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < numberOfPages && i < 30; i++) {
      arr.push(i + 1);
    }
    setPages(arr);
    console.log(pages.length);
    if (movieList) {
      const newArr = movieList.slice(initialIndex, lastIndex);
      setRenderList(newArr);
    }
  }, [numberOfPages]);

  useEffect(() => {
    console.log("page", currentPage);
    setInitialIndex(0 + (currentPage - 1) * 5);
    setLastIndex(5 + (currentPage - 1) * 5);

    console.log(initialIndex, lastIndex);
  }, [currentPage]);

  useEffect(() => {
    if (movieList) {
      const newArr = movieList.slice(initialIndex, lastIndex);

      console.log("tamanho do array", newArr.length)
      if(newArr.length < 5) {
        callNewPage(apiPage+1)
        return
      }

      setRenderList(newArr);
    }
  }, [lastIndex, movieList]);

  useEffect(() => {
    setCurrentPage(1)
  },[search])

  return (
    <Container>
      <PageNumbersList>
        {pages &&
          pages.map((page) =>
            page === currentPage ? (
              <PageNumber key={page}>
                <BlueCircle circleSize={56}>{page.toString()}</BlueCircle>
              </PageNumber>
            ) : (
              <PageNumber key={page} onClick={() => setCurrentPage(page)}>
                <h2>{page}</h2>
              </PageNumber>
            )
          )}
      </PageNumbersList>
    </Container>
  );
};

export default PaginationControl;

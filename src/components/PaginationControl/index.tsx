import React, { useState, useCallback, HTMLAttributes, useEffect } from "react";

import { Container, PageNumber, PageNumbersList } from "./styles";
import BlueCircle from "../BlueCircle";
import { IMovie } from "../../config/interfaces";
import { useTmdb } from "../../hooks/tmdb";
import MovieList from "../MovieList";

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

const PaginationControl: React.FC = () => {
  const { movieList, setRenderList, setPage, search, currentPage, setCurrentPage } = useTmdb();

  const [pages, setPages] = useState<number[]>([]);
  const numberOfPages = movieList.total_results / 5;

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
      if (movieList.results) {
        const newArr = movieList.results.slice(initialIndex, lastIndex);
        setRenderList(newArr);
      }
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
      if(movieList.results){

        const newArr = movieList.results.slice(initialIndex, lastIndex);
  
        console.log("tamanho do array", newArr.length);
        if (newArr.length < 5) {
          setPage(movieList.page + 1);
          return;
        }
  
        setRenderList(newArr);
      }
    }
  }, [lastIndex, movieList]);

  // useEffect(() => {
  //   console.log("entrou aqui")
  //   setCurrentPage(1);
  // }, [search]);

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

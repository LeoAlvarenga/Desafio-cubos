import React, { useState } from "react";

import { Container, PageNumber, PageNumbersList } from "./styles";
import BlueCircle from "../BlueCircle";

interface IPageNumber {
  number: number;
  isActive: boolean;
}

const PaginationControl: React.FC = () => {
  const mockArr: IPageNumber[] = [
    {
      number: 1,
      isActive: false,
    },
    {
      number: 2,
      isActive: false,
    },
    {
      number: 3,
      isActive: true,
    },
    {
      number: 4,
      isActive: false,
    },
    {
      number: 5,
      isActive: false,
    },
    {
      number: 6,
      isActive: false,
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<IPageNumber[]>(mockArr);

  return (
    <Container>
      <PageNumbersList>
        {pages.map((page) =>
          page.number === currentPage ? (
            <PageNumber key={page.number} >
              <BlueCircle circleSize={56}>{page.number}</BlueCircle>
            </PageNumber>
          ) : (
            <PageNumber key={page.number} onClick={() => setCurrentPage(page.number)}>
              <h2>{page.number}</h2>
            </PageNumber>
          )
        )}
      </PageNumbersList>
    </Container>
  );
};

export default PaginationControl;

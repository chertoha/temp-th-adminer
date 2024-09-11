import { nanoid } from "nanoid";
import { PagButton, PagItem, PagList } from "./Paginator.styled";
import { calculatePagination } from "./utils/calculation";
import { FC, useEffect } from "react";

interface IPaginatorProps {
  totalItems: number;
  currentPage: number;
  onPageClick: (page: number) => void;
  perPage: number;
  nearbyQtyPages?: number;
  shouldScrollUp?: boolean;
  hasArrows?: boolean;
}

const Paginator: FC<IPaginatorProps> = ({
  totalItems,
  currentPage = 1,
  onPageClick,
  perPage = 20,
  nearbyQtyPages = 1,
  shouldScrollUp = false,
  hasArrows = true,
}) => {
  useEffect(() => {
    if (shouldScrollUp) window.scrollTo(0, 0);
  });

  if (totalItems <= perPage) {
    return null;
  }

  const lastPageNumber = Math.ceil(Number(totalItems) / Number(perPage));
  const calculatedList = calculatePagination({
    currentPage,
    lastPageNumber,
    nearbyQtyPages,
    hasArrows,
  });

  return (
    <PagList>
      {calculatedList.map(({ title, value, type, Icon }) => (
        <PagItem key={nanoid(5)}>
          <PagButton
            pagtype={type}
            onClick={() => {
              onPageClick(value);
            }}
          >
            {title}
            {Icon && <Icon />}
          </PagButton>
        </PagItem>
      ))}
    </PagList>
  );
};

export default Paginator;

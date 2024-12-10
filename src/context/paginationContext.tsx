import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export enum PaginationAction {
  NEXT = 'next',
  PREV = 'prev',
  FIRST = 'first',
  LAST = 'last',
}

interface PaginationData {
  next: string | null;
  prev: string | null;
  first: string | null;
  last: string | null;
  totalCount: number | null;
}

interface PaginationContextProps {
  cursor: string | null;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  paginationData: PaginationData;
  setCursor: (pointer:string)=>void;
  setCurrentPage:(page:number) => void;
  setPaginationData: (data: PaginationData) => void;
  setPageSize: (size: number) => void;
  navigate: (action: PaginationAction) => void;
}

const defaultPageSize = 10;

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [paginationData, setPaginationDataState] = useState<PaginationData>({
    next: null,
    prev: null,
    first: null,
    last: null,
    totalCount: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [cursor, setCursor] = useState<string|null>("")

  const setPaginationData = useCallback((data: PaginationData) => {
    setPaginationDataState(data);
  }, []);


  const navigate = useCallback(
    (action: PaginationAction) => {
      const { next, prev, first, last } = paginationData;
      console.log("action...",action)
      switch (action) {
        case PaginationAction.NEXT:
          setCursor(next)
          setCurrentPage((prevPage) => prevPage + 1);
          break;
        case PaginationAction.PREV:
          setCursor(prev)
          setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
          break;
        case PaginationAction.FIRST:
          setCursor(first)
          setCurrentPage(1);
          break;
        case PaginationAction.LAST:
          setCursor(last);
          setCurrentPage(-1);
          break;
      }
    },
    [paginationData]
  );

  return (
    <PaginationContext.Provider
      value={{
        cursor,
        totalCount: paginationData.totalCount || 0,
        currentPage,
        pageSize,
        paginationData,
        setCursor,
        setCurrentPage,
        setPaginationData,
        setPageSize,
        navigate,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePaginationContext must be used within a PaginationProvider');
  }
  return context;
};

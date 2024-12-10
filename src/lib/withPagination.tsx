import { PaginationProvider } from "@/context/paginationContext";


const withPagination = (Component: React.FC) => {
  return (props: any) => (
    <PaginationProvider>
      <Component {...props} />
    </PaginationProvider>
  );
};

export default withPagination;
interface IPaginationProps {
  count: number;
  page_size: number;
  currentPageNumber: number;
  handleCurrentPageNumber: (page: number) => void;
}

const Pagination = ({
  count,
  page_size,
  currentPageNumber,
  handleCurrentPageNumber,
}: IPaginationProps) => {
  const totalData = count;
  const dataPerPage = page_size;
  const totalPages: number = Math.ceil(totalData / dataPerPage);

  const pageNumbers = [];

  for (let i = currentPageNumber - 3; i < totalData; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPageNumber > 1) handleCurrentPageNumber(currentPageNumber - 1);
  };

  const goToNextPage = () => {
    if (currentPageNumber < totalPages) handleCurrentPageNumber(currentPageNumber + 1);
  };

  return (
    <div className="d-flex justify-content-center gap-1">
      <button
        onClick={goToPreviousPage}
        disabled={currentPageNumber === 1}
        className="btn btn-outline-primary"
      >
        Previous
      </button>

      {pageNumbers.map((page) => (
        <span
          key={page}
          onClick={() => handleCurrentPageNumber(page)}
          className={`cursor-pointer m-1 ${currentPageNumber === page ? "fw-bold border-bottom border-2" : ""
            }`}
        >
          {page}
        </span>
      ))}

      <button
        onClick={goToNextPage}
        disabled={currentPageNumber === totalPages}
        className="btn btn-outline-primary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

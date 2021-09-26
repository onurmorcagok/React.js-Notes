import { useEffect, useState } from "react";

const Pagination = ({
  pages,
  setCurrentPage,
  currentPersons,
  sortedPerson,
}) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentPersons.length}</b> out of{" "}
        <b>{sortedPerson.length}</b> entries
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((previous) =>
                previous === 1 ? previous : previous - 1
              )
            }
          >
            Previous
          </a>
        </li>

        {numOfPages.map((page, index) => {
          return (
            <li
              key={index}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
              onClick={() => setCurrentButton(page)}
            >
              <a href="#!" className="page-link">
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={`${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((previous) =>
                previous === numOfPages.length ? previous : previous + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

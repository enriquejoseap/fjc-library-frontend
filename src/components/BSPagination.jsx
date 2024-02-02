import { useContext, useEffect } from "react";
import ScreenContext from "../context/ScreenContext";
import { FaChessKing } from "react-icons/fa6";

const BSPagination = ({
  currentPage,
  items,
  prevPage,
  handlePage,
  nextPage,
  setRecords,
}) => {
  const { screenWidth } = useContext(ScreenContext);

  const limit = screenWidth > 768 ? 8 : 4;
  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;
  const npage = Math.ceil(items.length / limit);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    setRecords(items.slice(firstIndex, lastIndex));
  }, [currentPage, items]);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
          <a onClick={() => prevPage()} className="page-link">
            Previous
          </a>
        </li>
        {numbers.map((el, index) => (
          <li
            className={`page-item ${currentPage == el ? "active" : ""}`}
            key={index}
          >
            <a onClick={() => handlePage(el)} className="page-link" href="#">
              {el}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage == npage ? "disabled" : ""}`}>
          <a onClick={() => nextPage()} className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BSPagination;

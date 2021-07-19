import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ first, last, next, prev, onPagination }) {
  return (
    <div className="col-lg-12 text-center pt-2 pb-2 bg-dark">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          className="btn btn-secondary"
          onClick={() => onPagination(first)}
          disabled={first ? false : true}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="btn btn-warning"
          onClick={() => onPagination(prev)}
          disabled={prev ? false : true}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="btn btn-warning" onClick={() => onPagination(next)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button className="btn btn-secondary" onClick={() => onPagination(last)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

import * as React from 'react';
import { navigate } from "gatsby";

const Pagination = ({totalPages, currentPage, basePath}) => {
  const handlePageClick = (page) => {
    navigate(`${basePath}/${page}`);
  }

  return(
    <div className="flex border-t border-gray-300 text-sm">
      <div className="flex-initial">
        <button className="border-t border-gray-300 px-3 py-1 hover:border-sky-500 mt-[-1px] text-gray-400 hover:text-gray-700 disabled:text-gray-200 disabled:hover:border-gray-300" disabled={currentPage === 1} onClick={ () => handlePageClick(currentPage-1) }>Previous</button>
      </div>
      <div className="flex-1">
        <ul className="flex flex-row justify-center">
          {Array.from({length: totalPages}, (_, index) =>
            <li key={`page-${index+1}`}>
              <button className={`border-t border-gray-300 px-3 py-1 hover:border-sky-500 mt-[-1px] ${(index+1 === currentPage) ? 'text-gray-700 border-sky-800' : 'text-gray-400'} hover:text-gray-700`} onClick={ () => handlePageClick(index+1) }>{index+1}</button>
            </li>
          )}
        </ul>
      </div>
      <div className="flex-initial">
        <button className="border-t border-gray-300 px-3 py-1 hover:border-sky-500 mt-[-1px] text-gray-400 hover:text-gray-700 disabled:text-gray-200 disabled:hover:border-gray-300" disabled={currentPage === totalPages} onClick={ () => handlePageClick(currentPage+1) }>Next</button>
      </div>
    </div>
  );
}

export default Pagination;

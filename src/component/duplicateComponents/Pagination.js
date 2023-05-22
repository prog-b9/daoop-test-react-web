import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ propsCountPage, onPress }) => {
//   const handelPage = (nowPage) => {
//     onPress(nowPage.selected + 1);
//     // console.log(nowPage.selected + 1);
//   };
  return (
    <div>
      <ReactPaginate
        // عدد الصفحات
        // pageCount={propsCountPage}
        pageCount={20}
        // onPageChange={3}
        breakLabel="...."
        nextLabel="التالي"
        previousLabel="الرجوع"
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        containerClassName="pagination"
        pageClassName="page-item "
        pageLinkClassName="page-link shadow-none "
        nextClassName="page-item "
        nextLinkClassName="page-link shadow-none"
        previousClassName="page-item "
        previousLinkClassName="page-link shadow-none"
        breakClassName="page-item"
        breakLinkClassName="page-link shadow-none"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;

import React from "react";

const TableContainer = ({ thead = [], item, className }) => {
  return (
    <div
      className={` bg-white ${className} rounded-3 style-scroll-radius style-shadow-large`}
    >
      <table className="table m-0">
        <thead className="" style={{ backgroundColor: "var(--primary-color)" }}>
          <tr>
            {thead.map((item, i) => (
              <th key={i} className="p-3 text-white style-Breadcrumbs-fs">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table style-Breadcrumbs-fs">{item}</tbody>
      </table>
    </div>
  );
};

export default TableContainer;

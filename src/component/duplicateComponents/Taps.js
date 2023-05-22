import React from "react";

const Taps = ({ title = [], charIdAndTarget = [], titleItem = [] }) => {
  return (
    <div>
      <ul
        className=" nav nav-tabs style-scroll-radius pb-1 rounded "
        id="myTab"
        role="tablist"
      >
        {title.map((item, i) => (
          // <li className="nav-item" role="presentation">
          <button
            key={i}
            className={`nav-link fw-bold style-Breadcrumbs-fs text-nowrap text-end ${
              i === 0 ? "active" : null
            }`}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target={`#${charIdAndTarget[i]}`}
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            {item}
          </button>
          // </li>
        ))}
      </ul>
      <div className="mt-4 tab-content" id="myTabContent">
        {titleItem.map((item, i) => (
          <div
            key={i}
            className={`tab-pane  fade show ${i === 0 ? "active" : null}`}
            id={charIdAndTarget[i]}
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            {item}
            {/* <FollowUpTaskCardContainer /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taps;

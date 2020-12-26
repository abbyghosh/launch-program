import React from "react";

function SideFilters({ years, filterValues, handleSetfilterValues }) {
  return (
    <aside className="sidebar_filters">
      <h4 style={{ fontWeight: "700", fontSize: "14px" }}>Filters</h4>

      <section>
        <h5 className="filters_header">
          <span>Launch Year</span>
        </h5>
        <div className="grid_fit">
          {years.map((year) => (
            <span
              key={year}
              className={
                filterValues.year === year
                  ? "filter_buttons filter_buttons_active"
                  : "filter_buttons"
              }
              onClick={() => {
                handleSetfilterValues({ ...filterValues, year });
              }}
            >
              <span>{year}</span>
            </span>
          ))}
        </div>
      </section>

      <section>
        <h5 className="filters_header">
          <span>Successful Launch</span>
        </h5>
        <div className="grid_fit">
          <span
            className={
              filterValues.launchSucess === true
                ? "filter_buttons filter_buttons_active"
                : "filter_buttons"
            }
            onClick={() => {
              handleSetfilterValues({ ...filterValues, launchSucess: true });
            }}
          >
            <span>True</span>
          </span>
          <span
            className={
              filterValues.launchSucess === null
                ? "filter_buttons filter_buttons_active"
                : "filter_buttons"
            }
            onClick={() => {
              handleSetfilterValues({ ...filterValues, launchSucess: null });
            }}
          >
            <span>False</span>
          </span>
        </div>
      </section>

      <section>
        <h5 className="filters_header">
          <span>Successful Landing</span>
        </h5>
        <div className="filter_go_flex">
          <span
            className={
              filterValues.landingSucess === true
                ? "filter_buttons filter_buttons_active"
                : "filter_buttons"
            }
            onClick={() => {
              handleSetfilterValues({ ...filterValues, landingSucess: true });
            }}
          >
            True
          </span>
          <span
            className={
              filterValues.landingSucess === null
                ? "filter_buttons filter_buttons_active"
                : "filter_buttons"
            }
            onClick={() => {
              handleSetfilterValues({ ...filterValues, landingSucess: null });
            }}
          >
            False
          </span>
        </div>
      </section>
    </aside>
  );
}

export default SideFilters;

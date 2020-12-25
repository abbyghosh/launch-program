import React, { useCallback, useEffect, useState } from "react";

import * as services from "./LaunchProgram.service";

import "./LaunchProgram.scss";

const LaunchProgram = () => {
  const [years, setYears] = useState([]);
  const [filterValues, setfilterValues] = useState({
    year: null,
    launchSucess: null,
    landingSucess: null,
  });
  const [allLaunchList, setAllLaunchList] = useState([]);
  /**
   * Function gives the years from a start year to the present year
   */

  const getYears = () => {
    let startYear = 2006;
    let currentYear = new Date().getFullYear();
    let temp = [];
    while (startYear <= currentYear) {
      temp.push(startYear++);
    }
    setYears(temp);
  };
  const getAllLaunchesService = useCallback(() => {
    let { year, launchSucess, landingSucess } = filterValues;
    services
      .getAllLaunches(year, launchSucess, landingSucess)
      .then((res) => {
        console.log("Get all response ", res.data);
        setAllLaunchList([]);
        setAllLaunchList(res.data);
      })
      .catch((err) => console.log("get all response error ", err));
  }, [filterValues]);

  useEffect(() => {
    getYears();
  }, []);
  useEffect(() => {
    getAllLaunchesService();
  }, [getAllLaunchesService]);
  /*   const getSuccessLaunchesService = () => {
    services
      .getSuccessLaunches()
      .then((res) => {
        console.log("Get success response ", res);
        setAllLaunchList(res);
      })
      .catch((err) => console.log("get all response error ", err));
  };
  const getSucessLauncheAndLaunchService = () => {
    services
      .getSucessLauncheAndLaunch()
      .then((res) => {
        console.log("Get both response ", res);
        setAllLaunchList(res);
      })
      .catch((err) => console.log("get all response error ", err));
  };
  const getAllSuccessByYearService = () => {
    services
      .getAllSuccessByYear()
      .then((res) => {
        console.log("Get all success response ", res);
        setAllLaunchList(res);
      })
      .catch((err) => console.log("get all response error ", err));
  }; */
  return (
    <>
      <header>
        <h2>SpaceX Launch Programs</h2>
      </header>
      <div className="body_container">
        <aside className="sidebar_filters">
          <h4>Filters</h4>

          <section>
            <h5 className="filters_header">
              <span>Launch Year</span>
            </h5>
            {/* {years.map(
              (year, idx) =>
                idx % 2 !== 0 && (
                  <div key={idx} className="filter_go_flex">
                    <span
                      style={{ display: "inline-block" }}
                      className={
                        filterValues.year === year
                          ? "filter_buttons filter_buttons_active"
                          : "filter_buttons"
                      }
                      onClick={() => {
                        setfilterValues({ ...filterValues, year });
                      }}
                    >
                      {year}
                    </span>
                    {years[idx + 1] && (
                      <span
                        style={{ display: "inline-block" }}
                        className={
                          filterValues.year === year + 1
                            ? "filter_buttons filter_buttons_active"
                            : "filter_buttons"
                        }
                        onClick={() => {
                          setfilterValues({ ...filterValues, year: year + 1 });
                        }}
                      >
                        {year + 1}
                      </span>
                    )}
                  </div>
                )
            )} */}
            <div className="grid">
              {years.map((year, idx) => (
                <span
                  style={{ display: "inline-block" }}
                  className={
                    filterValues.year === year
                      ? "filter_buttons filter_buttons_active"
                      : "filter_buttons"
                  }
                  onClick={() => {
                    setfilterValues({ ...filterValues, year });
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
            <div className="filter_go_flex">
              <span
                className={
                  filterValues.launchSucess === true
                    ? "filter_buttons filter_buttons_active"
                    : "filter_buttons"
                }
                onClick={() => {
                  setfilterValues({ ...filterValues, launchSucess: true });
                }}
              >
                True
              </span>
              <span
                className={
                  filterValues.launchSucess === null
                    ? "filter_buttons filter_buttons_active"
                    : "filter_buttons"
                }
                onClick={() => {
                  setfilterValues({ ...filterValues, launchSucess: null });
                }}
              >
                False
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
                  setfilterValues({ ...filterValues, landingSucess: true });
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
                  setfilterValues({ ...filterValues, landingSucess: null });
                }}
              >
                False
              </span>
            </div>
          </section>
        </aside>
        <main>
          {allLaunchList.map((list) => (
            <section key={list.flight_number} className="missions_card">
              <figure>
                <img
                  src={list.links.mission_patch_small}
                  alt={list.mission_name}
                  className="mission_img"
                />
                <figcaption>{list.mission_name}</figcaption>
              </figure>
              <summary>
                <span>
                  <h4>Mission Ids: </h4>
                  {list.mission_id.length > 0 && (
                    <ul>
                      {list.mission_id.map((id) => (
                        <li key={id}>{id}</li>
                      ))}
                    </ul>
                  )}
                </span>
                <span>
                  <h4>Launch Year: </h4>
                  <span>{list.launch_year}</span>
                </span>
                <span>
                  <h4>Successful Launch: </h4>
                  <span>{list.launch_success}</span>
                </span>
                <span>
                  <h4>Successful Landing: </h4>
                  <span></span>
                </span>
              </summary>
            </section>
          ))}
        </main>
      </div>
    </>
  );
};

export default LaunchProgram;

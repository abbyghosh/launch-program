import React, { useCallback, useEffect, useState } from "react";

import SideFilters from "../SideFilters";
import ProgramsDetailsCard from "../ProgramsDetailsCard";

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

  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setAllLaunchList([]);
    setLoading(true);
    let { year, launchSucess, landingSucess } = filterValues;
    services
      .getAllLaunches(year, launchSucess, landingSucess)
      .then((res) => {
        setAllLaunchList(res.data);
      })
      .catch((err) => alert("Error fetching data ", err))
      .finally(() => setLoading(false));
  }, [filterValues]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    getYears();
  }, []);
  useEffect(() => {
    getAllLaunchesService();
  }, [getAllLaunchesService]);
  return (
    <>
      <header style={{ marginBottom: "10px" }}>
        <h2>SpaceX Launch Programs</h2>
      </header>
      <div className="body_container">
        <SideFilters
          years={years}
          filterValues={filterValues}
          handleSetfilterValues={(updateBody) => setfilterValues(updateBody)}
        />
        <main>
          <ProgramsDetailsCard
            allLaunchList={allLaunchList}
            loading={loading}
          />
        </main>
      </div>
      {showScroll && (
        <span className="go_top" onClick={() => window.scrollTo(0, 0)}>
          Scroll to top
        </span>
      )}
      <footer>
        <span>Developed by: </span> <span>Abhishek Ghosh</span>
      </footer>
    </>
  );
};

export default LaunchProgram;

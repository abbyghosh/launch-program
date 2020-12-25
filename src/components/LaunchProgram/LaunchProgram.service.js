import axios from "axios";
const HOST_URL = "https://api.spaceXdata.com/v3/launches";
export function getAllLaunches(launch_year, launch_success, land_success) {
  return axios.get(HOST_URL, {
    params: { limit: 10, launch_success, land_success, launch_year },
  });
}
/* 
export function getSuccessLaunches(launch_success, land_success, launch_year) {
  return axios.get(HOST_URL, {
    params: { launch_success, land_success, launch_year },
  });
}
export function getSucessLauncheAndLaunch() {
  return axios.get(
    "HOST_URL" &launch_success=true&land_success=true"
  );
}
export function getAllSuccessByYear() {
  return axios.get(
    "HOST_URL" &launch_success=true&land_success=true&launch_year=2014"
  );
}
 */

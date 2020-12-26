import axios from "axios";

const HOST_URL = "https://api.spaceXdata.com/v3/launches";

export function getAllLaunches(launch_year, launch_success, land_success) {
  return axios.get(HOST_URL, {
    params: { limit: 100, launch_success, land_success, launch_year },
  });
}

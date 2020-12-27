# SpaceX Launch Programs

A PWA application to get SpaceX launch programs along with filters like launch year, successful launch and successful landing, built with React (create-react-app). Its is responsive for Desktop, Tablet and Mobile.

Here is my lighthouse score.\
![Lighthouse score](https://github.com/abbyghosh/launch-program/blob/master/spacex-netlify-lighthouse-result.png?raw=true)

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

External Dependencies:
`axios`
`node-sass`

Installation:

#### `npm install`

To Start Server:

#### `npm start`

\
To Visit App:\
[https://cranky-babbage-28aa5f.netlify.app/](https://cranky-babbage-28aa5f.netlify.app/)
<!---[https://launch-program.herokuapp.com/](https://launch-program.herokuapp.com/) -->

## Reflection

<!--This was given to me as an assignment.-->
The two important aspects of the assigment was to make it responsive and to load images based on pixel density. Here is my approach -

- I have an array `years` that would be getting the years starting from 2006 to current from a function `getYears()`. I have then lopped over the array to display it in the filters section. I have used grid to distribute it into two sections.
- To maintain the pixel ratio I have used `srcset` attribute present in `img` tag.
- Used `onload` attribute of `img` to retry failed image after 0.5 second.
- For making it responsive I have used mediaquery and CSS grid.
- When clicked on a filter until the service response is received, "_Fetching Data..._" is displayed and if the requested filter is empty "_There are no data for the selected filter_" is being displayed (try for year 2011).
- I have configured it for PWA. On network error it would be redirecting the user to a cached page that would say "_Please connect to internet_".
- As an addition feature I have added "_Scroll to top_" when the user is down by 300px from top.

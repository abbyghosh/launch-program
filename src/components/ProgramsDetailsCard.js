import React from "react";

function ProgramsDetailsCard({ allLaunchList, loading }) {
  return (
    <>
      {allLaunchList.length > 0 ? (
        allLaunchList.map((list) => (
          <section key={list.flight_number} className="missions_card">
            <figure>
              <img
                src={list.links.mission_patch_small}
                srcSet={`${list.links.mission_patch_small} 1x, 
                  ${list.links.mission_patch} 2x,
                  ${list.links.mission_patch} 3x`}
                alt={list.mission_name}
                className="mission_img"
              />
              <figcaption>
                {list.mission_name} #{list.flight_number}
              </figcaption>
            </figure>
            <summary>
              <div>
                <h4>Mission Ids:&nbsp;</h4>
                {list.mission_id.length > 0 && (
                  <ul className="missionId_ist">
                    {list.mission_id.map((id) => (
                      <li key={id}>{id}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h5>Launch Year:&nbsp;</h5>
                <span>{list.launch_year}</span>
              </div>
              <div>
                <h5>Successful Launch:&nbsp;</h5>
                <span>{list.launch_success?.toString()}</span>
              </div>
              <div>
                <h5>Successful Landing:&nbsp;</h5>
                <span></span>
              </div>
            </summary>
          </section>
        ))
      ) : !loading ? (
        <div className="no_data">There are no data for the selected filter</div>
      ) : (
        <div className="no_data">Fetching Data...</div>
      )}
    </>
  );
}

export default ProgramsDetailsCard;

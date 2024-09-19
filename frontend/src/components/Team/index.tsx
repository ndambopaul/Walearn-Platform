import React from "react";
import SectionTitle from "../Common/SectionTitle";

import TeamData from "./teamData";
import SingleTeamMember from "./singleTeamMember";

const Team = () => {
  return (
    <>
      <section
        id="inrstructors"
        className=" bg-light py-8 md:py-10 lg:py-18"
      >
        <div className="container">
          <SectionTitle
            title="Meet Our Team"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 justify-self-start md:grid-cols-2 lg:grid-cols-3">
            {TeamData.map((member) => (
              <div key={member.id} className="w-full">
              <SingleTeamMember  member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

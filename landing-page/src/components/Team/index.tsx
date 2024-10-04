import React from "react";
import SectionTitle from "../Common/SectionTitle";

import TeamData from "./teamData";
import SingleTeamMember from "./singleTeamMember";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <>
       <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        id="team"
        className=" bg-slate-100 py-8 md:py-10 lg:py-18 px-8 lg:px-20"
      >
        <div className="container">
          <SectionTitle
            title="Meet And Connect with our Platform Team"
            paragraph=""
            // center
          />

          <div className="grid grid-cols-1 gap-8 justify-self-start md:grid-cols-2 lg:grid-cols-3">
            {TeamData.map((member) => (
              <div key={member.id} className="w-full">
              <SingleTeamMember  member={member} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Team;

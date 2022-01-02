import React from "react";

// components

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Manage({ admissionsToday }) {
   return (
      <>
         <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-5/12 px-4">
               <CardSocialTraffic />
            </div>
            <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
               <CardPageVisits admissionsToday={admissionsToday} />
            </div>
         </div>
      </>
   );
}

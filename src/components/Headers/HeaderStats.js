import React from "react";
import CardStats from "components/Cards/CardStats.js";
import { faUserClock, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function HeaderStats({ totalStudents, admissionsToday }) {
   return (
      <>
         {/* Header */}
         <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
               <div>
                  {/* Card stats */}
                  <div className="flex flex-wrap">
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardStats
                           statSubtitle="TOTAL STUDENTS"
                           statTitle={
                              totalStudents.length === undefined
                                 ? "Loading..."
                                 : totalStudents.length
                           }
                           // statArrow="meh"
                           // statPercent="0"
                           // statPercentColor="text-red-500"
                           statIconName={faUsers}
                           statIconColor="bg-red-500"
                        />
                     </div>
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardStats
                           statSubtitle="ADMISSIONS TODAY"
                           statTitle={
                              admissionsToday.length === undefined
                                 ? "Loading..."
                                 : admissionsToday.length
                           }
                           statArrow={
                              (admissionsToday.length !== 0
                                 ? (admissionsToday.length /
                                      totalStudents.length) *
                                   100
                                 : 0) > 0
                                 ? "up"
                                 : "down"
                           }
                           statPercent={
                              admissionsToday.length !== 0
                                 ? Math.floor((admissionsToday.length /
                                      totalStudents.length) *
                                   100)
                                 : 0
                           }
                           statPercentColor={
                              (admissionsToday.length !== 0
                                 ? (admissionsToday.length /
                                      totalStudents.length) *
                                   100
                                 : 0) > 0
                                 ? "text-emerald-500"
                                 : "text-red-500"
                           }
                           statIconName={faUserClock}
                           statIconColor="bg-orange-500"
                        />
                     </div>
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        {/* <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                /> */}
                     </div>
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        {/* <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                /> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

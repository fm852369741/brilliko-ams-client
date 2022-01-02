import TR from "components/Table/TR";
import moment from "moment";
import React from "react";

// components

export default function CardPageVisits({ admissionsToday }) {
   return (
      <>
         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
               <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                     <h3 className="font-semibold text-base text-blueGray-700">
                        Recent Admissions
                     </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                     <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                     >
                        See all
                     </button>
                  </div>
               </div>
            </div>
            <div className="block w-full overflow-x-auto">
               {/* Projects table */}
               <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                     <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Student Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Student Email
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Course Type
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Languages
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Starting Date
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Ending Date
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Time Left
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {[...admissionsToday].map(function (admission, idx) {
                        if (idx < 5) {
                           const joiningDate = moment(
                              admission.dateJoined
                                 .split("-")
                                 .reverse()
                                 .join("-")
                           );
                           const endingDate = moment(
                              admission.daysLeft.split("-").reverse().join("-")
                           );

                           // const time = `${
                           //    endingDate.diff(joiningDate, "years") > 0
                           //       ? endingDate.diff(joiningDate, "years") +
                           //         " years"
                           //       : ""
                           // } ${
                           //    endingDate.diff(joiningDate, "months") > 0
                           //       ? endingDate.diff(joiningDate, "months") -
                           //            (endingDate.diff(joiningDate, "years") > 0
                           //               ? endingDate.diff(
                           //                    joiningDate,
                           //                    "years"
                           //                 ) * 12
                           //               : 0) >
                           //         0
                           //          ? endingDate.diff(joiningDate, "months") -
                           //            (endingDate.diff(joiningDate, "years") > 0
                           //               ? endingDate.diff(
                           //                    joiningDate,
                           //                    "years"
                           //                 ) * 12
                           //               : 0) +
                           //            " months"
                           //          : ""
                           //       : ""
                           // } ${
                           //    endingDate.diff(joiningDate, "days") -
                           //    endingDate.diff(joiningDate, "months") * 30 +
                           //    " days"
                           // }`;

                           return (
                              <TR
                                 key={admission._id}
                                 first={admission.name}
                                 second={admission.email}
                                 third={admission.courseType}
                                 fourth={admission.courses.join(", ")}
                                 fifth={admission.dateJoined}
                                 sixth={admission.daysLeft}
                                 seventh={
                                    endingDate.diff(joiningDate, "days") +
                                    " days"
                                 }
                              />
                           );
                        } else {
                           return "";
                        }
                     })}
                     {[...admissionsToday].length === 0 && (
                        <TR key="invalid" first={"No New Admission Today."} />
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}

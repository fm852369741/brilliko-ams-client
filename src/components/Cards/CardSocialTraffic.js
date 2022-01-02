import {
   faUserEdit,
   faUserMinus,
   faUserPlus,
   faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomPopup from "components/popups/CustomPopup";
import React, { useEffect, useState } from "react";

// components

export default function CardSocialTraffic() {
   const [state, setState] = useState("");

   const escape = function (e) {
      if (e.key == "Escape") {
         setState("");
      }
   };

   useEffect(() => {
      window.removeEventListener("keyup", escape);
      window.addEventListener("keyup", escape);
   }, [state]);

   return (
      <>
         {state && (
            <CustomPopup>
               <div className="bg-white">{state}</div>
            </CustomPopup>
         )}
         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0 hidden">
               <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                     <h3 className="font-semibold text-base text-blueGray-700">
                        Actions
                     </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                     <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hidden"
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
                  <thead className="thead-light">
                     <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Actions
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           {/* Visitors */}
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                     </tr>
                  </thead>
                  <tbody className="w-full">
                     <tr className="flex justify-between min-w-full mx-auto items-center">
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                           <button onClick={() => setState("add")}>
                              <FontAwesomeIcon
                                 style={{ cursor: "pointer" }}
                                 icon={faUserPlus}
                              />
                              <span
                                 style={{ cursor: "pointer" }}
                                 className="ml-2"
                              >
                                 Add Student
                              </span>
                           </button>
                        </th>
                        <th
                           onClick={() => setState("edit")}
                           className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                           <FontAwesomeIcon
                              icon={faUserEdit}
                              style={{ cursor: "pointer" }}
                           />
                           <span style={{ cursor: "pointer" }} className="ml-2">
                              Edit Student
                           </span>
                        </th>
                        <th
                           onClick={() => setState("delete")}
                           className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                           <FontAwesomeIcon
                              icon={faUserTimes}
                              style={{ cursor: "pointer" }}
                           />
                           <span style={{ cursor: "pointer" }} className="ml-2">
                              Delete Student
                           </span>
                        </th>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}

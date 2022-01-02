import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Manage from "views/admin/Manage.js";

export default function Admin() {
   const [requestID, setRequestID] = useState(1);
   const [loggedIn, setLoggedIn] = useState(true);
   const [totalStudents, setTotalStudents] = useState([]);
   const [admissionsToday, setAdmissionToday] = useState([]);

   useEffect(() => {
      let user = window.localStorage.getItem("user");

      if (user === null) setLoggedIn(false);
      else if (JSON.parse(user).name === undefined) setLoggedIn(false);
   }, []);

   const logout = (e) => {
      e.preventDefault();
      window.localStorage.removeItem("user");
      setLoggedIn(false);
   };

   const getStudents = async function () {
      const request = axios.get("/users/get");
      const response = (await request).data;
      const totalAdmissionsToday = admissionsTodayCalc(response);

      setTimeout(() => {
         setRequestID((requestID) => requestID + 1);
      }, 1500);

      setTotalStudents(response);
      setAdmissionToday(totalAdmissionsToday);
   };

   const admissionsTodayCalc = function (admissions) {
      const chrome = window.chrome;

      if (chrome != undefined) {
         const date = new Date()
            .toLocaleString()
            .split(",")[0]
            .replace(/\//g, "-")
            .split("-");

         const todaysDate = moment(`${date[2]}-${date[0]}-${date[1]}`);

         const totalAdmissions = admissions.flatMap(function (admission) {
            const admD = moment(
               admission.dateJoined.split("-").reverse().join("-")
            );

            if (admD.diff(todaysDate, "days") === 0) {
               return admission;
            } else {
               return undefined;
            }
         });

         const totalAdmissionsCount = totalAdmissions.filter(
            (admission) => admission !== undefined
         );

         return totalAdmissionsCount;
      } else {
         const date = new Date()
            .toLocaleString()
            .split(",")[0]
            .replace(/\//g, "-")
            .split("-");

         const todaysDate = moment(`${date[2]}-${date[1]}-${date[0]}`); 

         const totalAdmissions = admissions.flatMap(function (admission) {
            const admD = moment(
               admission.dateJoined.split("-").reverse().join("-")
            );

            if (admD.diff(todaysDate, "days") === 0) {
               return admission;
            } else {
               return undefined;
            }
         });

         const totalAdmissionsCount = totalAdmissions.filter(
            (admission) => admission !== undefined
         );

         return totalAdmissionsCount;
      }
   };

   useEffect(() => {
      setTimeout(() => {
         setRequestID(requestID + 1);
      }, 1500);
   }, []);

   useEffect(() => {
      (async function fetchData() {
         getStudents();
      })();
   }, [requestID]);

   return (
      <>
         <Sidebar />
         <div className="relative md:ml-64 bg-blueGray-100">
            {!loggedIn ? <Redirect to="/auth/login" /> : ""}
            <AdminNavbar logout={logout} />
            {/* Header */}
            <HeaderStats
               totalStudents={totalStudents}
               admissionsToday={admissionsToday}
            />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
               <Switch>
                  <Route path="/admin/dashboard" exact>
                     <Dashboard admissionsToday={admissionsToday} />
                  </Route>
                  <Route path="/admin/settings" exact component={Settings} />
                  {/* <Route path="/admin/manage" exact>
                     <Manage admissionsToday={admissionsToday} />
                  </Route> */}
                  <Redirect from="/admin" to="/admin/dashboard" />
               </Switch>
               <FooterAdmin />
            </div>
         </div>
      </>
   );
}

import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchDropdown = () => {
   // dropdown props
   const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
   const btnDropdownRef = React.createRef();
   const popoverDropdownRef = React.createRef();
   const openDropdownPopover = () => {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
         placement: "bottom-start",
      });
      setDropdownPopoverShow(true);
   };
   const closeDropdownPopover = () => {
      setDropdownPopoverShow(false);
   };

   return (
      <>
         <a
            className="text-blueGray-500 block"
            href="#search"
            ref={btnDropdownRef}
            onClick={(e) => {
               e.preventDefault();
               dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
            }}
         >
            <div className="items-center mb-2 mr-2">
               <span className="text-sm overflow-hidden object-cover text-white bg-blueGray-200">
                  <div className="w-12 h-12 border-2 border-white rounded-full mt-2 flex justify-center items-center">
                     <FontAwesomeIcon icon={faSearch} className="text-lg" />
                  </div>
               </span>
            </div>
         </a>
         <div
            ref={popoverDropdownRef}
            className={
               (dropdownPopoverShow ? "block " : "hidden ") +
               "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            }
         >
            <Link
               to="/admin/search/students"
               className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
               }
            >
               Students
            </Link>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />
            <Link
               to="/admin/search/teachers"
               className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
               }
            >
               Teacher
            </Link>
         </div>
      </>
   );
};

export default SearchDropdown;

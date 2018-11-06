
/*

  sec009a_SFC_not_found_page.jsx

import GC_not_found_page from "../../a16_components/SFC_not_found_page.jsx";

 */

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import React from 'react';


//  <div>404!</div>
//  <div>
//    404 - <a href="/">Go home</a>
//  </div>

//  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: GC_not_found_page <1>]

//  [RTMPL2_5|app_router.jsx::GC_not_found_page rtr1;^B]

const GC_not_found_page = () =>
(
  <span>
    404 - <Link to="/">Go home</Link>
  </span>
);


export default GC_not_found_page;

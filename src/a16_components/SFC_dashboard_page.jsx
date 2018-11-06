
/*
  sec009a_SFC_expense_dashboard_page.jsx

import MP_SFC_dashboard_page from "../../a16_components/SFC_dashboard_page.jsx";

 */

import React from 'react';

import moment from 'moment';


const GC_style={
    padding: 1 + "rem",
    backgroundColor: "lightBlue"
    };

    //  [RTMPL2_5|app_router.jsx::SFC_dashboard_page rtr1;^B]

    //  [RTMPL2_5|public_app_router.jsx::MP_SFC_dashboard_page rtr2;^B]

    //  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: MP_SFC_dashboard_page <1>^B]

const MP_SFC_dashboard_page = () =>
(
  <div>
    {/*  */}
    <div style={GC_style}>{ moment().format('LLLL') }</div>
    {/* //[RTMPL2_1|A01_DIrectory_01.txt::moment().format('LLLL') drc1;^B] */}
    Dashboard Page Content
  </div>
);

export default MP_SFC_dashboard_page;


/***************************************************************************

  sec009a_app_router.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a_Boilerplates\Boilerplate_v2\src\
a08_routers\app_router.jsx

       //  [ DEF1: GC_app_router <1>]

import { MP_history } from '../a08_routers/app_router.jsx';
                 //[RTMPL2_3|z32_main_app.jsx::app_router import-1;^B]

//  [RTMPL2_5|public_app_router.jsx::RTR1: MP_SFC_public_route <1>^B]
                                       //[ MP_SFC_public_route top1;]

//  [RTMPL2_5|private_app_router.jsx::RTR1: MP_SFC_private_route <1>^B]
                                        //[ MP_SFC_private_route top1a;]
                                        //[ MP_SFC_private_route xxx^B]


 ***************************************************************************/


//#########################################################


import React from 'react';

import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../a70_Utilities_01/Loadable_Handlers.jsx";
     //[ MP_common_loading_handler grp-1;]
                        //[RTMPL2_4|Loadable_Handlers.jsx::Loadable_Handlers import-1;^B]

//  ================================================================

export const MP_history = createHistory();
         //[ MP_history ref2;]
//[RTMPL2_3|z32_main_app.jsx::MP_history ref1;^B]

//  ================================================================

import MP_SFC_private_route from './private_app_router.jsx';

//  ================================================================

import MP_SFC_public_route from './public_app_router.jsx';

//#########################################################


/*************************************************************
import  MP_SFC_login_page from '../../a16_components/login_page.jsx';
import  SFC_dashboard_page  from  "../a16_components/SFC_dashboard_page.jsx";
import  SFC_header from  "../a16_components/SFC_header.jsx";
import  SFC_help_page  from  "../a16_components/SFC_help_page.jsx";
import  SFC_not_found_page  from  "../a16_components/SFC_not_found_page.jsx";
 *************************************************************/


//  K:\A01_Udemy\Z01_General_Notes\webpack_optimization_01.txt

//  import  SFC_header from  "../a16_components/SFC_header.jsx";


            //[ MP_common_loading_handler grp-1;^B]
            //[ MP_common_loading_handler ]

/*************************************************************/



const SFC_login_page = Loadable({
  loader: () => import('../a16_components/login_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});

const MP_SFC_dashboard_page = Loadable({
  loader: () => import('../a16_components/SFC_dashboard_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_help_page = Loadable({
  loader: () => import('../a16_components/SFC_help_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_not_found_page = Loadable({
  loader: () => import('../a16_components/SFC_not_found_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
/*************************************************************/

//  ----------------------------------------------------------------


   //  [RTMPL2_3|z32_main_app.jsx::EXE1: GC_app_router <1>^B]

//  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: GC_app_router <1>^B]

       //[ DEF1: GC_app_router <1>^B]
const GC_app_router = () => (
  <div>
 {/*
    //  SEC_016 --- 164. Redirecting Login or Logout 12:48
    SWITCHING BACK from BrowserRouter to Router, and including history
    <BrowserRouter>
   */}
  <Router history={MP_history}>
           {/* //[ MP_history ref2;^B] */}
  <div>
  {/* //  [RTMPL2_8|SFC_header.jsx::SFC_header tpl1x;^B] */}

    <Switch>
 {/*  */}
        <MP_SFC_public_route path="/" component={SFC_login_page} exact={true} />
 {/* //[ MP_SFC_public_route top1;^B] */}
 {/* //[RTMPL2_8|login_page.jsx::SFC_login_page rtr1;^B]  */}

        <MP_SFC_private_route path="/dashboard" component={MP_SFC_dashboard_page} exact={true} />
 {/* //[ MP_SFC_private_route top1a;^B] */}
 {/* //[RTMPL2_8|SFC_dashboard_page.jsx::SFC_dashboard_page rtr1;^B] */}
        <Route path="/help" component={SFC_help_page}  />
        {/* //[RTMPL2_8|SFC_help_page.jsx::GC_help_page rtr1;^B] */}
        <Route component={SFC_not_found_page}  />
        {/* //[RTMPL2_8|SFC_not_found_page.jsx::GC_not_found_page rtr1;^B] */}
    </Switch>
  </div>
    </Router>
  </div>
  );

export default GC_app_router;

//#########################################################
//#########################################################

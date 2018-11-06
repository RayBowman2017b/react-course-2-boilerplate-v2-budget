
/*
       //  [ DEF1: GC_provider_for_router <1>]

 */


//  SEC_017 --- 180. Babel Polyfill 4:55
import "@babel/polyfill";
//const polyfill = require ("@babel/polyfill");
//require ("@babel/polyfill");
//require ("@babel/polyfill");


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SFC_app_router, { MP_history } from './a08_routers/app_router.jsx';
                              //[RTMPL2_5|app_router.jsx::app_router import-1;^B]

import MP_configure_store from "./a04_store/STR_configure_store.jsx";
   //[RTMPL2_6|STR_configure_store.jsx::sec011a_L099_STR_configure_store import-1;^B]

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './a68_styles/styles.scss';


//[ MP_startSetExpenses exe1;]

//=====================================================================

//  import  './sec014a_firebase/sec014_L142_firebase.js';

import { firebase } from './a64_firebase/firebase.js';
               //[RTMPL2_11|firebase.js::firebase import-2;^B]

//=====================================================================

import { MP_login, MP_logout } from './a44_actions/ACTN_auth.jsx';
                        //[RTMPL2_7|ACTN_auth.jsx::ACTN_auth import-1;^B]

//=====================================================================

//  SEC_017 --- 179. Adding Loader 9:26
import MP_SFC_loading_page from "./a16_components/loading_page.jsx";
                    //[RTMPL2_8|loading_page.jsx::loading_page import-1;^B]

//=====================================================================

const GC_store = MP_configure_store ();
  //[ GC_store a1;]
    //[RTMPL2_6|STR_configure_store.jsx::EXE1: MP_configure_store <1>^B]
             //[RTMPL2_1|A01_DIrectory_01.txt::MP_configure_store drc1;^B]

//=====================================================================

//  [ GC_provider_for_router exe1;]

//  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: GC_provider_for_router <1>^B]

//[ DEF1: GC_provider_for_router <1>^B]
const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
        {/* //  [RTMPL2_5|app_router.jsx::EXE1: GC_app_router <1>^B] */}
    </Provider>
    );


import { seed_DB } from "./a70_Utilities_01/seed_database.jsx";
             //[RTMPL2_4|seed_database.jsx::seed_database import-1;^B]

//=====================================================================

const GC_render_CTRL = {

  has_rendered: false,

   appRoot_01 : document.getElementById('main_app_root'),
 //[RTMPL2_3|index.html::getElementById('main_app_root'); ref1;^B]
//[RTMPL2_15|index.html::getElementById('main_app_root'); ref2;^B]

       //    [ EXE1: render_app_loading <1>]

//  SEC_017 --- 179. Adding Loader 9:26
  // render_app_loading () {
  //   ReactDOM.render(<p>Loading...</p>, this.appRoot_01);
  // },
  render_app_loading () {
    ReactDOM.render(<MP_SFC_loading_page />, this.appRoot_01);
  },

   //  [ EXE1a: render_app <1>]
   //  [ EXE1b: render_app <1>]

  render_app ()  {
    if ( ! this.has_rendered )  {
          ReactDOM.render(GC_provider_for_router, this.appRoot_01);
                      //[ GC_provider_for_router exe1;^B]
          this.has_rendered = true;
    }
  }
};
//=====================================================================

//  SEC_004 --- 27. Nesting Components 5:43

//  [RTMPL2_1|A01_DIrectory_01.txt::ReactDOM.render GC_provider_for_router^B]

//ReactDOM.render
//      //  (GC_routes,
////  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
//      //(<SFC_app_router />,
//      (GC_provider_for_router,
//       GC_appRoot_01);

//  SEC_015 --- 158. Fetching Expenses: Part II 13:52

//ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
//ReactDOM.render(<p>Loading...</p>, GC_appRoot_01);
GC_render_CTRL.render_app_loading ();


console.log (" sec012a_app.jsx is running!");

//    setTimeout (() => {}, 24000);

//=====================================================================


//  SEC_016 --- 162. Login Page and Google Authentication 19:26
//  SEC_016 --- 164. Redirecting Login or Logout 12:48

//  [RTMPL2_7|ACTN_auth.jsx::onAuthStateChanged signInWithPopup xrf1;^B]
//  [RTMPL2_7|ACTN_auth.jsx::onAuthStateChanged signOut xrf1;^B]

//  [RTMPL2_1|A01_DIrectory_01.txt::firebase.auth().onAuthStateChanged drc1;^B]

firebase.auth().onAuthStateChanged ( (P_user) => {

  if (P_user) {

    console.log("log in", P_user);

//  SEC_016 --- 165. The Auth Reducer 15:49
    GC_store.dispatch(MP_login(P_user.uid));
    //[RTMPL2_7|ACTN_auth.jsx::EXE1: MP_login <1>^B]

    //GC_store.dispatch(startSetExpenses()).then(() => {
    //  ReactDOM.render(jsx, document.getElementById('app'));
    // GC_store.dispatch(MP_startSetExpenses())
    // //[ GC_store a1;^B]
    //               //[ MP_startSetExpenses exe1;^B]
    //         .then ( () => {
    //           GC_render_CTRL.render_app ();
    //               //[ EXE1a: render_app <1>^B]

    //         //seed_DB (P_user, GC_store);
    //         //  [RTMPL2_4|seed_database.jsx::EXE1: seed_DB <1>^B]
    //                       }
    //               )
    //         .catch ((err) => console.log
    //                    (` ******** ERROR in app.jsx :: ${err}`) );

              GC_render_CTRL.render_app ();

    //console.log("MP_history.location.pathname", MP_history.location.pathname);
    //console.log("MP_history.location", MP_history.location);
    if (MP_history.location.pathname === '/')
      MP_history.push('/dashboard');
    //[RTMPL2_5|app_router.jsx::MP_history ref1;^B]

  } else {
    console.log("log out", P_user);

    GC_store.dispatch(MP_logout());
//[RTMPL2_7|ACTN_auth.jsx::EXE1: MP_logout <1>^B]

    GC_render_CTRL.render_app ();
        //[ EXE1b: render_app <1>^B]

    MP_history.push('/');
  }
} );


//=====================================================================
//=====================================================================

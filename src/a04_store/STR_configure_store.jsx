
/*

  sec011a_L099_STR_configure_store.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_store\sec011a_L099_STR_configure_store.jsx

import MP_configure_store from "./a04_store/STR_configure_store.jsx";
                       //[RTMPL2_3|z32_main_app.jsx::sec011a_L099_STR_configure_store import-1;^B]

//  SEC_011 --- 99. Organizing Redux 14:50

 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import MP_authReducer from "../a48_reducers/RDCR_auth.jsx";
                //[RTMPL2_10|RDCR_auth.jsx::RDCR_auth import-1;^B]

//=====================================================================

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//=====================================================================


//  Store creation

       //  [RTMPL2_3|z32_main_app.jsx::EXE1: MP_configure_store <1>]

//  const GC_store = MP_configure_store ();

export default () => {

//  const GC_store = createStore

   //  [RTMPL2_1|A01_DIrectory_01.txt::create Store for reducers drc1;^B]

const L_store = createStore
        (
            combineReducers (
            {
                auth: MP_authReducer
               //[RTMPL2_8|login_page.jsx::auth: MP_authReducer ref1;^B]
               //[RTMPL2_8|SFC_header.jsx::auth: MP_authReducer ref3;^B]
        //[RTMPL2_5|public_app_router.jsx::auth: MP_authReducer ref2;^B]
                //[RTMPL2_7|ACTN_auth.jsx::MP_login auth ref1;^B]
                //[RTMPL2_7|ACTN_auth.jsx::MP_logout auth ref1;^B]
//[RTMPL2_10|RDCR_auth.jsx::combineReducers auth: MP_authReducer^B]
                //[RTMPL2_10|RDCR_auth.jsx::auth: MP_authReducer ref4a;^B]
                //[RTMPL2_10|RDCR_auth.jsx::auth: MP_authReducer ref4b;^B]
                         //[RTMPL2_4|seed_database.jsx::users/${P_user.uid} ref1;^B]
                      //[RTMPL2_1|A01_DIrectory_01.txt::auth: MP_authReducer drc1;^B]
            }
                            ),

            composeEnhancers(applyMiddleware(thunk))
        );

    return L_store;
}

//=====================================================================

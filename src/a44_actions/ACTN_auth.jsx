
/***************************************************************************

ACTN_auth.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a_Boilerplates\Boilerplate_v2\src\
a44_actions\ACTN_auth.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec011a_L099_actions\sec016a_L162_ACTN_auth.jsx


       //  [ DEF1: MP_login <1>]
       //  [ DEF1: MP_start_login <1>]
       //  [ DEF1: MP_logout <1>]
       //  [ DEF1: MP_start_logout <1>]


import { MP_auth_actions, MP_start_login, MP_start_logout } from '../a44_actions/ACTN_auth.jsx';
import { MP_login, MP_logout } from '../a44_actions/ACTN_auth.jsx';
            //[RTMPL2_3|z32_main_app.jsx::ACTN_auth import-1;^B]
              //[RTMPL2_8|SFC_header.jsx::ACTN_auth import-2;^B]
              //[RTMPL2_10|RDCR_auth.jsx::ACTN_auth import-3;^B]
              //[RTMPL2_8|login_page.jsx::ACTN_auth import-4;^B]

ACTIONS: login logout ref1;

//[RTMPL2_1|A01_DIrectory_01.txt::MP_auth_actions drc1;^B]

MP_auth_actions.ACT_AUTH_login
MP_auth_actions.ACT_AUTH_logout

 ***************************************************************************/

import { firebase, MP_google_auth_provider }
  from '../a64_firebase/firebase.js';
  //[RTMPL2_11|firebase.js::firebase import-3;^B]


export const MP_auth_actions =
{
  ACT_AUTH_login:      'LOGIN',
  ACT_AUTH_logout:     'LOGOUT'
};

//  [RTMPL2_3|z32_main_app.jsx::EXE1: MP_login <1>]

   //  [RTMPL2_6|STR_configure_store.jsx::MP_login auth ref1;^B]

   //[ DEF1: MP_login <1>^B]
export const MP_login = (P_uid) => ({
    type: MP_auth_actions.ACT_AUTH_login,
    //[RTMPL2_10|RDCR_auth.jsx::MP_auth_actions.ACT_AUTH_login ref1;^B]
    uid: P_uid
});

//  [RTMPL2_8|login_page.jsx::REF1: MP_start_login <1>]
//  [RTMPL2_8|login_page.jsx::EXE1: MP_start_login <1>]

   //[ DEF1: MP_start_login <1>^B]
export const MP_start_login = () => {
    return () => {
        return firebase.auth().signInWithPopup(MP_google_auth_provider);
        //[RTMPL2_3|z32_main_app.jsx::onAuthStateChanged signInWithPopup xrf1;^B]
    };
};


//  [RTMPL2_3|z32_main_app.jsx::EXE1: MP_logout <1>]

   //  [RTMPL2_6|STR_configure_store.jsx::MP_logout auth ref1;^B]

   //[ DEF1: MP_logout <1>^B]
export const MP_logout = () => ({
    type: MP_auth_actions.ACT_AUTH_logout
    //[RTMPL2_10|RDCR_auth.jsx::MP_auth_actions.ACT_AUTH_logout ref1;^B]
});

//  [RTMPL2_8|SFC_header.jsx::REF1: MP_start_logout <1>]
//  [RTMPL2_8|SFC_header.jsx::EXE1: MP_start_logout <1>]

   //[ DEF1: MP_start_logout <1>^B]
export const MP_start_logout = () => {
    return () => {
        return firebase.auth().signOut();
        //[RTMPL2_3|z32_main_app.jsx::onAuthStateChanged signOut xrf1;^B]
    };
};

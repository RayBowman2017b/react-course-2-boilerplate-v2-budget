
/***************************************************************************

sec016a_L165_RDCR_auth.jsx

import MP_authReducer from "../a48_reducers/RDCR_auth.jsx";
//[RTMPL2_6|STR_configure_store.jsx::RDCR_auth import-1;^B]
//[RTMPL2_6|STR_configure_store.jsx::combineReducers auth: MP_authReducer^B]


       //[RTMPL2_1|A01_DIrectory_01.txt::DRC1: MP_authReducer <1>^B]

MP_auth_actions.ACT_AUTH_login
MP_auth_actions.ACT_AUTH_logout

 ***************************************************************************/

import { MP_auth_actions } from '../a44_actions/ACTN_auth.jsx';
                     //[RTMPL2_7|ACTN_auth.jsx::ACTN_auth import-3;^B]

export default (P_state = {}, P_action) => {
    switch (P_action.type) {
        case (MP_auth_actions.ACT_AUTH_login):
        //[RTMPL2_7|ACTN_auth.jsx::MP_auth_actions.ACT_AUTH_login ref1;^B]
              //[RTMPL2_1|A01_DIrectory_01.txt::MP_auth_actions.ACT_AUTH_login drc1;^B]
            return {
                uid: P_action.uid
            };
        //[RTMPL2_6|STR_configure_store.jsx::auth: MP_authReducer ref4a;^B]

        case (MP_auth_actions.ACT_AUTH_logout):
        //[RTMPL2_7|ACTN_auth.jsx::MP_auth_actions.ACT_AUTH_logout ref1;^B]
              //[RTMPL2_1|A01_DIrectory_01.txt::MP_auth_actions.ACT_AUTH_logout drc1;^B]
            return {};
        //[RTMPL2_6|STR_configure_store.jsx::auth: MP_authReducer ref4b;^B]
        default: return P_state;
    };
};


/***************************************************************************

  sec009a_SFC_header.jsx

import MP_header from '../../a16_components/SFC_header.jsx';

 ***************************************************************************/

import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { MP_start_logout } from '../a44_actions/ACTN_auth.jsx';
                     //[RTMPL2_7|ACTN_auth.jsx::ACTN_auth import-2;^B]


const GF_link=(P_props) =>
    (
    <button style={{ padding: 1 + "rem", margin: 1 + "rem" }}>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.message}
    </NavLink>
  </button>
);

   //  [RTMPL2_5|app_router.jsx::SFC_header tpl1x;^B]
   //  [RTMPL2_5|private_app_router.jsx::SFC_header rtr2;^B]

   //  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: MP_header <1>]

export const SFC_header = (props) =>
(
    <header className="primary-header">
          {/* //[RTMPL2_9|_header.scss::.primary-header css1;^B] */}
      <div className="content-container">
          {/* //[RTMPL2_9|_content-container.scss::.content-container css2;^B] */}
        <div className="primary-header__content">
          {/* //[RTMPL2_9|_header.scss::.primary-header__content css1;^B] */}
  
          <Link className="primary-header__title" to="/dashboard">
          {/* //[RTMPL2_9|_header.scss::.primary-header__title css1;^B] */}
            <h1>Boilerplate</h1>
          </Link>
  
          {/*  */}
          <button id='BTN_logout'
                  className="login-button button--link"
                  onClick={props.BTN_CLK_start_logout}>
              {/* //[RTMPL2_9|_buttons.scss::.login-button css1;^B] */}
              {/* //[RTMPL2_9|_buttons.scss::.button--link css1;^B] */}
                                   {/* //[ props.BTN_CLK_start_logout exe1;] */}
              {/*  [RTMPL2_7|ACTN_auth.jsx::REF1: MP_start_logout <1>^B]  */}
              {/*  [RTMPL2_1|A01_DIrectory_01.txt::auth: MP_authReducer drc2;^B] */}
          {/*  */}
            LOGOUT
          </button>
        </div>
      </div>
    </header>
);


//  SEC_012 --- 118. Snapshot Testing 12:13
//  <GF_link route="/help" message="Help" />

//  SEC_016 --- 163. Logging Out 11:05

const GF_map_dispatch_to_props = (P_dispatch) => ( {
  BTN_CLK_start_logout: () => P_dispatch(MP_start_logout())
//[ props.BTN_CLK_start_logout exe1;^B]
//[RTMPL2_7|ACTN_auth.jsx::EXE1: MP_start_logout <1>^B]
//[RTMPL2_6|STR_configure_store.jsx::auth: MP_authReducer ref3;^B]
} );

export default connect(undefined, GF_map_dispatch_to_props) (SFC_header);

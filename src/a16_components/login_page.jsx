
/***************************************************************************

       //  [ DEF1: SFC_login_page <1>]

import MP_SFC_login_page from '../../a16_components/login_page.jsx';

 ***************************************************************************/

import React from 'react';

import moment from 'moment';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { MP_start_login } from '../a44_actions/ACTN_auth.jsx';
                    //[RTMPL2_7|ACTN_auth.jsx::ACTN_auth import-4;^B]

const GC_button_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", float: "left", clear:"left" };

const GC_message_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left", clear:"right" };

const GC_testbox01_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left"};


//[ EXE1: GC_link_with_children <1>]

//  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: GC_link_with_children <1>]

const GC_link_with_children = (P_props) =>
(
    <button style={GC_button_style}>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.children}
    </NavLink>
  </button>
);

    {/*  */}

//  [RTMPL2_5|app_router.jsx::SFC_login_page rtr1;^B]

//  [RTMPL2_5|private_app_router.jsx::SFC_login_page rtr2;^B]

//  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: SFC_login_page <1>^B]

       //[ DEF1: SFC_login_page <1>^B]
export const SFC_login_page = (P_props) => (
  <div className="box-layout">
{/* //  [RTMPL2_9|_box-layout.scss::.box-layout css1;^B] */}
{/*  */}
<div className="box-layout__box">
{/* //  [RTMPL2_9|_box-layout.scss::.box-layout__box css1;^B] */}
  <h1 className="box-layout__title">Boilerplate</h1>
{/* //  [RTMPL2_9|_box-layout.scss::.box-layout__title css1;^B] */}
  <p>Tag line for app.</p>
    <input
      type="text"
      placeholder="USERNAME"
      id="TXBX_username"
      style={GC_testbox01_style}
    />
    <input
      type="text"
      placeholder="PASSWORD"
      id="TXBX_password"
      style={GC_testbox01_style}
    />
    {/*  */}
    {/* //  SEC_016 --- 162. Login Page and Google Authentication 19:26 */}
    {/*  */}
    {/* <button id='BTN_login' onClick={P_props.BTN_CLK_start_login} style={GC_button_style}> */}
    <button id='BTN_login' className="login-button"
          //[RTMPL2_9|_buttons.scss::.login-button css2;^B]
            onClick={P_props.BTN_CLK_start_login}>
    {/* [ P_props.BTN_CLK_start_login exe1;] */}
    {/*  [RTMPL2_7|ACTN_auth.jsx::REF1: MP_start_login <1>^B] */}
      Login with Google
    </button>
    {/*
    <GC_link_with_children route={"/dashboard/"}>
    *  //[ EXE1: GC_link_with_children <1>^B] *
          <h3>{'TO > dashboard'}</h3>
    </GC_link_with_children>
      */}
</div>
  </div>
);

/*
*/


// const GF_map_state_to_props = (state, props) =>  {
//   return ( {} );
// };

const GF_map_dispatch_to_props = (P_dispatch) => ( {
    BTN_CLK_start_login: (P_login_obj) => P_dispatch(MP_start_login())
//[ P_props.BTN_CLK_start_login exe1;^B]
      //[RTMPL2_7|ACTN_auth.jsx::EXE1: MP_start_login <1>^B]
      //[RTMPL2_6|STR_configure_store.jsx::auth: MP_authReducer ref1;^B]
} );

//export default connect(GF_map_state_to_props, GF_map_dispatch_to_props) (SFC_login_page);
export default connect(undefined, GF_map_dispatch_to_props) (SFC_login_page);

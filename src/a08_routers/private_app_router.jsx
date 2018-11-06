
/***************************************************************************

private_app_router.jsx

       //  [ DEF1: MP_SFC_private_route <1>]

import MP_SFC_private_route from './sec016a_L166_private_app_router.jsx';

 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../a70_Utilities_01/Loadable_Handlers.jsx";
                        //[RTMPL2_4|Loadable_Handlers.jsx::Loadable_Handlers import-1;^B]

import SFC_header from '../a16_components/SFC_header.jsx';

// const SFC_header = Loadable({
//   loader: () => import('../a16_components/SFC_header.jsx'),
//   loading: MP_common_loading_handler,
//   //timeout: 10000, // 10 seconds
//   timeout: 3000, // 3 seconds
// });


   //  [RTMPL2_5|app_router.jsx::RTR1: MP_SFC_private_route <1>^B]

   //  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: MP_SFC_private_route <1>^B]

   //[ DEF1: MP_SFC_private_route <1>^B]
export const MP_SFC_private_route = ( {
    isAuthenticated,
    component: P_Component,
    ...rest
} ) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <div>
                <SFC_header />
    {/*  */}
    {/* //[RTMPL2_8|SFC_header.jsx::SFC_header rtr2;^B] */}
                <P_Component {...props} />
            </div>
        ) : (
            <div>
                <Redirect to="/" />
                {/* //[RTMPL2_8|login_page.jsx::SFC_login_page rtr2;^B] */}
            </div>
        )
        ) }
    />
);


const GF_map_state_to_props = (P_state) => ( {
    isAuthenticated: !! P_state.auth.uid
} );

export default connect (GF_map_state_to_props) (MP_SFC_private_route);

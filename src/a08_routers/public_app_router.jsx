
/***************************************************************************

sec016a_L167_public_app_router.jsx

       //  [ DEF1: MP_SFC_public_route <1>]

 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class CLS_public_route_error_boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log ("error", error);
    console.log ("info", info);
    this.setState ( (P_prev_state, P_props) => ( {
        error : error,
        info : info
    } ) );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
            <h1>Something went wrong.</h1>;
            <h1>{this.state.error}</h1>;
            <h1>{this.state.info}</h1>;
        </div>
      );
    }

    return this.props.children; 
  }
}


   //  [RTMPL2_5|app_router.jsx::RTR1: MP_SFC_public_route <1>^B]

   //  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: MP_SFC_public_route <1>^B]

   //[ DEF1: MP_SFC_public_route <1>^B]
export const MP_SFC_public_route = ( {
    isAuthenticated,
    component: P_Component,
    ...rest
} ) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <CLS_public_route_error_boundary>
                <Redirect to="/dashboard" />
                {/*  */}
                {/* //[RTMPL2_8|SFC_dashboard_page.jsx::MP_SFC_dashboard_page rtr2;^B] */}
            </CLS_public_route_error_boundary>
        ) : (
            <CLS_public_route_error_boundary>
                <P_Component {...props} />
            </CLS_public_route_error_boundary>
        )
        ) }
    />
);

const GF_map_state_to_props = (P_state) => ( {
    isAuthenticated: !! P_state.auth.uid
    //[RTMPL2_6|STR_configure_store.jsx::auth: MP_authReducer ref2;^B]
} );

export default connect (GF_map_state_to_props) (MP_SFC_public_route);

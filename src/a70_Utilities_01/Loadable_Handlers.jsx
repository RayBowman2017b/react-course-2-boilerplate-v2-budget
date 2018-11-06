
import React from 'react';

   //  [RTMPL2_1|A01_DIrectory_01.txt::DRC1: MP_common_loading_handler <1>^B]

//  import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers";
   //[RTMPL2_5|private_app_router.jsx::Loadable_Handlers import-1;]

//  K:\A01_Udemy\Z01_General_Notes\webpack_optimization_01.txt


export const MP_common_loading_handler = (P_props) =>
{
  if (P_props.error) {
//    return <div>Error! <button onClick={ P_props.retry }>Retry</button></div>;
    console.log (`P_props.error is ${P_props.error}`);
    return <span>Error! </span>;
  } else if (P_props.timedOut) {
//    return <div>Taking a long time... <button onClick={ P_props.retry }>Retry</button></div>;
    return <span>Taking a long time... </span>;
  } else if (P_props.pastDelay) {
    return <span>Loading...</span>;
  } else {
    return null;
  }
//   <div>Loading...</div>;
}


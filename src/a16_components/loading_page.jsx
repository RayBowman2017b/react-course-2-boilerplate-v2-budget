
/***************************************************************************

loading_page.jsx

import MP_SFC_loading_page from "./a16_components/loading_page.jsx";
                //[RTMPL2_3|z32_main_app.jsx::loading_page import-1;^B]

"K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\images\loader.gif"

 ***************************************************************************/

import React from 'react';

const MP_SFC_loading_page = () => (

    <div className="loader">
    {/* //[RTMPL2_9|_loader.scss::.loader css1;^B] */}
        <img className="loader__image" src="./images/loader.gif" />
        {/* //[RTMPL2_9|_loader.scss::.loader__image css1;^B] */}
    </div>

)

export default MP_SFC_loading_page;

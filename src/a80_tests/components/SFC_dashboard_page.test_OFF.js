
/*

  sec012a_SFC_dashboard_page.test.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_SFC_dashboard_page.test.js

//  SEC_012 --- 120. Snapshot Testing with Dynamic Components 15:42

 */

import React from 'react';
import { shallow } from 'enzyme';

import MP_SFC_dashboard_page from "../../sec009a_components/sec009a_SFC_dashboard_page.jsx";

describe ("COMPONENT TEST FOR DASHBOARD PAGE", () =>  {

    it ('should render valid dashboard page', () =>  {
        const L_wrapper = shallow (<MP_SFC_dashboard_page />);
        expect(L_wrapper).toMatchSnapshot();
    } );

} );


/*

sec012a_moment_mock.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\__snapshots__\
sec012a_moment_mock.js


//  SEC_012 --- 121. Mocking Libraries with Jest 11:51

*/

const moment = require.requireActual ('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};

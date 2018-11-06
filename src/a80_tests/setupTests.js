
/*

  sec012a_setupTests.js

//  ONE WAY :>  //  [RTMPL2_0|package.json::--config=jest.config.json^B]

//  ONE WAY :>  //  [RTMPL2_0|jest.config.json::"setupFiles"^B]

//  [RTMPL2_1|A01_DIrectory_01.txt::set up tests drc1;^B]

airbnb.io/enzyme/
http://airbnb.io/enzyme/#installation

https://jestjs.io/docs/en/configuration
https://jestjs.io/docs/en/configuration#setupfiles-array

 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//  require('dotenv').config( { path: '.env.test' } );
  import DotEnv from 'dotenv';
  DotEnv.config( { path: '.env.test' } );

Enzyme.configure ( {
    adapter: new Adapter()
} );


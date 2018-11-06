
/*

seed_database.jsx

       //  [ DEF1: seed_DB <1>]
       //  [ DEF1: handle_snapshot <1>]
       //  [ DEF1: log_visible_expenses <1>]


import seed_DB from "./a70_Utilities_01/seed_database.jsx";
          //[RTMPL2_3|z32_main_app.jsx::seed_database import-1;^B]

*/

import React from 'react';
import MP_moment from 'moment';
import { connect } from 'react-redux';

//import  MP_getVisibleExpenses from "../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
    //[ MP_getVisibleExpenses ref1;]

//import { MP_startAddExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

//import { GC_store } from '../sec012a_app.js';
import MP_database from '../a64_firebase/firebase.js';


   //  [RTMPL2_3|z32_main_app.jsx::EXE1: seed_DB <1>]

   //[ DEF1: seed_DB <1>^B]
export const seed_DB = (P_user, P_store) =>
{
    if (P_user.uid === null)
        return;

    const GC_DB_ref = `users/${P_user.uid}/expenses`;
    //[RTMPL2_6|STR_configure_store.jsx::users/${P_user.uid} ref1;^B]

    MP_database
       .ref(GC_DB_ref)
       .orderByChild('description')
       .equalTo('Water Bill')
       .once('value')
       .then( (P_snapshot) => {
            const L_description_val = [];
            P_snapshot.forEach ((childsnp) => { L_description_val.push(childsnp.val()) } );

            if (L_description_val.length === 0)
                handle_snapshot ();

            log_visible_expenses ();
        } )
       .catch ((err) => console.log ('******* error in seed_ID', err));
};

//[ DEF1: handle_snapshot <1>^B]
function handle_snapshot ()
{
    // const L_august_01_2018 = 1533142800000;
    // const L_august_03_2018 = 1533315600000;
    // const L_sept_04_2018 = 1536080400000;
    const GC_time_01 = MP_moment.utc().valueOf();
    const GC_time_02 = MP_moment.utc().add(3, 'days').valueOf();
    const GC_time_03 = MP_moment.utc().add(33, 'days').valueOf();

    const GC_expense_01 = {
         description: 'Water Bill', amount: 3300, createdAt: GC_time_01, note: 'from seed operation'
    };
    const GC_expense_02 = {
         description: 'Gas Bill', amount: 2200, createdAt: GC_time_02, note: 'from seed operation'
    };
    const GC_expense_03 = {
         description: 'Rent', amount: 109500, createdAt: GC_time_03, note: 'from seed operation'
    };

            //  [RTMPL2_1|A01_DIrectory_01.txt::Add mock data to GC_store drc1;^B]

    //MP_database.ref('expenses').remove();

    //P_store.dispatch ( MP_startAddExpense (GC_expense_01) );
    //P_store.dispatch ( MP_startAddExpense (GC_expense_02) );
    //P_store.dispatch ( MP_startAddExpense (GC_expense_03) );
};

//[ DEF1: log_visible_expenses <1>^B]
function log_visible_expenses ()
{
   //  [RTMPL2_1|A01_DIrectory_01.txt::sec012a_app GC_store.subscribe drc1;^B]
    //P_store.subscribe ( () =>
    //{
    //  const L_state = P_store.getState ();
    //  const L_visibleExpenses = MP_getVisibleExpenses (L_state.expenses, L_state.filters);
    //                        //[ MP_getVisibleExpenses ref1;^B]
    //  //  [RTMPL2_1|A01_DIrectory_01.txt::MP_getVisibleExpenses drc1;^B]
    //  //console.log (P_store.getState());
    //  console.log (L_visibleExpenses);
    //}                );

    //console.log ("  --- P_store.getState()", P_store.getState());
};


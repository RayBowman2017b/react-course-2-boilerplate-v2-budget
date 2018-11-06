
/*

  sec011a_L099_Redux_expensify.jsx
  FROM : sec010c_L091_Redux_expensify.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010c_L091_Redux_expensify.jsx

//  SEC_010 --- 91. Reducers 12:05

 */

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//=====================================================================

GC_store.subscribe ( () =>
  {
    const L_state = GC_store.getState ();
    const L_visibleExpenses = GC_getVisibleExpenses (L_state.expenses, L_state.filters);
    //console.log (GC_store.getState());
    console.log (L_visibleExpenses);
  }                );


const GC_rent_expense_01 =
    GC_store.dispatch (GC_addExpense (
        {
            description: 'Rent',
            amount: 100,
            createdAt: -21000
        }
                      )  );

const GC_coffee_expense_02 =
    GC_store.dispatch (GC_addExpense (
        {
            description: 'Coffee',
            amount: 300,
            createdAt: -1000
        }
                      )  );

console.log (GC_rent_expense_01);
console.log (GC_coffee_expense_02);

//GC_store.dispatch (GC_removeExpense ( { id: GC_rent_expense_01.expense.id } ));
// GC_store.dispatch ( GC_removeExpense (GC_rent_expense_01.expense) );

// GC_store.dispatch (GC_editExpense ( GC_coffee_expense_02.expense.id, { amount: 500 } ));

//  SEC_010 --- 96. Filtering Redux Data 16:54

console.log ('   --- string includes');

 GC_store.dispatch (GC_setTextFilter ('rent'));
 GC_store.dispatch (GC_setTextFilter ('ffe'));
 GC_store.dispatch (GC_setTextFilter ());
// GC_store.dispatch (GC_setTextFilter ());

//  SEC_010 --- 97. Sorting Redux Data 6:14

console.log ('   --- sort by amount');

 GC_store.dispatch (GC_sortByAmount ());
// GC_store.dispatch (GC_sortByDate ());


//  SEC_010 --- 95. Wrapping up Our Reducers 9:52

console.log ('   --- DATES');

 GC_store.dispatch (GC_setStartDate (-1211));
 GC_store.dispatch (GC_setEndDate (123));
 GC_store.dispatch (GC_setStartDate (-121));
// GC_store.dispatch (GC_setStartDate ());
 GC_store.dispatch (GC_setEndDate (1231));
 GC_store.dispatch (GC_setEndDate (123));
// GC_store.dispatch (GC_setEndDate ());

//====================================================

const GC_demo_state = {
    expenses: [
    {
        id: 'qwertyuiop',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }  ],
    filters:
    {
        text: 'rent',
        sortBy: 'amount',  //  date or amount
        startDate: undefined,
        endDate: undefined
    }
}

//##########################################################################

const GC_user =
{
    name: 'Jenny',
    age: 24
};

const GC_user_edit = { ...GC_user, location: 'Philadelphia', age: 27 };

const GC_user_edit_02 = { age: 29, ...GC_user, location: 'Philadelphia' };

console.log ({...GC_user});
console.log ({...GC_user_edit});
console.log ({...GC_user_edit_02});

//##########################################################################
//##########################################################################

"use strict";

//  ================================================================

//  ================================================================
//  ================================================================

//  GC_appRoot_02

//  Cls_IndecisionApp
//    BTN_click_INDC_handle_pick ()

//  GC_SFC_Header
//  GC_SFC_Action
//  GC_SFC_Options
//  GC_SFC_Option
//  Cls_AddOption

//  ReactDOM.render (<Cls_IndecisionApp />, GC_appRoot_01);

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006b_app.js

//  SEC_004 --- 26. Creating a React Component 14:36


console.log("sec006b_app.js is running!");

/**********************************************************

//#########################################################
//#########################################################

//  SEC_005 --- 41. Default Prop Values 9:49

const GC_appRoot_02 = document.getElementById('sec004_app_02');

//  SEC_004 --- 32. Adding State to Counter App: Part I 8:18
//  SEC_004 --- 33. Adding State to Counter App: Part II 11:00

class Cls_Counter extends React.Component
{
  constructor (P_props)
  {
    super(P_props);
    this.BTN_click_add_one = this.BTN_click_add_one.bind(this);
    this.BTN_click_minus_one = this.BTN_click_minus_one.bind(this);
    this.BTN_click_reset = this.BTN_click_reset.bind(this);

    this.state =
    {
//      count: 0
      count: P_props.count,

//  SEC_005 --- 46. Saving and Loading the Count 10:34
      count_persisted: 0
    };
  }
//=========================================================

//  SEC_005 --- 46. Saving and Loading the Count 10:34

  componentDidMount ()
  {
    const L_string_count_persisted
            = localStorage.getItem ('count_persisted');
    let count_persisted
            = parseInt(L_string_count_persisted, 10);

    if ( isNaN (count_persisted) )
      count_persisted = 0;

    this.setState ( () => ({ count_persisted }) );
  }
//=========================================================

//  SEC_005 --- 46. Saving and Loading the Count 10:34

  componentDidUpdate (P_prev_props, P_prev_state)
  {
    if (P_prev_state.count_persisted !== this.state.count_persisted)
      localStorage.setItem ('count_persisted',
                            this.state.count_persisted);
  }
//=========================================================

  BTN_click_add_one ()
  {

//  SEC_005 --- 43. Removing Individual Options 16:22

    this.setState ( (P_prev_state) =>
    (
        {
          count: P_prev_state.count + 1,

//  SEC_005 --- 46. Saving and Loading the Count 10:34
          count_persisted: P_prev_state.count_persisted + 1
        }
    )             );
//    console.log ("BTN_click_add_one");
  }
//=========================================================

  BTN_click_minus_one ()
  {

//  SEC_005 --- 43. Removing Individual Options 16:22

    this.setState ( (P_prev_state) =>
    (
        {
          count: P_prev_state.count - 1,

//  SEC_005 --- 46. Saving and Loading the Count 10:34
          count_persisted: P_prev_state.count_persisted - 1
        }
    )             );
//    console.log ("BTN_click_minus_one");
  }
//=========================================================

  BTN_click_reset ()
  {

//  SEC_005 --- 43. Removing Individual Options 16:22

    this.setState ( () =>
    (
        {
          count: 0,

//  SEC_005 --- 46. Saving and Loading the Count 10:34
          count_persisted: 0
        }
    )             );
//    console.log ("BTN_click_reset");
  }
//=========================================================

//  SEC_005 --- 46. Saving and Loading the Count 10:34

  render ()
  {
    return (
<div>
  <h1>Count: {this.state.count}</h1>
  <h1>Count persisted: {this.state.count_persisted}</h1>
  <button onClick={this.BTN_click_add_one}>+1</button>
  <button onClick={this.BTN_click_minus_one}>-1</button>
  <button onClick={this.BTN_click_reset}>reset</button>
</div>
      )
  }
}
//=========================================================

//  SEC_005 --- 41. Default Prop Values 9:49

Cls_Counter.defaultProps =
{
  count : 0
};
//=========================================================

//  SEC_005 --- 41. Default Prop Values 9:49

//ReactDOM.render (<Cls_Counter count={33}/>, GC_appRoot_02);
ReactDOM.render (<Cls_Counter />, GC_appRoot_02);

//=========================================================

//#########################################################
//#########################################################


//  ------------------------------------------------------

/  **********************************************************
 **********************************************************/

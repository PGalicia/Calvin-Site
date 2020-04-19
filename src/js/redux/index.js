/*
    File: index.js
    Author: Patrick Galicia
    Desc: Base Redux file. Redux actions and reducers must be defined here
*/

import {
  PRINT_TEXT,
  TOGGLE_NAME_SIZE,
  TOGGLE_ABOUT_SECTION
} from "@actionTypes";

// Actions
export const printText = text => ({ type: PRINT_TEXT, payload: text });
export const toggleNameSize = bool => ({ type: TOGGLE_NAME_SIZE, payload: bool });
export const toggleAboutSection = bool => ({ type: TOGGLE_ABOUT_SECTION, payload: bool });

// Reducers
// Contains initial state of listed elements
const initialState = {
  printedText: "Hello World",
  isInProjectView: false,
  isAboutSectionShowing: false
}

// Root Reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case PRINT_TEXT:
      return { ...state, printedText: action.payload }
    case TOGGLE_NAME_SIZE:
      return { ...state, isInProjectView: action.payload }
    case TOGGLE_ABOUT_SECTION:
      return { ...state, isAboutSectionShowing: action.payload }
    default:
      return state;
  }
}

export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";
export const CALCULATOR_KEY = "calculatorStore";

const initialState = {
  number: "",
  answer: "",
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    loadButtons: (state, action) => {
      console.log(state);
      state.number = state.number.concat(action.payload);
    },
    loadAns: (state) => {
      try {
        console.log(state.number);
        state.answer = eval(state.number.toString());
        console.log(state.answer);
      } catch (error) {
        state.answer = "Error";
      }
    },
    loadClear: (state) => {
      state.number = "";
      state.answer = "";
    },
    loadBackSpace: (state) => {
      state.number = state.number.slice(0, -1);
      state.answer = "";
    },
  },
});

export const { loadButtons, loadAns, loadClear, loadBackSpace } =
  calculateSlice.actions;

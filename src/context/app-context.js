import { createContext, useContext, useReducer } from "react";
import questions from "../data/questions.json";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

const intialState = {
  count: 1,
  numOfMax: 0,
  animate: false,
  answers: array(questions.length),
  isLoading: false,
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      if (state.count < state.numOfMax) {
        return { ...state, count: state.count + action.payload };
      }
      return state;
    case "DECREMENT":
      if (state.count > 1) {
        return { ...state, count: state.count - action.payload };
      }
      return state;
    case "NUM_OF_MAX":
      return { ...state, numOfMax: action.payload };
    case "SET_ANIMATE":
      return { ...state, animate: action.payload };
    case "SET_FOCUS":
      return { ...state, btnFocus: action.payload };
    case "SET_ANSWERS":
      return { ...state, answers: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      throw new Error();
  }
};

function array(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(0);
  }
  return arr;
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const appContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

import {createContext, useState} from "react";

export const ErrContext = createContext();

export const ErrProvider = (props) => {
  const [err, setErr] = useState({
    msg: null,
  });
  return (
    <ErrContext.Provider value={{err, setErr}}>
      {props.children}
    </ErrContext.Provider>
  );
};

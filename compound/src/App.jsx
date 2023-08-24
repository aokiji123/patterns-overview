import { createContext, useState, useContext, useMemo } from "react";

const AppContext = createContext();

export const App = (props) => {
  const [open, toggle] = useState(false);

  const contextValue = useMemo(() => ({ open, toggle }), [open, toggle]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = useContext(AppContext);

  return (
    <button onClick={() => toggle(!open)}>
      {open ? "Close" : "Open"}
    </button>
  );
}

const List = ({ children }) => {
  const { open } = useContext(AppContext);
  return open && <ul>{children}</ul>;
}

const Item = ({ children }) => {
  return <li>{children}</li>;
}

App.Toggle = Toggle;
App.List = List;
App.Item = Item;

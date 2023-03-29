import { createContext, useState } from "react";

export const SelectedCardContext = createContext();

const ContextProvider = (props) => {
  const [selectedCard, setSelectedCard] = useState({});

  return (
    <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
      {props.children}
    </SelectedCardContext.Provider>
  );
};

export default ContextProvider;

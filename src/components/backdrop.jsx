import { useContext } from "react";
import { SelectedCardContext } from "../context/selectedCardContext";

const Backdrop = () => {
  const { setSelectedCard } = useContext(SelectedCardContext);
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-black opacity-40"
      onClick={() => {
        setSelectedCard({});
      }}
    ></div>
  );
};

export default Backdrop;

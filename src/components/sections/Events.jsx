import SimpleSwiper from "../carousel";

import { Text, Title, Button } from "@mantine/core";
import { useContext } from "react";
import { SelectedCardContext } from "../../context/selectedCardContext";
// const openModal=()=>{
//     return
// }

const Events = () => {
  // const { selectedCard, setSelectedCard } = useContext(SelectedCardContext);

  return (
    <div className="flex flex-col items-center p-4 mb-24">
      <div className="mb-16 flex flex-col gap-4 justify-center items-center">
        <Title className="font-bold text-5xl font-Poppins mb-5">
          Upcoming Events Lorem
        </Title>
        <Text size="lg" className="text-center font-Poppins">
          Adipisicing anim irure magna mollit velit excepteur Lorem
          minim.Adipisicing anim irure magna mollit velit excepteur Lorem
          minim.Adipisicing anim irure magna mollit velit excepteur Lorem
          minim.Adipisicing anim irure magna mollit velit excepteur Lorem minim.
        </Text>
      </div>

      <SimpleSwiper />
    </div>
  );
};

export default Events;

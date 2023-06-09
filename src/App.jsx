import { useState } from "react";
// import CoverflowEffect from "./components/carousel";
import { Button, Paper } from "@mantine/core";
import SimpleSwiper from "./components/carousel";
import { HeaderMiddle } from "./components/navbar";
import { HeroImageRight } from "./components/sections/heroSection";
import ContactUs from "./components/sections/ContactUs";
import Events from "./components/sections/Events";
import { CarouselCard } from "./components/EventModal";
import { SelectedCardContext } from "./context/selectedCardContext";
import { useContext } from "react";
import { useEffect } from "react";
import _ from "lodash";
import Backdrop from "./components/backdrop";
import MemebersSection from "./components/sections/TeamMemebers";
import ContactModule from "./components/ContactModule";
import Footer from "./components/sections/Footer";
function App() {
  const { selectedCard } = useContext(SelectedCardContext);

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);
  return (
    <Paper className="p-0 m-0 flex flex-col items-center justify-center">
      <HeaderMiddle
        title="GFG Amity Noida"
        links={[
          { link: "/about", label: "Home" },
          { link: "/learn", label: "Events" },
          { link: "/pricing", label: "Memebers" },
        ]}
      />
      <HeroImageRight />
      {/* <div className="w-2/3 h-full">
        <Events />
      </div> */}
      <CarouselCard />
      <div className="w-2/3">
        <Events />
      </div>
      {/* <ContactUs /> */}
      <MemebersSection />
      <ContactUs />
      <Footer />
    </Paper>
  );
}

export default App;

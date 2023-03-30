import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Text, Title, Button } from "@mantine/core";
import { useContext } from "react";
import { SelectedCardContext } from "../context/selectedCardContext";
import { useState } from "react";
import Backdrop from "./backdrop";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const slides = [
  {
    title: "First item",
    description:
      "Esse sunt nostrud proident magna eiusmod sit sit ad culpa. Tempor reprehenderit do dolore non eu dolor Lorem. Ipsum duis non amet esse sunt proident sunt id esse dolor aliquip do aliquip amet. Nostrud minim dolore voluptate mollit incididunt voluptate dolore adipisicing nulla amet ex consectetur.",
    img: [
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
    ],
  },
  {
    title: "Second item",
    description: "Lorem ipsum,",
    img: [
      "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
    ],
  },
  {
    title: "Second item",
    description: "Lorem ipsum,",
    img: [
      "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
    ],
  },
  {
    title: "Second item",
    description: "Lorem ipsum,",
    img: [
      "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
      "https://images.unsplash.com/photo-1680001660273-2a78887352a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80",
    ],
  },
];

const SimpleSwiper = ({ openModal }) => {
  const { selectedCard, setSelectedCard } = useContext(SelectedCardContext);
  return (
    <>
      <Slider
        infinite={true}
        nextButton={<IconChevronRight color="white" />}
        previousButton={<IconChevronLeft color="white" />}
      >
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundColor: "#11284b",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, #00000099 100%), url(${slide.img[0]})`,

              // backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 40%, #062e17 70%), url('${slide.img}') no-repeat center center`,
            }}
          >
            <div className="ml-16 mt-14 flex flex-col gap-4 my-auto h-full">
              <Title
                order={1}
                className="text-green-600 font-bold font-Poppins "
              >
                {slide.title}
              </Title>
              <Text
                size="lg"
                className="text-white max-w-xl font-Poppins description"
              >
                {slide.description}
              </Text>
              <Button
                color="green"
                radius="md"
                className="w-fit min-w-fit font-Poppins"
                onClick={() => {
                  setSelectedCard({
                    title: slide.title,
                    description: slide.description,
                    imageUrls: slide.img,
                  });
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SimpleSwiper;

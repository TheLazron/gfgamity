import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import _ from "lodash";
import { useContext } from "react";
import { SelectedCardContext } from "../context/selectedCardContext";
import ReactDom from "react-dom";
import Backdrop from "./backdrop";

const useStyles = createStyles((theme) => ({
  container: {
    transform: "translate(-50%, -50%)",
  },

  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export function CarouselCard() {
  const { classes } = useStyles();
  const { selectedCard, setSelectedCard } = useContext(SelectedCardContext);
  const slides = selectedCard.imageUrls?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  if (_.isEmpty(selectedCard)) {
    return null;
  } else
    return ReactDom.createPortal(
      <>
        <Backdrop />
        <Card
          radius="md"
          withBorder
          padding="xl"
          className={`fixed top-1/2 left-1/2 ${classes.container}`}
        >
          <Card.Section>
            <Carousel
              withIndicators
              loop
              className={{
                root: classes.carousel,
                controls: classes.carouselControls,
                indicator: classes.carouselIndicator,
              }}
            >
              {slides}
            </Carousel>
          </Card.Section>

          <Group position="apart" mt="lg">
            <Text
              fw={500}
              fz="lg"
              color="green"
              className="font-Poppins font-semibold"
            >
              {selectedCard.title}
            </Text>

            {/* <Group spacing={5}>
              <IconStar size="1rem" />
              <Text fz="xs" fw={500}>
                4.78
              </Text>
            </Group> */}
          </Group>

          <Text fz="sm" c="dimmed" mt="sm" className="font-Poppins font-normal">
            {selectedCard.description}
          </Text>

          <Group position="apart" mt="md">
            <div>
              <Text
                fz="xl"
                span
                fw={500}
                className={`${classes.price} font-Poppins font-medium`}
              >
                Venue?
              </Text>
            </div>

            <Button
              className="font-Poppins"
              color="dark"
              radius="md"
              onClick={() => {
                setSelectedCard({});
              }}
            >
              Book now
            </Button>
          </Group>
        </Card>
      </>,
      document.getElementById("modal")
    );
}

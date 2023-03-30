import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(0, 0, 0, 0.3) 30%, #062e17 70%), url(https://images.unsplash.com/photo-1675334758608-8f2af855a8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)",
    paddingTop: `calc(${theme.spacing.xl} * 5)`,
    paddingBottom: `calc(${theme.spacing.xl} * 5)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={`${classes.root} w-full mb-12`}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={` font-Poppins font-medium ${classes.title}`}>
              Lorem{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "green", to: "teal" }}
                className="font-extrabold font-Poppins"
              >
                Ipsum
              </Text>{" "}
              Dolor Si Amet
            </Title>

            <Text className={` font-Poppins ${classes.description}`} mt={30}>
              Minim sint exercitation mollit non adipisicing dolor in nostrud
              veniam do in fugiat magna enim. In ullamco anim officia aute anim
              laborum enim eiusmod esse laboris. Esse deserunt cupidatat sunt
              cillum adipisicing mollit cillum eiusmod aliqua exercitation
              mollit magna.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "green" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

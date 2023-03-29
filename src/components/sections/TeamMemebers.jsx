import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { UserInfoAction } from "../MemberCard";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(80),
    paddingBottom: rem(50),
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    // color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
    //   .color,
    letterSpacing: rem(0.5),
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: rem(5),
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
}));

const MemebersSection = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container size={700} className={classes.wrapper}>
        <Text color="green" className={`${classes.supTitle} `}>
          Meat the Team
        </Text>

        <Title className={classes.title} order={1}>
          The<span className={`${classes.highlight} text-green-600`}>team</span>{" "}
          behind it all
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            Ut mollit anim minim sit est ea deserunt aliquip. Ipsum tempor
            exercitation laborum ex est duis et commodo laboris voluptate
            consectetur cillum. Id dolore laborum magna consectetur veniam
            ullamco culpa sit eiusmod culpa consequat Lorem commodo. Non aute
            reprehenderit non proident eu quis non cupidatat laboris amet.
          </Text>
        </Container>
      </Container>
      <hr className="mx-2"></hr>

      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: "62rem", cols: 2, spacing: "md" },
          { maxWidth: "48rem", cols: 2, spacing: "sm" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
      >
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
        <div>
          {" "}
          <UserInfoAction />
        </div>
      </SimpleGrid>
    </>
  );
};

export default MemebersSection;

import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Text } from "@mantine/core";
import gfg from "/public/icons8-geeksforgeeks-144.svg";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(5),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={`w-full ${classes.footer}`}>
      <Container className={` w-full ${classes.inner}`}>
        <div className="flex justify-between items-center gap-4">
          <img className="h-auto w-10" src={gfg} />
          <Text className="font-Poppins font-semibold">GFG Amity Noida</Text>
        </div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="xl">
            <IconBrandLinkedin size="1.55rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="xl">
            <IconBrandYoutube size="1.55rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="xl">
            <IconBrandInstagram size="1.55rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;

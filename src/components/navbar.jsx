import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Title,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  Icon3dRotate,
} from "@tabler/icons-react";
import GFG from "../../public/icons8-geeksforgeeks-144.svg";

const useStyles = createStyles((theme) => ({
  header: {
    background: "rgb(255, 255, 255)",
    background:
      "linear-gradient(307deg, rgba(255,255,255,0.95) 13%, rgba(235,255,251,0.95) 37%, rgba(244,255,241,0.95) 67%, rgba(231,231,231,0.95) 77%)",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    gap: rem(20),
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(10),
    justifyContent: "center",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  social: {
    // width: rem(60),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(10)} ${rem(14)}`,
    borderRadius: theme.radius.sm,
    marginLeft: rem(10),
    marginRight: rem(10),
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "green",
      }).background,
      color: theme.fn.variant({ variant: "light", color: "green" }).color,
    },
  },
}));

export function HeaderMiddle({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header
      height={80}
      mb={10}
      className={`${classes.header} w-full py-6 mx-0 flex items-center justify-around sticky`}
    >
      {/* <Container className={`${classes.inner}`}> */}
      <div className="flex w-full ">
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group
          className={`${classes.links} flex-1 w-2/4 basis-1`}
          spacing={2}
          noWrap
        >
          {items}
        </Group>
        <Group className=" flex-1 basis-1 self-center " position="center">
          {/* <Icon3dRotate /> */}
          <div className=" h-12 flex justify-around align-baseline">
            <img src={GFG} className="w-full h-full" />
          </div>
          <Title size={30} className="font-Poppins text-black">
            GFG Amity Noida
          </Title>
        </Group>

        <Group
          spacing={5}
          className={`${classes.social} flex-1 basis-1`}
          position="center"
          noWrap
        >
          {/* <ActionIcon size="lg">
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon> */}
          <Button size="lg" color="green" radius="md">
            Contact Us
          </Button>
        </Group>
      </div>
    </Header>
  );
}

// import { Button } from "@mantine/core";

// const Navbar = () => {
//   return (
//     <div className="flex justify-around via-gray-700">
//       <div>
//         <Button className="basis-1">GFG</Button>
//       </div>
//       <div className="flex basis-4">
//         <Button>Events</Button>
//         <Button>Members</Button>
//         <Button>Contact</Button>
//       </div>
//       <div className="basis-1">
//         <Button>Contact Us</Button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

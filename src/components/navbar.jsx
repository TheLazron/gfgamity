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
    width: rem(260),
    justifyContent: "space-around",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
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
    <Header height={80} mb={10} className="w-full py-6 mx-0 flex items-center">
      <Container className={`${classes.inner}`}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={`${classes.links} flex-auto`} spacing={5} noWrap>
          {items}
        </Group>
        <Group>
          {/* <Icon3dRotate /> */}
          <div className="w-10 h-10 flex justify-around align-baseline flex-auto basis-2">
            <img src={GFG} className="w-full h-full" />
          </div>
          <Title size={30} className="font-Poppins text-neutral-500">
            GFG Amity Noida
          </Title>
        </Group>

        <Group
          spacing={5}
          className={`${classes.social} flex-auto`}
          position="right"
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
          <Button color="green">Contact Us</Button>
        </Group>
      </Container>
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

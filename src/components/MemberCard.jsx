import {
  Avatar,
  Text,
  Button,
  Paper,
  ActionIcon,
  Container,
  rem,
  Group,
  createStyles,
  Card,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const userStyles = createStyles((theme) => ({
  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function UserInfoAction({ avatar, name, email, job }) {
  const { classes } = userStyles();
  return (
    <Card
      shadow="md"
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" weight={500} mt="md">
        John Doe
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        johndoe@gmail.com • desgination
      </Text>

      {/* <Button variant="default" fullWidth mt="md">
        Send message
      </Button> */}
      <Group
        spacing={0}
        className={`${classes.social} mt-2`}
        position="center"
        noWrap
      >
        <ActionIcon size="lg">
          <IconBrandTwitter size="1.05rem" stroke={1.5} color="green" />
        </ActionIcon>
        <ActionIcon size="lg">
          <IconBrandYoutube size="1.05rem" stroke={1.5} color="green" />
        </ActionIcon>
        <ActionIcon size="lg">
          <IconBrandInstagram size="1.05rem" stroke={1.5} color="green" />
        </ActionIcon>
      </Group>
    </Card>
  );
}

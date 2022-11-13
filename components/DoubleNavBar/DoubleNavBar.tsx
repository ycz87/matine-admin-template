import { useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title, Burger } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: '0 0 60px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },
  footer: {
    paddingTop: theme.spacing.md,
    /*marginTop: theme.spacing.md,*/
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: '44px',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

const linksdata = [
  {
    icon: IconHome2,
    label: 'Home',
    sublinks: [
      { icon: IconHome2, label: 'Home_Sub1', url: 'http://www.baidu.com' },
      { icon: IconHome2, label: 'Home_Sub2', url: '' },
    ],
  },
  {
    icon: IconGauge,
    label: 'Dashboard',
    sublinks: [
      { icon: IconGauge, label: 'Dashboard_Sub1', url: '' },
      { icon: IconGauge, label: 'Dashboard_Sub2', url: '' },
    ],
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics',
    sublinks: [
      { icon: IconGauge, label: 'Analytics_Sub1', url: '' },
      { icon: IconGauge, label: 'Analytics_Sub2', url: '' },
    ],
  },
  {
    icon: IconCalendarStats,
    label: 'Releases',
    sublinks: [
      { icon: IconGauge, label: 'Releases_Sub1', url: '' },
      { icon: IconGauge, label: 'Releases_Sub2', url: '' },
    ],
  },
  {
    icon: IconUser,
    label: 'Account',
    sublinks: [
      { icon: IconGauge, label: 'Account_Sub1', url: '' },
      { icon: IconGauge, label: 'Account_Sub2', url: '' },
    ],
  },
  {
    icon: IconFingerprint,
    label: 'Security',
    sublinks: [
      { icon: IconGauge, label: 'Security_Sub1', url: '' },
      { icon: IconGauge, label: 'Security_Sub2', url: '' },
    ],
  },
  {
    icon: IconSettings,
    label: 'Settings',
    sublinks: [
      { icon: IconGauge, label: 'Settings_Sub1', url: '' },
      { icon: IconGauge, label: 'Settings_Sub2', url: '' },
    ],
  },
];

export function DoubleNavBar() {
  const { classes, cx } = useStyles();
  const [FirstActiveLinkLabel, setFirstActiveLinkLabel] = useState('Home');
  const [SecondActiveLinkLabel, setSecondActiveLinkLabel] = useState('Home');
  const [opened, setOpened] = useState(false);

  const FirstLinks = linksdata.map((firstlink) => (
    <Tooltip
      label={firstlink.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={firstlink.label}
    >
      <UnstyledButton
        onClick={() => setFirstActiveLinkLabel(firstlink.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: firstlink.label === FirstActiveLinkLabel,
        })}
      >
        <firstlink.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const SecondLinks = linksdata
    .find((element) => element.label === FirstActiveLinkLabel)
    .sublinks.map((secondlink) => (
      <a
        className={cx(classes.link, {
          [classes.linkActive]: SecondActiveLinkLabel === secondlink.label,
        })}
        href={secondlink.url}
        onClick={(event) => {
          event.preventDefault();
          setSecondActiveLinkLabel(secondlink.label);
        }}
        key={secondlink.label}
      >
        {secondlink.label}
      </a>
    ));

  /*const links = testlinks.map((link) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));*/

  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section />
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {FirstLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {FirstActiveLinkLabel}
          </Title>
          {SecondLinks}
        </div>
      </Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

import {useState} from 'react';
import {Button, createStyles, Flex, FlexProps, getStylesRef, rem} from '@mantine/core';
import {Link, useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    footer: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        padding: theme.spacing.sm,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[0],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.primary[7],
            color: theme.colorScheme === 'dark' ? theme.white : theme.white,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({variant: 'light', color: theme.colors.primary[8]}).background,
            color: theme.fn.variant({variant: 'light', color: theme.colors.primary[8]}).color,
        },
    },
}));

const data = [
    {link: '/', label: 'Home'},
    {link: '/how-it-works', label: 'Donate'},
    {link: '/campaigns', label: 'Campaigns'},
    {link: '/create-campaign', label: 'Contact Us'},
    {link: '/dashboard', label: 'Team Members'},
   
];

interface IProps extends FlexProps {
    onClose?: () => void;  // Add prop for drawer close function
}

const AppLinks = ({onClose, ...others}: IProps) => {
    const {classes, cx} = useStyles();
    const [active, setActive] = useState('');
    const navigate = useNavigate();

    const handleNavigation = (link: string, label: string) => {
        setActive(label);
        if (onClose) {
            onClose(); // Close the drawer first
        }
        // Use setTimeout to ensure drawer closes before navigation
        setTimeout(() => {
            navigate(link);
        }, 100);
    };

    const links = data.map((item) => (
        <Button
            className={cx(classes.link, {[classes.linkActive]: item.label === active})}
            key={item.label}
            onClick={() => handleNavigation(item.link, item.label)}
        >
            <span>{item.label}</span>
        </Button>
    ));

    return (
        <Flex gap={4} {...others}>
            {links}
        </Flex>
    );
}

export default AppLinks;
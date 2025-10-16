import { createStyles, rem, TitleProps, UnstyledButton, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    logoContainer: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: rem(50),
        minHeight: rem(60),

        [theme.fn.smallerThan('md')]: {
            minHeight: rem(50),
            minWidth: rem(50),
        },

        [theme.fn.smallerThan('sm')]: {
            minHeight: rem(45),
            minWidth: rem(45),
            justifyContent: 'flex-start',
        },
    },

    logo: {
        height: rem(60),
        width: 'auto',
        maxWidth: '100%',
        display: 'block',
        objectFit: 'contain',

        [theme.fn.smallerThan('md')]: {
            height: rem(50),
        },

        [theme.fn.smallerThan('sm')]: {
            height: rem(45),
        },
    },

    logoWhite: {
        height: rem(60),
        width: 'auto',
        maxWidth: '100%',
        display: 'block',
        objectFit: 'contain',
        filter: 'brightness(0) invert(1)',

        [theme.fn.smallerThan('md')]: {
            height: rem(50),
        },

        [theme.fn.smallerThan('sm')]: {
            height: rem(45),
        },
    },

    fallback: {
        height: rem(60),
        width: rem(60),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.gray[2],
        borderRadius: theme.radius.sm,
        fontSize: theme.fontSizes.xl,
        fontWeight: 'bold',
        color: theme.colors.gray[6],

        [theme.fn.smallerThan('md')]: {
            height: rem(50),
            width: rem(50),
        },

        [theme.fn.smallerThan('sm')]: {
            height: rem(45),
            width: rem(45),
        },
    },
}));

interface IProps {
    asLink?: boolean;
    variant?: 'grayscale' | 'default';
}

const Brand = ({ asLink, variant, ...others }: IProps) => {
    const { classes } = useStyles();
    const [imageError, setImageError] = useState(false);

    const logoSrc = "/lan.svg";
    const logoClass = variant === 'grayscale' ? classes.logoWhite : classes.logo;

    const handleImageError = () => {
        setImageError(true);
        console.error('Logo image failed to load from:', logoSrc);
    };

    const logoElement = imageError ? (
        <Box className={classes.fallback}>L</Box>
    ) : (
        <img
            src={logoSrc}
            alt="Language Learning Logo"
            className={logoClass}
            onError={handleImageError}
            loading="eager"
        />
    );

    return asLink ? (
        <UnstyledButton component={Link} to="/" {...others}>
            <Box className={classes.logoContainer}>
                {logoElement}
            </Box>
        </UnstyledButton>
    ) : (
        <Box className={classes.logoContainer} {...others}>
            {logoElement}
        </Box>
    );
};

export default Brand;
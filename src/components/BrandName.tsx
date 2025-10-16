import {createStyles, rem, TitleProps, UnstyledButton, Box} from "@mantine/core";
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    logoContainer: {
        display: 'inline-flex',
        alignItems: 'center',
        
        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    logo: {
        height: rem(60),
        width: 'auto',

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
        filter: 'brightness(0) invert(1)', // Makes the logo white for grayscale variant

        [theme.fn.smallerThan('md')]: {
            height: rem(50),
        },

        [theme.fn.smallerThan('sm')]: {
            height: rem(45),
        },
    }
}))

interface IProps extends TitleProps {
    asLink?: boolean
    variant?: 'grayscale' | 'default'
}

const Brand = ({asLink, variant, ...others}: IProps) => {
    const {classes} = useStyles();

    const logoSrc = "/lan.svg";
    const logoClass = variant === 'grayscale' ? classes.logoWhite : classes.logo;

    return (
        asLink ?
            <UnstyledButton component={Link} to="/">
                <Box className={classes.logoContainer}>
                    <img 
                        src={logoSrc} 
                        alt="Language integration Logo" 
                        className={logoClass}
                    />
                </Box>
            </UnstyledButton> :
            <Box className={classes.logoContainer}>
                <img 
                    src={logoSrc} 
                    alt="Language Learning Logo" 
                    className={logoClass}
                />
            </Box>
    );
};

export default Brand;
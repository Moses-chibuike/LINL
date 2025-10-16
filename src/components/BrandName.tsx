import {createStyles, rem, TitleProps, UnstyledButton, Box} from "@mantine/core";
import {Link} from "react-router-dom";
import { useState } from "react";
import lanLogo from '../assets/lan.svg';

const useStyles = createStyles((theme) => ({
    logoContainer: {
        display: 'inline-flex',
        alignItems: 'center',
        
        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    logo: {
        height: rem(45),
        width: 'auto',

        [theme.fn.smallerThan('md')]: {
            height: rem(38),
        },

        [theme.fn.smallerThan('sm')]: {
            height: rem(32),
        },
    },

    logoWhite: {
        height: rem(45),
        width: 'auto',
        filter: 'brightness(0) invert(1)',

        [theme.fn.smallerThan('md')]: {
            height: rem(38),
        },

        [theme.fn.smallerThan('sm')]: {
            height: rem(32),
        },
    }
}))

interface IProps extends TitleProps {
    asLink?: boolean
    variant?: 'grayscale' | 'default'
}

const Brand = ({asLink, variant, ...others}: IProps) => {
    const {classes} = useStyles();
    const [imageError, setImageError] = useState(false);

    const logoClass = variant === 'grayscale' ? classes.logoWhite : classes.logo;

    const handleImageError = () => {
        setImageError(true);
        console.error('Logo image failed to load');
    };

    return (
        asLink ?
            <UnstyledButton component={Link} to="/">
                <Box className={classes.logoContainer}>
                    {!imageError && (
                        <img 
                            src={lanLogo}
                            alt="Language Learning Logo" 
                            className={logoClass}
                            onError={handleImageError}
                        />
                    )}
                </Box>
            </UnstyledButton> :
            <Box className={classes.logoContainer}>
                {!imageError && (
                    <img 
                        src={lanLogo}
                        alt="Language Learning Logo" 
                        className={logoClass}
                        onError={handleImageError}
                    />
                )}
            </Box>
    );
};

export default Brand;
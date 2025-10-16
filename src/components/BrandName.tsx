import {createStyles, rem, TitleProps, UnstyledButton, Box} from "@mantine/core";
import {Link} from "react-router-dom";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  logoContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    height: rem(55),
    width: 'auto',
    [theme.fn.smallerThan('md')]: {
      height: rem(45),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(35),
    },
  },
  logoWhite: {
    height: rem(55),
    width: 'auto',
    filter: 'brightness(0) invert(1)',
    [theme.fn.smallerThan('md')]: {
      height: rem(45),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(35),
    },
  },
}));

interface IProps extends TitleProps {
  asLink?: boolean;
  variant?: 'grayscale' | 'default';
}

const Brand = ({asLink, variant, ...others}: IProps) => {
  const {classes} = useStyles();
  const [imageError, setImageError] = useState(false);

  const logoSrc = (import.meta.env.BASE_URL || "/") + "Lan.svg";
  const logoClass = variant === 'grayscale' ? classes.logoWhite : classes.logo;

  const handleImageError = () => {
    setImageError(true);
    console.error('Logo failed to load from:', logoSrc);
  };

  return (
    asLink ? (
      <UnstyledButton component={Link} to="/">
        <Box className={classes.logoContainer}>
          {!imageError ? (
            <img
              src={logoSrc}
              alt="Language Learning Logo"
              className={logoClass}
              onError={handleImageError}
            />
          ) : (
            <span>Logo</span>
          )}
        </Box>
      </UnstyledButton>
    ) : (
      <Box className={classes.logoContainer}>
        {!imageError ? (
          <img
            src={logoSrc}
            alt="Language Learning Logo"
            className={logoClass}
            onError={handleImageError}
          />
        ) : (
          <span>Logo</span>
        )}
      </Box>
    )
  );
};

export default Brand;
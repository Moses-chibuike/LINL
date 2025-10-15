import { Button, Center, Container, createStyles, Group, Overlay, rem, Stack, Text, Title } from '@mantine/core';
import { IconLanguage, IconBook, IconWorld, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        height: rem(640),
        overflow: 'hidden',

        [theme.fn.smallerThan('md')]: {
            height: rem(560),
        },
    },

    slide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        paddingTop: rem(180),
        paddingBottom: rem(130),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0,
        transition: 'opacity 0.8s ease-in-out',

        '&.active': {
            opacity: 1,
        },

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(80),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 900,
        fontSize: rem(64),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: rem(8),

        [theme.fn.smallerThan('md')]: {
            fontSize: rem(48),
        },

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
            textAlign: 'center',
            fontWeight: 700,
            padding: 0
        },
    },

    description: {
        color: theme.white,
        fontSize: rem(24),
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.md,
            textAlign: 'center',
        },
    },

    controls: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    control: {
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    badge: {
        width: "fit-content",
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        backgroundImage: theme.fn.gradient({ from: '#f2b518', to: '#ffd24d', deg: 20 }),
        fontWeight: 500
    },

    navigationButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        width: rem(50),
        height: rem(50),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },

        '&.left': {
            left: rem(20),
        },

        '&.right': {
            right: rem(20),
        },

        [theme.fn.smallerThan('sm')]: {
            width: rem(40),
            height: rem(40),
        },
    },

    dots: {
        position: 'absolute',
        bottom: rem(30),
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        gap: rem(12),
    },

    dot: {
        width: rem(12),
        height: rem(12),
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: 0,

        '&.active': {
            backgroundColor: theme.white,
            width: rem(32),
            borderRadius: rem(6),
        },
    },
}));

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1031&q=80',
        icon: IconLanguage,
        badge: 'Start Learning',
        title: 'Master New Languages,',
        subtitle: 'One Lesson at a Time.',
        description: 'Learn any language with interactive lessons designed to make you fluent faster.',
    },
    {
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1031&q=80',
        icon: IconBook,
        badge: 'Interactive Lessons',
        title: 'Learn by Doing,',
        subtitle: 'Practice Makes Perfect.',
        description: 'Engage with real-world scenarios and practice conversations with native speakers.',
    },
    {
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1031&q=80',
        icon: IconWorld,
        badge: 'Global Community',
        title: 'Connect Worldwide,',
        subtitle: 'Speak with Confidence.',
        description: 'Join millions of learners and unlock opportunities by speaking new languages.',
    },
];

const HeroSlider = () => {
    const { classes, theme } = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className={classes.wrapper}>
            {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                    <div
                        key={index}
                        className={`${classes.slide} ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <Overlay color="#000" opacity={0.65} zIndex={1} />
                        <div className={classes.inner}>
                            <Container>
                                <Stack spacing="xl">
                                    <Center>
                                        <Group spacing={4} className={classes.badge}>
                                            <Icon stroke={1.5} />
                                            <Text transform="uppercase">{slide.badge}</Text>
                                        </Group>
                                    </Center>
                                    <Title className={classes.title}>
                                        <Text inherit>{slide.title}</Text>
                                        <Text inherit>
                                            {slide.subtitle.split(' ').slice(0, -2).join(' ')}{' '}
                                            <Text
                                                component="span"
                                                inherit
                                                variant="gradient"
                                                gradient={{ from: '#f2b518', to: '#ffa500' }}
                                            >
                                                {slide.subtitle.split(' ').slice(-2, -1)[0]}{' '}
                                            </Text>
                                            at a{' '}
                                            <Text
                                                component="span"
                                                inherit
                                                variant="gradient"
                                                gradient={{ from: '#ffa500', to: '#f2b518' }}
                                            >
                                                {slide.subtitle.split(' ').slice(-1)[0]}
                                            </Text>
                                        </Text>
                                    </Title>
                                    <Text size="lg" className={classes.description}>
                                        {slide.description}
                                    </Text>
                                </Stack>
                            </Container>

                            <div className={classes.controls}>
                                <Button className={classes.control} variant="white" size="lg" component={Link} to="/courses">
                                    Start Learning
                                </Button>
                                <Button className={classes.control} variant="white" size="lg" component={Link} to="/languages">
                                    Browse Languages
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <button className={`${classes.navigationButton} left`} onClick={goToPrevious}>
                <IconChevronLeft size={24} color="white" />
            </button>
            <button className={`${classes.navigationButton} right`} onClick={goToNext}>
                <IconChevronRight size={24} color="white" />
            </button>

            <div className={classes.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${classes.dot} ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
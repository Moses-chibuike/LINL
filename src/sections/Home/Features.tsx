import {
    Box,
    BoxProps,
    Button,
    Card,
    createStyles,
    Image,
    PaperProps,
    SimpleGrid,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps
} from '@mantine/core';
import {TitleBadge} from "../../components";

const useStyles = createStyles((theme) => ({
    feature: {
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`
    },
}));

interface FeatureProps extends PaperProps {
    image: string
    title: string;
    description: string;
    action: string;
}

const mockdata = [
    {
        image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Entrepreneurs',
        description:
            'Empowering growth by providing tools and resources to help entrepreneurs turn ideas into impactful realities.',
        action: `Donate`
    },
    {
        image: 'https://images.unsplash.com/photo-1497655392221-e645087843da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Orphans',
        description:
            `Restoring hope by giving orphans access to education, mentorship, and a nurturing environment to rewrite their stories.
`,
        action: 'Donate'
    },
    {
        image: 'https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Single Mothers',
        description:
            `Helping single mothers overcome challenges with tailored relief and opportunities.`,
        action: 'Donate'
    },
    {
        image: 'https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'School Children',
        description:
            `Equipping school children with the resources they need to succeed and dream big.`,
        action: 'Donate'
    },
];

function Feature({image, title, description, action}: FeatureProps) {
    const {classes, cx} = useStyles();

    return (
        <Card className={cx(classes.feature, 'card')} shadow="md" radius="sm">
            <Card.Section>
                <Image src={image} height={240} fit="cover"/>
            </Card.Section>
            <Stack spacing="sm" mt="md">
                <Title order={4}>{title}</Title>
                <Text size="sm">{description}</Text>
                <Button variant="subtle" color="secondary">{action}</Button>
            </Stack>
        </Card>
    );
}

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps
    subtitleProps?: TextProps
}

const FeaturesSection = ({boxProps, subtitleProps}: IProps) => {
    const items = mockdata.map((item) => <Feature {...item} key={item.title}/>);

    return (
        <Box {...boxProps}>
            <Box mb="lg">
                <TitleBadge title="who we help"/>
                <Text {...subtitleProps}>Transforming Lives, One Story at a Time</Text>
            </Box>
            <SimpleGrid cols={2} spacing="lg" breakpoints={[{maxWidth: 'md', cols: 2, spacing: 'sm'}]} >
                {items}
            </SimpleGrid>
        </Box>
    );
}

export default FeaturesSection;

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
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    feature: {
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows.lg,
        }
    },
    
    actionButton: {
        backgroundColor: '#f2b518',
        color: theme.white,
        
        '&:hover': {
            backgroundColor: '#d9a315',
        }
    }
}));

interface FeatureProps extends PaperProps {
    image: string
    title: string;
    description: string;
    action: string;
    link: string;
}

const mockdata = [
    {
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        title: 'Spanish Language Courses',
        description:
            'Master Spanish with our comprehensive courses covering all proficiency levels. Perfect for travel, business, or DELE certification preparation.',
        action: 'Enrol Now',
        link: '/how-it-works'
    },
    {
        image: 'https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=821',
        title: 'German Language Courses',
        description:
            'Learn German from beginner to advanced levels. Prepare for Goethe-Zertifikat exams and unlock opportunities in German-speaking countries.',
        action: 'Enrol Now',
        link: '/how-it-works'
    },
    {
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3',
        title: 'French Language Courses',
        description:
            'Discover the beauty of French language and culture. From basics to DELF/DALF preparation, we guide you every step of the way.',
        action: 'Enrol Now',
        link: '/how-it-works'
    },
    {
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
        title: 'Chinese Language Courses',
        description:
            'Explore the richness of Mandarin Chinese. Master spoken and written language with our structured curriculum designed for all proficiency levels.',
        action: 'Enrol Now',
        link: '/how-it-works'
    },
];

function Feature({image, title, description, action, link}: FeatureProps) {
    const {classes, cx} = useStyles();

    return (
        <Card className={cx(classes.feature, 'card')} shadow="md" radius="md">
            <Card.Section>
                <Image src={image} height={240} fit="cover"/>
            </Card.Section>
            <Stack spacing="sm" mt="md">
                <Title order={4} weight={700}>{title}</Title>
                <Text size="sm" color="dimmed" style={{ minHeight: '60px' }}>
                    {description}
                </Text>
                <Button 
                    className={classes.actionButton}
                    component={Link} 
                    to={link}
                    fullWidth
                >
                    {action}
                </Button>
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
                <TitleBadge title="what we offer"/>
                <Text {...subtitleProps}>Comprehensive Language Learning Programs</Text>
            </Box>
            <SimpleGrid cols={2} spacing="lg" breakpoints={[{maxWidth: 'md', cols: 2, spacing: 'sm'}, {maxWidth: 'sm', cols: 1, spacing: 'sm'}]}>
                {items}
            </SimpleGrid>
        </Box>
    );
}

export default FeaturesSection;
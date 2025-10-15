import {
    Box,
    BoxProps,
    Card,
    Container,
    createStyles,
    Grid,
    Image,
    SimpleGrid,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps
} from "@mantine/core";
import {TitleBadge} from "../../components";
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    feature: {
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `none`,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',

        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows.lg,
        }
    },
}));

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
}

const WaysToLearnSection = ({boxProps, subtitleProps, titleProps}: IProps) => {
    const {classes, cx, theme} = useStyles();

    return (
        <Box sx={{background: theme.colors.secondary[8], color: theme.white}} {...boxProps}>
            <Container fluid p={36}>
                <Grid>
                    <Grid.Col lg={4}>
                        <Stack spacing="xs" justify="center" sx={{height: '100%'}}>
                            <TitleBadge title="Learning Pathways"/>
                            <Title {...titleProps} order={4}>Choose Your Learning Journey</Title>
                            <Text size="sm" {...subtitleProps}>Flexible learning options tailored to your needs.</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={8}>
                        <SimpleGrid cols={3} breakpoints={[{maxWidth: 'sm', cols: 1}]} >
                            <Card
                                className={cx(classes.feature, 'card')}
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/courses"
                            >
                                <Card.Section>
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                                        height={200}
                                        fit="cover"
                                    />
                                </Card.Section>
                                <Text mt="md" align="center" weight={600} color="dark" {...subtitleProps}>Group Classes</Text>
                            </Card>
                            <Card
                                className={cx(classes.feature, 'card')}
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/courses"
                            >
                                <Card.Section>
                                    <Image
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                                        height={200}
                                        fit="cover"
                                    />
                                </Card.Section>
                                <Text mt="md" align="center" weight={600} color="dark" {...subtitleProps}>Private Tutoring</Text>
                            </Card>
                            <Card
                                className={cx(classes.feature, 'card')}
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/courses"
                            >
                                <Card.Section>
                                    <Image
                                        src="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                                        height={200}
                                        fit="cover"
                                    />
                                </Card.Section>
                                <Text mt="md" align="center" weight={600} color="dark" {...subtitleProps}>Online Learning</Text>
                            </Card>
                        </SimpleGrid>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default WaysToLearnSection;
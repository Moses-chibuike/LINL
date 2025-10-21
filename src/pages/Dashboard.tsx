import {
    Box,
    Container,
    createStyles,
    Grid,
    Paper,
    PaperProps,
    rem,
    Text,
    Title,
    Avatar,
    Stack
} from "@mantine/core";
import { Helmet } from "react-helmet";

const useStyles = createStyles((theme) => ({
    root: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
    },

    title: {
        fontWeight: 700,
        textTransform: 'uppercase',
    },

    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    avatar: {
        border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
}));

const DashboardPage = () => {
    const { classes } = useStyles();

    const paperProps: PaperProps = {
        p: "md",
        shadow: "sm"
    }

    const teamMembers = [
        {
            name: 'Obinna Aludu',
            role: 'Founder',
            avatar: '/assets/img/8.png',
            bio: 'Leading our mission to transform lives through purpose and innovation.',
        },
        {
            name: 'Ezechukwu chibuike moses',
            role: 'Co-founder',
            avatar: '/assets/img/9.png',
            bio: 'Driving technological advancement and digital transformation initiatives.',
        },
        {
            name: 'Chima Ifeyinwa',
            role: 'Sec/Admin',
            avatar: '/assets/img/30.jpg',
            bio: 'Managing administrative operations and ensuring organizational efficiency.',
        },
        {
            name: 'Ibeh Chukwunomso',
            role: 'German Coordinator',
            avatar: '/assets/img/31.jpg',
            bio: 'Coordinating German language programs and cultural exchange initiatives.',
        },
        {
            name: 'Eze Amarachi Vera',
            role: 'Chinese Coordinator',
            avatar: '/assets/img/32.jpg',
            bio: 'Leading Chinese language programs and fostering cross-cultural connections.',
        },
        {
            name: 'Eze Cynthia',
            role: 'Spanish Coordinator',
            avatar: '/assets/img/33.jpg',
            bio: 'Overseeing Spanish language initiatives and Hispanic cultural programs.',
        },
        {
            name: 'Onyedinma Cynthia Eberechi',
            role: 'German Coordinator',
            avatar: '/assets/img/34.jpg',
            bio: 'Supporting German language education and student engagement programs.',
        },
        {
            name: 'Okem Gideon Okem',
            role: 'French Coordinator',
            avatar: '/assets/img/35.jpg',
            bio: 'Coordinating French language programs and francophone cultural activities.',
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Team</title>
            </Helmet>
            <Box>
                <Container fluid my="xl">
                    <Stack spacing="xl">
                        <Title order={2} align="center" mb="xl">Meet Our Team</Title>
                        <Text align="center" size="lg" color="dimmed" mb="xl">
                            Dedicated professionals working together to make a difference
                        </Text>
                        
                        <Grid>
                            {teamMembers.map((member, index) => (
                                <Grid.Col key={index} xs={12} sm={6} md={4}>
                                    <Paper {...paperProps} className={classes.card}>
                                        <Stack align="center" spacing="sm">
                                            <Avatar
                                                src={member.avatar}
                                                size={120}
                                                radius={120}
                                                mx="auto"
                                                className={classes.avatar}
                                            />
                                            <Title order={4}>{member.name}</Title>
                                            <Text size="sm" color="dimmed" weight={500}>
                                                {member.role}
                                            </Text>
                                            <Text size="sm" align="center">
                                                {member.bio}
                                            </Text>
                                        </Stack>
                                    </Paper>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default DashboardPage;
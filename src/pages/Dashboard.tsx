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
    Group,
    Stack
} from "@mantine/core";
import {
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail
} from "@tabler/icons-react";
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

    socialIcon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[6],
            cursor: 'pointer'
        },
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
            name: 'Oluseyi Ifeanyichukwu Alao',
            role: 'Founder',
            avatar: '/assets/img/8.png',
            bio: 'Leading our mission to transform lives through purpose and innovation.',
            linkedin: '#',
            twitter: '#',
            email: 'sarah@example.com'
        },
        {
            name: 'Ezechukwu chibuike moses',
            role: 'Co-founder',
            avatar: '/assets/img/9.png',
            bio: 'Driving technological advancement and digital transformation initiatives.',
            linkedin: '#',
            twitter: '#',
            email: 'michael@example.com'
        },
        {
            name: 'Coming Soon',
            role: 'Community Manager',
            avatar: '/api/placeholder/150/150',
            bio: 'Building and nurturing our vibrant community of supporters and partners.',
            linkedin: '#',
            twitter: '#',
            email: 'emma@example.com'
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
                                            <Group spacing="xs">
                                                <IconBrandLinkedin 
                                                    size="1.2rem" 
                                                    className={classes.socialIcon}
                                                    onClick={() => window.open(member.linkedin, '_blank')}
                                                />
                                                <IconBrandTwitter 
                                                    size="1.2rem" 
                                                    className={classes.socialIcon}
                                                    onClick={() => window.open(member.twitter, '_blank')}
                                                />
                                                <IconMail 
                                                    size="1.2rem" 
                                                    className={classes.socialIcon}
                                                    onClick={() => window.open(`mailto:${member.email}`)}
                                                />
                                            </Group>
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
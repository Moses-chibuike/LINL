import { Helmet } from "react-helmet";
import {
    Box,
    Button,
    Container,
    Text,
    Title,
    Stack,
    Group,
    Paper,
    Grid,
    Badge
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface Course {
    id: string;
    level: string;
    title: string;
    description: string;
    details: string;
    format: string;
    fee: number;
}

const courses: Course[] = [
    // A1 Courses
    {
        id: "a1-onsite",
        level: "A1 (Elementary)",
        title: "A1 - Elementary (On-site)",
        description: "Can comprehend and use familiar, simple sentences to organize basic communication.",
        details: "9 weeks. 144 hours. Three sessions: Morning, Afternoon and Evening.",
        format: "On-site",
        fee: 60000
    },
    {
        id: "a1-online-private",
        level: "A1 (Elementary)",
        title: "A1 - Elementary (Online. Private)",
        description: "Can comprehend and use familiar, simple sentences to organize basic communication.",
        details: "Individually tailored. Adapted to suit your personal schedule and pace of learning.",
        format: "Online (Private)",
        fee: 180000
    },
    {
        id: "a1-physical-private",
        level: "A1 (Elementary)",
        title: "A1 - Elementary (Private. Physical Class)",
        description: "Can comprehend and use familiar, simple sentences to organize basic communication.",
        details: "Individually tailored. Adapted to suit your personal schedule and pace of learning.",
        format: "Physical (Private)",
        fee: 180000
    },
    {
        id: "a1-online",
        level: "A1 (Elementary)",
        title: "A1 - Elementary (Online)",
        description: "Can comprehend and use familiar, simple sentences to organize basic communication.",
        details: "Individually tailored. Adapted to suit your personal schedule and pace of learning.",
        format: "Online",
        fee: 80000
    },
    // A2 Courses
    {
        id: "a2-onsite",
        level: "A2 (Elementary)",
        title: "A2 - Elementary (On-site)",
        description: "Can understand sentences and commonly used expressions associated with themes around personal information such as family, shopping, workplace, and ones immediate environment.",
        details: "9 weeks. 144 hours. Three sessions: Morning, Afternoon, and Evening.",
        format: "On-site",
        fee: 60000
    },
    {
        id: "a2-online-private",
        level: "A2 (Elementary)",
        title: "A2 - Elementary (Online. Private)",
        description: "Can understand sentences and commonly used expressions associated with themes around personal information such as family, shopping, workplace, and ones immediate environment.",
        details: "Individually adapted. Tailored to suit your schedule and pace of learning.",
        format: "Online (Private)",
        fee: 180000
    },
    {
        id: "a2-physical-private",
        level: "A2 (Elementary)",
        title: "A2 - Elementary (Private. Physical Class)",
        description: "Can understand sentences and commonly used expressions associated with themes around personal information such as family, shopping, workplace, and ones immediate environment.",
        details: "Individually adapted. Tailored to suit your schedule and pace of learning.",
        format: "Physical (Private)",
        fee: 160000
    },
    {
        id: "a2-online",
        level: "A2 (Elementary)",
        title: "A2 - Elementary (Online)",
        description: "Can understand sentences and commonly used expressions associated with themes around personal information such as family, shopping, workplace, and ones immediate environment.",
        details: "Individually adapted. Tailored to suit your schedule and pace of learning.",
        format: "Online",
        fee: 80000
    },
    // B1 Courses
    {
        id: "b1-onsite",
        level: "B1 (Independent)",
        title: "B1 - Independent (On-site)",
        description: "Can understand the main points when standard language is used. Can understand familiar topics associated with work, school, leisure time, in the market, etc.",
        details: "9 weeks. 144 hours. Three sessions: Morning, Afternoon, and Evening.",
        format: "On-site",
        fee: 60000
    },
    {
        id: "b1-online",
        level: "B1 (Independent)",
        title: "B1 - Independent (Online)",
        description: "Can understand the main points when standard language is used. Can understand familiar topics associated with work, school, leisure time, in the market, etc.",
        details: "Individually determined. Tailored to suit your schedule and pace of learning.",
        format: "Online",
        fee: 80000
    },
    {
        id: "b1-physical-private",
        level: "B1 (Independent)",
        title: "B1 - Independent (Private. Physical Class)",
        description: "Can understand the main points when standard language is used. Can understand familiar topics associated with work, school, leisure time, in the market, etc.",
        details: "Individually determined. Tailored to suit your schedule and pace of learning.",
        format: "Physical (Private)",
        fee: 170000
    },
    {
        id: "b1-online-private",
        level: "B1 (Independent)",
        title: "B1 - Independent (Online. Private)",
        description: "Can understand the main points when standard language is used. Can understand familiar topics associated with work, school, leisure time, in the market, etc.",
        details: "Individually determined. Tailored to suit your schedule and pace of learning.",
        format: "Online (Private)",
        fee: 180000
    },
    // B2 Courses
    {
        id: "b2-onsite",
        level: "B2 (Independent)",
        title: "B2 - Independent (On-site)",
        description: "Can comprehend the main contents of complex texts on abstract topics; also participate in specialized conversation in ones own primary area of specialization.",
        details: "9 weeks. 144 hours. Three sessions: Morning, Afternoon and Evening.",
        format: "On-site",
        fee: 70000
    },
    {
        id: "b2-online",
        level: "B2 (Independent)",
        title: "B2 - Independent (Online)",
        description: "Can comprehend the main contents of complex texts on abstract topics; also participate in specialized conversation in ones own primary area of specialization.",
        details: "Individually determined. Adapted to suit schedule and pace of learning.",
        format: "Online",
        fee: 90000
    },
    {
        id: "b2-physical-private",
        level: "B2 (Independent)",
        title: "B2 - Independent (Private. Physical Class)",
        description: "Can comprehend the main contents of complex texts on abstract topics; also participate in specialized conversation in ones own primary area of specialization.",
        details: "Individually determined. Adapted to suit your schedule and pace of learning.",
        format: "Physical (Private)",
        fee: 180000
    },
    {
        id: "b2-online-private",
        level: "B2 (Independent)",
        title: "B2 - Independent (Online. Private)",
        description: "Can comprehend the main contents of complex texts on abstract topics; also participate in specialized conversation in ones own primary area of specialization.",
        details: "Individually determined. Adapted to suit your schedule and pace of learning.",
        format: "Online (Private)",
        fee: 200000
    }
];

const HowItWorksPage = (): JSX.Element => {
    const navigate = useNavigate();

    const handleRegisterCourse = (course: Course) => {
        navigate('/payment-summary', {
            state: {
                amount: course.fee.toString(),
                courseTitle: course.title,
                courseLevel: course.level,
                courseFormat: course.format,
                courseFee: course.fee,
                registrationType: 'course',
                invoiceType: 'Course Registration'
            }
        });
    };

    const groupedCourses = courses.reduce((acc, course) => {
        if (!acc[course.level]) {
            acc[course.level] = [];
        }
        acc[course.level].push(course);
        return acc;
    }, {} as Record<string, Course[]>);

    const levelOrder = ["A1 (Elementary)", "A2 (Elementary)", "B1 (Independent)", "B2 (Independent)"];

    return (
        <>
            <Helmet>
                <title>Our Courses</title>
            </Helmet>

            <Container size="lg">
                <Box py={50}>
                    <Stack spacing="xl">
                        {/* Header Section */}
                        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <Title
                                order={1}
                                sx={(theme) => ({
                                    fontSize: '48px',
                                    fontWeight: 700,
                                    letterSpacing: '-0.02em',
                                    marginBottom: theme.spacing.md,
                                })}
                            >
                                Our Courses
                            </Title>
                            <Text
                                size="lg"
                                color="dimmed"
                                sx={{ maxWidth: '700px', margin: '0 auto' }}
                            >
                                Choose from our comprehensive range of language courses tailored to your level and learning preferences.
                            </Text>
                        </Box>

                        {/* Courses by Level */}
                        {levelOrder.map((level) => (
                            <Box key={level}>
                                <Title order={2} size="h3" mb="lg" sx={{ fontSize: '28px' }}>
                                    {level}
                                </Title>
                                <Grid gutter="lg" mb="xl">
                                    {groupedCourses[level]?.map((course) => (
                                        <Grid.Col key={course.id} xs={12} sm={6} md={6} lg={6}>
                                            <Paper
                                                shadow="sm"
                                                p="lg"
                                                radius="md"
                                                sx={(theme) => ({
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: `1px solid ${theme.colors.gray[2]}`,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        boxShadow: theme.shadows.md,
                                                        borderColor: theme.colors.blue[4],
                                                        transform: 'translateY(-4px)'
                                                    }
                                                })}
                                            >
                                                <Group position="apart" mb="md">
                                                    <Badge variant="light" color="blue" size="lg">
                                                        {course.format}
                                                    </Badge>
                                                </Group>

                                                <Title order={3} size="h4" mb="sm" sx={{ fontSize: '18px', fontWeight: 600 }}>
                                                    {course.title}
                                                </Title>

                                                <Text size="sm" color="dimmed" mb="md" sx={{ lineHeight: 1.6 }}>
                                                    {course.description}
                                                </Text>

                                                <Text size="sm" mb="lg" sx={{ color: '#666', lineHeight: 1.5 }}>
                                                    <strong>Duration & Schedule:</strong> {course.details}
                                                </Text>

                                                <Box sx={{ marginTop: 'auto' }}>
                                                    <Group position="apart" sx={{ alignItems: 'flex-end' }}>
                                                        <Box>
                                                            <Text size="xs" color="dimmed">Course Fee</Text>
                                                            <Title order={4} sx={{ fontSize: '22px', fontWeight: 700, color: '#1971c2' }}>
                                                                ₦{course.fee.toLocaleString()}
                                                            </Title>
                                                        </Box>
                                                        <Button
                                                            onClick={() => handleRegisterCourse(course)}
                                                            size="md"
                                                        >
                                                            Register Course
                                                        </Button>
                                                    </Group>
                                                </Box>
                                            </Paper>
                                        </Grid.Col>
                                    ))}
                                </Grid>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </>
    );
};

export default HowItWorksPage;
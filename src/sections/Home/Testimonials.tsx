import {Box, BoxProps, TextProps, Title, TitleProps, Text, SimpleGrid, Card, Badge, Stack, Overlay} from "@mantine/core";

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
}

const languages = [
    {
        id: 1,
        name: "Spanish",
        exam: "DELE",
        description: "Connect with 500M+ speakers worldwide",
        color: "#DC2626",
        icon: "🇪🇸",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80"
    },
    {
        id: 2,
        name: "German",
        exam: "Goethe-Zertifikat",
        description: "Access Europe's economic powerhouse",
        color: "#1F2937",
        icon: "🇩🇪",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
    },
    {
        id: 3,
        name: "French",
        exam: "DELF",
        description: "Join the global Francophone community",
        color: "#1E40AF",
        icon: "🇫🇷",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
    },
    {
        id: 4,
        name: "Chinese",
        exam: "HSK",
        description: "Tap into Asia's business landscape",
        color: "#DC2626",
        icon: "🇨🇳",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80"
    }
];

const TestimonialsSection = ({boxProps, titleProps, subtitleProps}: IProps) => {
    return (
        <Box {...boxProps}>
            <Box mb={50} style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
                <Title {...titleProps} mb={16}>Your Gateway to Global Languages</Title>
                <Text {...subtitleProps} size="md" color="dimmed">
                    Master Spanish, German, French, or Chinese with expert native instructors and internationally recognized certifications.
                </Text>
            </Box>

            <SimpleGrid cols={4} spacing="xl" breakpoints={[
                { maxWidth: 'md', cols: 2 },
                { maxWidth: 'sm', cols: 1 }
            ]}>
                {languages.map((lang) => (
                    <Card 
                        key={lang.id} 
                        shadow="lg" 
                        padding={0}
                        radius="xl" 
                        style={{ 
                            overflow: 'hidden',
                            border: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        <Box 
                            style={{ 
                                backgroundImage: `url(${lang.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                padding: '40px 24px',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '220px'
                            }}
                        >
                            <Overlay opacity={0.5} color="#000" zIndex={1} />
                            
                            <Stack spacing="xs" style={{ position: 'relative', zIndex: 2 }}>
                                <Text size="48px" style={{ lineHeight: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                    {lang.icon}
                                </Text>
                                <Title order={2} color="white" style={{ 
                                    fontSize: '28px', 
                                    fontWeight: 700,
                                    textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                                }}>
                                    {lang.name}
                                </Title>
                            </Stack>
                        </Box>
                        
                        <Box p="lg" style={{ background: 'white' }}>
                            <Badge 
                                size="md" 
                                radius="md"
                                mb="sm"
                                style={{ 
                                    backgroundColor: `${lang.color}15`,
                                    color: lang.color,
                                    border: `1px solid ${lang.color}30`,
                                    fontWeight: 600
                                }}
                            >
                                {lang.exam}
                            </Badge>
                            <Text size="sm" color="dimmed" weight={500}>
                                {lang.description}
                            </Text>
                        </Box>
                    </Card>
                ))}
            </SimpleGrid>


        </Box>
    );
};

export default TestimonialsSection;
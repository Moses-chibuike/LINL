import {Box, BoxProps, TextProps, Title, TitleProps, Button, Container, Stack, Text, useMantineTheme, MediaQuery} from '@mantine/core'
import {TitleBadge} from "../../components";
import {useMediaQuery} from "@mantine/hooks";

interface FeatureItem {
    id: string;
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

interface IProps {
    boxProps?: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
    features?: FeatureItem[]
}

const featuresData: FeatureItem[] = [
    {
        id: '1',
        icon: '🏠',
        title: 'Find Admissions',
        description: '@ Language Integration Nigeria Limited we give admissions to every gender both who are ready to learn German',
        buttonText: 'Enrol Now',
        buttonLink: '#'
    },
    {
        id: '2',
        icon: '👍',
        title: 'Visa Application',
        description: 'You have all the requirements needed to pursue your next career in Germany but you don\'t have a visa yet? Language Integration Nigeria Limited guides you perfectly on how to follow up your VISA application without any charge. It feels really good to work with us.',
        buttonText: 'Contact',
        buttonLink: '#'
    },
    {
        id: '3',
        icon: '👥',
        title: 'Private Tutorial',
        description: 'We consider your social/religious/professional/personal challenges, and we have decided to give you a private session option. The Class is designed to run at your pace and at your time, you choose when your days and your time. T&C applied. Apply now for our Private class, lets make you a special candidate.',
        buttonText: 'Enrol Now',
        buttonLink: '#'
    },
    {
        id: '4',
        icon: '📦',
        title: 'Online Classes',
        description: 'Still, in line with the four modules, Reading, Listening, Writing, and Speaking, Language Integration Nigeria Limited covers helps you solve distance challenges with our online intensive Course. It feels just like you are in a physical class, so long as you have a good internet supply.',
        buttonText: 'Enrol Now',
        buttonLink: '#'
    }
];

const CampaignsSection = ({boxProps = {}, titleProps, subtitleProps, features = featuresData}: IProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');

    return (
        <Box 
            {...boxProps}
            sx={{
                backgroundColor: '#f5f5f5',
                py: 40,
                '@media (max-width: 768px)': {
                    py: 30
                }
            }}
        >
            <Container size="lg" px={{base: 'md', sm: 'lg', md: 'xl'}}>
                <Stack align="center" spacing="xl" mb={{base: 40, md: 60}}>
                    <Title 
                        order={1} 
                        align="center" 
                        sx={{
                            fontSize: 42,
                            fontWeight: 700,
                            color: '#000',
                            '@media (max-width: 768px)': {
                                fontSize: 28,
                            },
                            '@media (max-width: 480px)': {
                                fontSize: 24,
                            }
                        }}
                    >
                        Advance Features!
                    </Title>
                    <Text 
                        align="center" 
                        sx={{
                            fontSize: 16,
                            color: '#555',
                            maxWidth: 700,
                            lineHeight: 1.6,
                            '@media (max-width: 768px)': {
                                fontSize: 14,
                            }
                        }}
                    >
                        He who knows no foreign languages knows nothing of his own and The limits of my language mean the limits of my world
                    </Text>
                </Stack>

                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 40,
                        '@media (max-width: 1024px)': {
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 30
                        },
                        '@media (max-width: 768px)': {
                            gridTemplateColumns: '1fr',
                            gap: 25
                        }
                    }}
                >
                    {features.map(feature => (
                        <Box 
                            key={feature.id} 
                            sx={{
                                display: 'flex',
                                gap: 20,
                                '@media (max-width: 480px)': {
                                    gap: 15
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: 55,
                                    height: 55,
                                    minWidth: 55,
                                    backgroundColor: '#FFA500',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 6,
                                    fontSize: 28,
                                    flexShrink: 0,
                                    '@media (max-width: 480px)': {
                                        width: 45,
                                        height: 45,
                                        minWidth: 45,
                                        fontSize: 24
                                    }
                                }}
                            >
                                {feature.icon}
                            </Box>
                            <Box sx={{flex: 1}}>
                                <Title 
                                    order={3} 
                                    sx={{
                                        margin: 0,
                                        marginBottom: 10,
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: '#000',
                                        '@media (max-width: 480px)': {
                                            fontSize: 16,
                                            marginBottom: 8
                                        }
                                    }}
                                >
                                    {feature.title}
                                </Title>
                                <Text 
                                    size="sm" 
                                    sx={{
                                        color: '#666',
                                        lineHeight: 1.6,
                                        marginBottom: 15,
                                        fontSize: 14,
                                        '@media (max-width: 480px)': {
                                            fontSize: 13,
                                            marginBottom: 12
                                        }
                                    }}
                                >
                                    {feature.description}
                                </Text>
                                <Button
                                    component="a"
                                    href={feature.buttonLink}
                                    variant="subtle"
                                    p={0}
                                    h="auto"
                                    sx={{
                                        textDecoration: 'underline',
                                        color: '#FFA500',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#FF8C00'
                                        },
                                        '@media (max-width: 480px)': {
                                            fontSize: 12
                                        }
                                    }}
                                >
                                    {feature.buttonText}
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default CampaignsSection;
import {
    Avatar,
    Box,
    BoxProps,
    Button,
    Flex,
    Progress,
    Stack,
    Text,
    TextProps,
    ThemeIcon,
    Title,
    TitleProps
} from "@mantine/core";
import {IconUsers, IconWorld} from "@tabler/icons-react"
import {TitleBadge} from "../../components";
import {useMediaQuery} from "@mantine/hooks";

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
}

const JoinUsSection = ({boxProps, subtitleProps, titleProps}: IProps) => {
    const matchesMobile = useMediaQuery('(max-width: 768px)');
    const matchesSmallMobile = useMediaQuery('(max-width: 480px)');

    return (
        <Box {...boxProps}>
            <Flex 
                gap={{base: 'sm', sm: 'md', md: 'lg'}} 
                direction={{base: 'column-reverse', md: 'row'}} 
                align={{base: 'stretch', md: 'flex-end'}}
            >
                <Stack 
                    spacing={matchesSmallMobile ? 'sm' : matchesMobile ? 'md' : 'lg'}
                    sx={{flex: 1}}
                >
                    <TitleBadge title='Join our community'/>
                    <Title 
                        {...titleProps}
                        sx={{
                            fontSize: matchesSmallMobile ? 28 : matchesMobile ? 32 : 42,
                            lineHeight: 1.2,
                            ...titleProps?.sx
                        }}
                    >
                        Start your German learning journey today
                    </Title>
                    <Text 
                        {...subtitleProps}
                        sx={{
                            fontSize: matchesSmallMobile ? 13 : matchesMobile ? 14 : 16,
                            ...subtitleProps?.sx
                        }}
                    >
                        Join Language Integration Nigeria Limited and unlock your potential
                    </Text>
                    <Flex gap="xs" direction="column">
                        <Flex gap="xs">
                            <ThemeIcon 
                                size="xl" 
                                color="yellow" 
                                variant="filled"
                                sx={{
                                    minWidth: 'auto',
                                    '@media (max-width: 480px)': {
                                        minWidth: 'auto'
                                    }
                                }}
                            >
                                <IconWorld size={20} />
                            </ThemeIcon>
                            <Stack spacing={2} sx={{flex: 1}}>
                                <Text 
                                    weight={600}
                                    sx={{fontSize: matchesSmallMobile ? 13 : 14}}
                                >
                                    Expert Instructors
                                </Text>
                                <Text 
                                    size="sm"
                                    sx={{
                                        fontSize: matchesSmallMobile ? 12 : 13,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Learn from experienced professionals dedicated to your success.
                                </Text>
                            </Stack>
                        </Flex>
                        <Flex gap="xs">
                            <ThemeIcon 
                                size="xl" 
                                color="yellow" 
                                variant="filled"
                                sx={{
                                    minWidth: 'auto',
                                    '@media (max-width: 480px)': {
                                        minWidth: 'auto'
                                    }
                                }}
                            >
                                <IconUsers size={20} />
                            </ThemeIcon>
                            <Stack spacing={2} sx={{flex: 1}}>
                                <Text 
                                    weight={600}
                                    sx={{fontSize: matchesSmallMobile ? 13 : 14}}
                                >
                                    Supportive Community
                                </Text>
                                <Text 
                                    size="sm"
                                    sx={{
                                        fontSize: matchesSmallMobile ? 12 : 13,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Connect with fellow learners and grow together in our vibrant community.
                                </Text>
                            </Stack>
                        </Flex>
                    </Flex>
                    <Avatar.Group spacing="sm">
                        <Avatar
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            radius="xl"
                            size={matchesSmallMobile ? 32 : matchesMobile ? 36 : 40}
                        />
                        <Avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            radius="xl"
                            size={matchesSmallMobile ? 32 : matchesMobile ? 36 : 40}
                        />
                        <Avatar
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            radius="xl"
                            size={matchesSmallMobile ? 32 : matchesMobile ? 36 : 40}
                        />
                        <Avatar
                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            radius="xl"
                            size={matchesSmallMobile ? 32 : matchesMobile ? 36 : 40}
                        />
                        <Avatar 
                            radius="xl"
                            size={matchesSmallMobile ? 32 : matchesMobile ? 36 : 40}
                        >
                            +50
                        </Avatar>
                    </Avatar.Group>
                    <Progress value={75} color="yellow" />
                    <Button 
                        size={matchesSmallMobile ? "sm" : "md"} 
                        fullWidth={matchesMobile}
                        sx={{
                            backgroundColor: '#f2b518',
                            '&:hover': {
                                backgroundColor: '#d9a315',
                            },
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}
                    >
                        Join Us Now
                    </Button>
                </Stack>
                <Box 
                    sx={{
                        flex: 1,
                        minWidth: 0,
                        '@media (max-width: 768px)': {
                            width: '100%',
                            marginBottom: 'md'
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: matchesMobile ? '100%' : 500,
                            height: matchesSmallMobile ? 280 : matchesMobile ? 350 : 520,
                            borderRadius: 8,
                            overflow: 'hidden',
                            marginLeft: matchesMobile ? 0 : 'auto'
                        }}
                    >
                        <iframe
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: 8,
                            }}
                            src="https://www.youtube.com/embed/9llLNQ5RoQI?si=Ar0klQ6pGn7h3Fwj"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default JoinUsSection;
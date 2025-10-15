import {
    Avatar,
    Box,
    BoxProps,
    Button,
    Flex,
    Image,
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

    return (
        <Box {...boxProps}>
            <Flex gap={{base: 'sm', sm: 'lg'}} direction={{base: 'column-reverse', md: 'row'}} align="flex-end">
                <Stack>
                    <TitleBadge title='Join our community'/>
                    <Title {...titleProps}>Start your German learning journey today</Title>
                    <Text {...subtitleProps}>Join Language Integration Nigeria Limited and unlock your potential</Text>
                    <Flex gap="xs">
                        <ThemeIcon size="xl" color="yellow" variant="filled">
                            <IconWorld size={20} />
                        </ThemeIcon>
                        <Stack spacing={2}>
                            <Text weight={600}>Expert Instructors</Text>
                            <Text size="sm">Learn from experienced professionals dedicated to your success.</Text>
                        </Stack>
                    </Flex>
                    <Flex gap="xs">
                        <ThemeIcon size="xl" color="yellow" variant="filled">
                            <IconUsers size={20} />
                        </ThemeIcon>
                        <Stack spacing={2}>
                            <Text weight={600}>Supportive Community</Text>
                            <Text size="sm">Connect with fellow learners and grow together in our vibrant community.</Text>
                        </Stack>
                    </Flex>
                    <Avatar.Group spacing="sm">
                        <Avatar
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            radius="xl"/>
                        <Avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            radius="xl"/>
                        <Avatar
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            radius="xl"/>
                        <Avatar
                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            radius="xl"/>
                        <Avatar radius="xl">+50</Avatar>
                    </Avatar.Group>
                    <Progress value={75} color="yellow" />
                    <Button 
                        size="md" 
                        sx={{
                            backgroundColor: '#f2b518',
                            '&:hover': {
                                backgroundColor: '#d9a315',
                            }
                        }}
                    >
                        Join Us Now
                    </Button>
                </Stack>
                <Box mx={matchesMobile ? 0 : 'auto'} style={{flexShrink: 0}}>
                    <Image
                        src="https://images.unsplash.com/photo-1617056239820-8ce90ba48193?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={matchesMobile ? '100%' : 500}
                        height={520}
                        radius="sm"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default JoinUsSection;
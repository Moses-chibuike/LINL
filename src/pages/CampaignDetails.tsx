import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICampaign} from "../types";
import campaignsData from "../data/Campaigns.json";
import {
    ActionIcon,
    Anchor,
    Avatar,
    Box,
    Button,
    Card,
    Container,
    Divider,
    Flex,
    Grid,
    Group,
    Image,
    Paper,
    PaperProps,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps,
    UnstyledButton
} from "@mantine/core";
import {IconFlag, IconHeart, IconHeartFilled, IconSeparator, IconShare} from "@tabler/icons-react";
import {useDisclosure, useMediaQuery, useToggle} from "@mantine/hooks";
import {BackButton, ShareModal, UserCard, NotFound} from "../components";
import {Helmet} from "react-helmet";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import {notifications} from "@mantine/notifications";

// Initialize dayjs plugin
dayjs.extend(localizedFormat);

const CampaignDetailsPage = (): JSX.Element => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState<ICampaign>();
    const [opened, {open, close}] = useDisclosure(false);
    const [following, setFollowing] = useToggle();
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    const paperProps: PaperProps = {
        p: "md",
        shadow: "sm",
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 700,
        transform: 'capitalize',
        sx: {lineHeight: '40px'}
    }

    const subTitleProps: TextProps = {
        size: 20,
        weight: 600,
        sx: {lineHeight: '28px'}
    }

    const iconSize = 18;

    useEffect(() => {
        setCampaign(campaignsData.data.find(_ => _.id === id))
    }, [id]);

    const handleDonateClick = () => {
        navigate('/how-it-works');
    };

    return (
        <>
            <Helmet>
                <title>{campaign?.title}</title>
            </Helmet>
            <Box>
                {campaign ? <Container size="lg">
                    <BackButton mb="md"/>
                    <Grid>
                        <Grid.Col lg={12}>
                            <Stack>
                                <Card padding="md" shadow="sm">
                                    <Card.Section>
                                        <Image src={campaign?.mainImage} height={480}/>
                                    </Card.Section>
                                    <Stack mt="md">
                                        <Title>{campaign?.title}</Title>
                                        {!matchesMobile ?
                                            <Flex gap="xs" align="center">
                                                <Text size="sm">Fundraise campaign created by</Text>
                                                <UnstyledButton component={Anchor}>
                                                    <Flex gap="xs" align="center">
                                                        <Avatar src={campaign?.createdByImage} radius="xl" size="sm"/>
                                                        <Text size="sm">{campaign?.createdBy}</Text>
                                                    </Flex>
                                                </UnstyledButton>
                                                <IconSeparator size={18}/>
                                                <Text component={Anchor} size="sm">{campaign?.country}</Text>
                                                <IconSeparator size={18}/>
                                                <Text component={Anchor} size="sm">{campaign?.category}</Text>
                                            </Flex> :
                                            <Stack>
                                                <Flex gap="md">
                                                    <Text size="sm">Fundraise campaign created by</Text>
                                                    <UnstyledButton component={Anchor}>
                                                        <Flex gap="xs" align="center">
                                                            <Avatar src={campaign?.createdByImage} radius="xl"
                                                                    size="sm"/>
                                                            <Text size="sm">{campaign?.createdBy}</Text>
                                                        </Flex>
                                                    </UnstyledButton>
                                                </Flex>
                                                <Group>
                                                    <Text size="sm">Location
                                                        - <Anchor>{campaign?.country}</Anchor></Text>
                                                    <Text size="sm">Category
                                                        - <Anchor>{campaign?.category}</Anchor></Text>
                                                </Group>
                                            </Stack>
                                        }
                                        <Text {...subTitleProps}>Our story</Text>
                                        <Text size="sm">{campaign?.description}</Text>
                                    </Stack>
                                </Card>

                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Container> : <NotFound/>}
                <ShareModal opened={opened} onClose={close} campaign={campaign} iconSize={iconSize}/>
            </Box>
        </>
    );
};

export default CampaignDetailsPage;
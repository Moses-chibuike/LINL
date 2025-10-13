import {Box, BoxProps, Container, Flex, Select, SimpleGrid, Stack, TextInput, Title, TitleProps} from "@mantine/core";
import campaignsData from "../data/Campaigns.json";
import {CampaignCard} from "../components";
import {Helmet} from "react-helmet";
import {useMediaQuery} from "@mantine/hooks";

const CampaignsPage = (): JSX.Element => {
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    const boxProps: BoxProps = {
        mt: matchesMobile ? 4 : 24,
        mb: matchesMobile ? 4 : 48,
        py: matchesMobile ? 16 : 24
    }

    const titleProps: TitleProps = {
        size: matchesMobile ? 24 : 32,
        weight: 700,
        mb: "lg",
        transform: 'capitalize',
        sx: {lineHeight: matchesMobile ? '32px' : '40px'}
    }

    const items = campaignsData.data.map(c => (<CampaignCard key={c.id} data={c} showActions={true}/>))

    return (
        <>
            <Helmet>
                <title>Discover campaigns to fund</title>
            </Helmet>
            <Box>
                <Container size="lg">
                    <Stack spacing={matchesMobile ? "md" : "xl"}>
                        <Box {...boxProps}>
                            <Title {...titleProps} align="center">Discover campaigns to fund</Title>
                        </Box>
                        <Flex
                            justify="space-between"
                            gap={{base: 'sm', sm: 'lg'}}
                            direction={{base: 'column', sm: 'row'}}
                            w="100%"
                        >
                            <TextInput 
                                placeholder="search campaigns..." 
                                sx={(theme) => ({
                                    width: '100%',
                                    maxWidth: theme.fn.largerThan('sm') ? '500px' : '100%'
                                })}
                            />
                            <Flex 
                                align="center" 
                                gap="sm" 
                                justify={{base: 'space-between', sm: 'flex-start'}}
                                w={{base: '100%', sm: 'auto'}}
                            >
                                <Select
                                    label=""
                                    placeholder="campaigns in"
                                    defaultValue=""
                                    data={[
                                        {value: '10', label: 'show: 10'},
                                        {value: '25', label: 'show: 25'},
                                        {value: '50', label: 'show: 50'},
                                        {value: '100', label: 'show: 100'},
                                    ]}
                                    styles={{
                                        root: { flex: 1 },
                                        input: { minWidth: matchesMobile ? '100%' : '120px' }
                                    }}
                                />
                                <Select
                                    label=""
                                    placeholder="Explore"
                                    defaultValue="featured"
                                    data={[
                                        {value: 'featured', label: 'sort by: featured'},
                                        {value: 'popular', label: 'sort by: popular'},
                                        {value: 'latest', label: 'sorty by: latest'},
                                    ]}
                                    styles={{
                                        root: { flex: 1 },
                                        input: { minWidth: matchesMobile ? '100%' : '120px' }
                                    }}
                                />
                            </Flex>
                        </Flex>
                        <SimpleGrid
                            cols={3}
                            spacing="lg"
                            breakpoints={[
                                {maxWidth: 'md', cols: 2, spacing: 'md'},
                                {maxWidth: 'sm', cols: 1, spacing: 'md'},
                            ]}
                        >
                            {items}
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default CampaignsPage;
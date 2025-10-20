import {Box, BoxProps, Paper, PaperProps, SimpleGrid, Text, TextProps, Title, TitleProps} from "@mantine/core";
import {TitleBadge} from "../../components";

const mockData = [
    {
        amount: '5',
        label: 'Years Experience',
        description: 'Language Integration Nigeria Limited is a registered company with about 8+ working experience'
    },
    {
        amount: '10',
        label: 'Staff',
        description: 'We have a team of workforce that are everly ready to handle any task given to them'
    },
    {
        amount: '200',
        label: 'Successful stories',
        description: 'We have trained lots of students and watch them become a better ambassador of Language Integration Nigeria Limited'
    }
]

interface IStatsProps extends PaperProps {
    amount: string
    label: string
    description: string
}

function Stats({amount, label, description}: IStatsProps) {
    return (
        <Paper
            p="md"
            shadow="md"
            radius="sm"
            sx={{
                backdropFilter: `blur(16px) saturate(180%)`,
                backgroundColor: `rgba(255, 255, 255, 0.75)`,
                border: `1px solid rgba(209, 213, 219, 0.3)`,
                textAlign: 'center'
            }}>
            <Title size={48} weight={700} color="#f2b518" mb="xs">{amount}+</Title>
            <Title order={4} weight={700} mb="md">{label}</Title>
            <Text size="sm" color="dimmed">{description}</Text>
        </Paper>
    )
}

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
}

const StatsSection = ({boxProps, subtitleProps, titleProps}: IProps) => {
    const items = mockData.map((item) => <Stats {...item} key={item.label}/>)

    return (
        <Box {...boxProps}>
            <Box mb="lg">
                <TitleBadge title="what we offer"/>
                <Title {...titleProps}>We have everything you need to know</Title>
                <Text {...subtitleProps}>Language Integration Nigeria Limited is a Nigerian-based German language and Culture learning center. We promote knowledge of the German language in Nigeria and foster international cultural cooperation.</Text>
            </Box>
            <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[
                    {maxWidth: 'md', cols: 2, spacing: 'md'},
                    {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                ]}
            >
                {items}
            </SimpleGrid>
        </Box>
    );
};

export default StatsSection;
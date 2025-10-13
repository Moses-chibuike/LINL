import HeroSection from "../sections/Home/Hero";
import {Box, BoxProps, Container, Text, TextProps, Title, TitleProps} from "@mantine/core";
import {TitleBadge} from "../components";
import FeaturesSection from "../sections/Home/Features";
import StatsSection from "../sections/Home/Stats";
import JoinUsSection from "../sections/Home/JoinUs";
import WaysToFundSection from "../sections/Home/WaysToFund";
import CampaignsSection from "../sections/Home/Campaigns";
import GetStartedSection from "../sections/Home/GetStarted";
import TestimonialsSection from "../sections/Home/Testimonials";
import {Helmet} from "react-helmet";

const HomePage = (): JSX.Element => {
    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 800,
        mb: "lg",
        transform: 'capitalize',
        sx: {lineHeight: '40px'}
    }

    const subTitleProps: TextProps = {
        size: 20,
        weight: 700,
        mb: "md",
        sx: {lineHeight: '28px'}
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Box>
                <HeroSection/>
                <Container>
                    <Box {...boxProps}>
                        <TitleBadge title="About us"/>
                        <Title {...titleProps}>We are an independent NGO</Title>
                        <Text
  {...subTitleProps}
  style={{ color: '#6c757d' }} // Mid-gray color from the Bootstrap palette or use Mantine gray scale
>
AlaoMeHelp is an independent NGO with a simple but powerful mission: to transform lives by investing in resilience, courage, and untapped potential. AlaoMeHelp is an Extension of AlaoMe Transformation Inspired by the personal journey of its founder, Oluseyi IfeanyiChukwu Alao, AlaoMeHelp exists to ensure that no story of hope and perseverance goes unheard or unsupported.

Oluseyi’s life has been a testament to the strength of the human spirit. After losing his mother at the age of 10, he faced unimaginable pain but turned it into a purpose-driven life. His experiences led to the creation of the AlaoMe Transformation Program, which has already impacted countless individuals by helping them discover faith, master their mindset, and find purpose. Building on this foundation, AlaoMeHelp was born to create even greater impact by reaching the vulnerable and resilient in our communities.

AlaoMeHelp stands for:

Orphans who refuse to let their circumstances define them.

Single mothers working tirelessly to give their children a better future.

Innovators and Entrepreneurs who have ideas that could change their communities and the world.

At AlaoMeHelp, every contribution makes a difference. It’s not just about offering support—it’s about creating opportunities, empowering communities, and rewriting futures. Together, we transform resilience into hope and challenges into triumphs.

Join us in this journey. Your support helps build brighter futures, one story at a time. Let’s create a world where no one has to walk their path alone…..

</Text>       </Box>
                    <FeaturesSection boxProps={boxProps} subtitleProps={subTitleProps}/>
                    <StatsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                    <JoinUsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                </Container>
                <WaysToFundSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                <Container>
                    <TestimonialsSection boxProps={boxProps} titleProps={titleProps}/>
                    <CampaignsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                    <GetStartedSection boxProps={boxProps} titleProps={titleProps}/>
                </Container>
            </Box>
        </>
    );
};

export default HomePage;

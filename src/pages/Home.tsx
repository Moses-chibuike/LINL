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
                <title>Language Integration Nigeria Limited - Learn Spanish, German & French</title>
            </Helmet>
            <Box>
                <HeroSection/>
                <Container>
                    <Box {...boxProps}>
                        <TitleBadge title="About us"/>
                        <Title {...titleProps}>Your Gateway to Global Languages</Title>
                        <Text
                            {...subTitleProps}
                            style={{ color: '#6c757d' }}
                        >
                            Language Integration Nigeria Limited is a premier language training institution dedicated to breaking down language barriers and connecting Nigerians to global opportunities. We specialize in teaching Spanish, German, and French—three of the world's most influential languages that open doors to international education, career advancement, and cultural enrichment.

                            Founded with a vision to empower individuals through language mastery, Language Integration Nigeria Limited combines expert instruction with innovative teaching methods. Our experienced native and certified instructors bring authentic cultural insights and proven pedagogical approaches to every lesson, ensuring you don't just learn a language—you live it.

                            At Language Integration Nigeria Limited, we believe language learning is more than grammar and vocabulary. It's about:

                            Building bridges to international opportunities in education and career development.

                            Connecting cultures through authentic communication and understanding.

                            Empowering individuals to confidently navigate global environments.

                            Creating pathways to study abroad programs, international certifications, and career advancement.

                            Whether you're preparing for international exams (DELE, DELF, Goethe-Zertifikat), planning to study or work abroad, or simply passionate about learning new languages, Language Integration Nigeria Limited provides the comprehensive training and support you need to succeed.

                            Our courses are designed for all levels—from absolute beginners to advanced learners—with flexible scheduling options including weekday, weekend, and intensive programs. We offer both in-person classes and online learning to accommodate your lifestyle.

                            Join thousands of successful students who have transformed their futures through language proficiency. At Language Integration Nigeria Limited, we're not just teaching languages—we're building global citizens, one conversation at a time.

                            Start your language journey today and unlock a world of possibilities!
                        </Text>
                    </Box>
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
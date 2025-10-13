import { Helmet } from "react-helmet";
import {
    AspectRatio,
    Box,
    BoxProps,
    Button,
    Card,
    CardProps,
    Container,
    Divider,
    Group,
    Image,
    ImageProps,
    List,
    ListProps,
    SimpleGrid,
    Stack,
    Text,
    Title,
    TitleProps,
    TextInput,
    Select,
    Textarea,
    Paper
} from "@mantine/core";
import { useState } from "react";
import AddImg from "../assets/img/add-campaign.png";
import MoneyImg from "../assets/img/money-income.png";
import ShareImg from "../assets/img/share-campaign.png";
import TestimonialsSection from "../sections/Home/Testimonials";
import { Link, useLocation } from "react-router-dom";

const PayPage = (): JSX.Element => {
    const location = useLocation();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        country: '',
        amount: location.state?.amount || '',
        paymentMethod: '',
        comments: ''
    });

    // Payment Summary Section
    const PaymentSummary = () => {
        if (!location.state?.amount || !location.state?.donationType) return null;
        
        return (
            <Box mb={48}>
                <Paper shadow="sm" radius="md" p="xl" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Title order={3} size={24} mb={24} weight={600} color="dark">
                        Payment Summary
                    </Title>
                    <Stack spacing="md">
                        <Group position="apart">
                            <Text size="lg" color="dimmed">Donation Amount:</Text>
                            <Text size="lg" weight={500}>${Number(location.state.amount).toFixed(2)}</Text>
                        </Group>
                        <Divider />
                        <Group position="apart">
                            <Text size="lg" color="dimmed">Donation Type:</Text>
                            <Text size="lg" weight={500} transform="capitalize">
                                {location.state.donationType.replace(/-/g, ' ')}
                            </Text>
                        </Group>
                        <Divider />
                        <Group position="apart">
                            <Text size="lg" color="dimmed">Total Amount:</Text>
                            <Text size="xl" weight={700} color="blue">
                                ${Number(location.state.amount).toFixed(2)}
                            </Text>
                        </Group>
                    </Stack>
                </Paper>
            </Box>
        );
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formElement = e.target as HTMLFormElement;
        
        try {
            const response = await fetch('https://formspree.io/f/xgvvpzvk', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: new FormData(formElement)
            });

            if (response.ok) {
                setFormSubmitted(true);
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    };

    const titleProps: TitleProps = {
        size: 32,
        weight: 800,
        mb: "xl",
        transform: 'capitalize',
        sx: { lineHeight: '40px' }
    };

    const listProps: Omit<ListProps, 'children'> = {
        size: "sm",
        withPadding: true
    };

    const cardProps: Omit<CardProps, 'children'> = {
        radius: "sm",
        shadow: "md",
        padding: "lg",
        sx: {
            backdropFilter: `blur(16px) saturate(180%)`,
            backgroundColor: `rgba(255, 255, 255, 0.75)`,
            border: `none`,
        }
    };

    const imageProps: ImageProps = {
        height: 160,
        fit: "contain",
        py: "xl"
    };

    return (
        <>
            <Helmet>
                <title>How it works</title>
            </Helmet>
            <Box>
                <Container>
                    {/* Payment Summary */}
                    <PaymentSummary />

                    {/* Rest of the component */}
                    <Box mt={48} mb={64}>
                        <Title order={2} align="center" mb={24} sx={(theme) => ({
                            fontSize: 28,
                            fontWeight: 700,
                            color: theme.black
                        })}>
                            Payment Information
                        </Title>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default PayPage;
import { Helmet } from "react-helmet";
import {
    Box,
    Button,
    Container,
    Text,
    Title,
    Stack,
    Group,
    Paper,
    TextInput,
    Select
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HowItWorksPage = (): JSX.Element => {
    const navigate = useNavigate();
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');

    const predefinedAmounts = [
        { value: '5.00', label: '$5.00' },
        { value: '10.00', label: '$10.00' },
        { value: '50.00', label: '$50.00' },
        { value: '9999.00', label: '$9,999.00' }
    ];

    const donationTypes = [
        { value: 'one-time', label: 'One-Time Donation' },
        { value: 'monthly', label: 'Monthly Donation' },
        { value: 'weekly', label: 'Weekly Donation' }
    ];

    const handleAmountSelect = (amount: string) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (value: string) => {
        setCustomAmount(value);
        setSelectedAmount('');
    };

    const handleDonate = () => {
        const amount = customAmount || selectedAmount;
        navigate('/payment-summary', {
            state: {
                amount,
                donationType
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>How it works</title>
            </Helmet>
            
            <Container size="lg">
                <Box py={50}>
                    <Stack spacing="xl" align="center">
                        {/* Header Section */}
                        <Title
                            order={1}
                            align="center"
                            sx={(theme) => ({
                                fontSize: '48px',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: theme.spacing.md,
                            })}
                        >
                            Change the World.
                        </Title>

                        <Text
                            align="center"
                            size="lg"
                            sx={{ maxWidth: '600px', marginBottom: '2rem' }}
                        >
                            AlaoMeHelp is non-profit, every cent we make goes straight back into making the world a better place, help us do that.
                        </Text>

                        {/* Donation Amount Buttons */}
                        <Group spacing="xs" position="center">
                            {predefinedAmounts.map((amount) => (
                                <Button
                                    key={amount.value}
                                    variant={selectedAmount === amount.value ? "filled" : "outline"}
                                    onClick={() => handleAmountSelect(amount.value)}
                                    size="lg"
                                    sx={{
                                        minWidth: '120px',
                                        height: '48px',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {amount.label}
                                </Button>
                            ))}
                        </Group>

                        {/* Custom Amount Input */}
                        <Box sx={{ width: '200px', margin: '1rem auto' }}>
                            <TextInput
                                placeholder="Custom Amount"
                                value={customAmount}
                                onChange={(event) => handleCustomAmountChange(event.currentTarget.value)}
                                size="lg"
                                sx={{
                                    input: {
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }
                                }}
                            />
                        </Box>

                        {/* Donation Type Section */}
                        <Paper 
                            shadow="xs" 
                            p="xl" 
                            sx={{ 
                                width: '100%', 
                                maxWidth: '400px',
                                textAlign: 'center',
                                marginTop: '2rem'
                            }}
                        >
                            <Select
                                value={donationType}
                                onChange={(value) => value !== null && setDonationType(value)}
                                data={donationTypes}
                                size="md"
                                mb="md"
                                sx={{
                                    textAlign: 'left'
                                }}
                            />
                            <Button
                                size="xl"
                                fullWidth
                                onClick={handleDonate}
                                disabled={!selectedAmount && !customAmount}
                                sx={{
                                    height: '56px',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                }}
                            >
                                Donate
                            </Button>
                        </Paper>
                    </Stack>
                </Box>
            </Container>
        </>
    );
};

export default HowItWorksPage;
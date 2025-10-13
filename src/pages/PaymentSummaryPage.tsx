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
    Divider,
    List,
    Card,
    ActionIcon,
    Tooltip,
    CopyButton,
    ThemeIcon,
    Center
} from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconCheck, IconCopy, IconHeart } from "@tabler/icons-react";

interface LocationState {
    amount: string;
    donationType: string;
}

const PaymentSummaryPage = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentData, setPaymentData] = useState<LocationState | null>(null);
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [showTransferDetails, setShowTransferDetails] = useState(false);
    const [showSuccessView, setShowSuccessView] = useState(false);

    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        // Check if we have valid state data
        const state = location.state as LocationState;
        if (!state || !state.amount) {
            navigate('/how-it-works');
            return;
        }
        
        setPaymentData(state);
        
        // Generate a random invoice number
        const randomInvoice = `INV-${Math.floor(Math.random() * 1000000)}`;
        setInvoiceNumber(randomInvoice);
    }, [location, navigate]);

    const formatAmount = (amount: string): string => {
        const numAmount = parseFloat(amount);
        return numAmount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    const formatDonationType = (type: string): string => {
        switch(type) {
            case 'one-time':
                return 'One-Time Donation';
            case 'monthly':
                return 'Monthly Donation';
            case 'weekly':
                return 'Weekly Donation';
            default:
                return 'Donation';
        }
    };

    const handleProceedToPayment = () => {
        setShowTransferDetails(true);
    };

    const handleBack = () => {
        if (showSuccessView) {
            // If on success view, go back to transfer details
            setShowSuccessView(false);
        } else if (showTransferDetails) {
            // If on transfer details, go back to summary
            setShowTransferDetails(false);
        } else {
            // If on summary, go back to how it works
            navigate('/how-it-works');
        }
    };

    const handleComplete = () => {
        // Show success view instead of alert and navigation
        setShowSuccessView(true);
    };

    const handleGoHome = () => {
        navigate('/how-it-works');
    };

    const handleDonateAgain = () => {
        navigate('/donate');
    };

    if (!paymentData) {
        return <Text>Loading payment summary...</Text>;
    }

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <Helmet>
                <title>
                    {showSuccessView 
                        ? 'Thank You | AlaoMeHelp' 
                        : showTransferDetails 
                            ? 'Payment Details | AlaoMeHelp' 
                            : 'Payment Summary | AlaoMeHelp'}
                </title>
            </Helmet>
            
            <Container size="md">
                <Box py={50}>
                    <Stack spacing="xl">
                        {/* Header Section */}
                        <Title
                            order={1}
                            align="center"
                            sx={(theme) => ({
                                fontSize: '36px',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: theme.spacing.md,
                            })}
                        >
                            {showSuccessView 
                                ? 'Thank You' 
                                : showTransferDetails 
                                    ? 'Payment Details' 
                                    : 'Payment Summary'}
                        </Title>

                        {showSuccessView ? (
                            /* Success View */
                            <Paper 
                                shadow="sm" 
                                p="xl" 
                                sx={{ 
                                    width: '100%', 
                                    maxWidth: '600px',
                                    margin: '0 auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Center mb="xl">
                                    <ThemeIcon 
                                        size={80} 
                                        radius={40} 
                                        color="teal" 
                                        sx={{ 
                                            boxShadow: '0 4px 14px rgba(0, 128, 128, 0.25)',
                                        }}
                                    >
                                        <IconCheck size={40} />
                                    </ThemeIcon>
                                </Center>

                                <Title
                                    order={2}
                                    align="center"
                                    mb="md"
                                    sx={(theme) => ({
                                        fontSize: isMobile ? '24px' : '30px',
                                        fontWeight: 700,
                                        color: theme.colors.teal[7],
                                    })}
                                >
                                    Thank You for Your Generous Contribution!
                                </Title>
                                
                                <Text size={isMobile ? "md" : "lg"} mb="xl" color="dimmed">
                                    Your support helps us make a meaningful impact. We truly appreciate your 
                                    generosity and commitment to our mission.
                                </Text>

                                <Box 
                                    mb="lg"
                                    p="lg"
                                    sx={(theme) => ({
                                        backgroundColor: theme.colors.gray[0],
                                        borderRadius: theme.radius.md,
                                    })}
                                >
                                    <Group spacing="xs" position="center" mb="xs">
                                        <IconHeart size={18} color="#ff6b6b" />
                                        <Text weight={500} color="dark">Thank You Note</Text>
                                    </Group>
                                    <Text size="sm" color="dimmed">
                                        Every donation, no matter the size, brings us one step closer to creating positive change. 
                                        Your contribution today will help us continue our important work. 
                                        We'll keep you updated on the impact your donation is making.
                                    </Text>
                                </Box>

                                <Group position="center" mt="xl" spacing={isMobile ? "sm" : "lg"}>
                                    <Button 
                                        variant="outline" 
                                        size={isMobile ? "md" : "lg"} 
                                        onClick={handleGoHome}
                                    >
                                        Return to Home
                                    </Button>
                                    <Button 
                                        size={isMobile ? "md" : "lg"} 
                                        onClick={handleGoHome}
                                    >
                                        Contribute Again
                                    </Button>
                                </Group>
                            </Paper>
                        ) : !showTransferDetails ? (
                            /* Invoice Paper */
                            <Paper 
                                shadow="xs" 
                                p="xl" 
                                sx={{ 
                                    width: '100%', 
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}
                            >
                                <Group position="apart" mb="md">
                                    <Box>
                                        <Title order={3}>AlaoMeHelp</Title>
                                        <Text size="sm" color="dimmed">Non-profit Organization</Text>
                                    </Box>
                                    <Box>
                                        <Title order={4}>Invoice</Title>
                                        <Text size="sm">{invoiceNumber}</Text>
                                        <Text size="sm">{currentDate}</Text>
                                    </Box>
                                </Group>

                                <Divider my="lg" />

                                <Box mb="xl">
                                    <Title order={4} mb="md">Donation Details</Title>
                                    
                                    <List spacing="xs">
                                        <List.Item>
                                            <Group position="apart">
                                                <Text>Donation Type:</Text>
                                                <Text weight={500}>{formatDonationType(paymentData.donationType)}</Text>
                                            </Group>
                                        </List.Item>
                                        <List.Item>
                                            <Group position="apart">
                                                <Text>Amount:</Text>
                                                <Text weight={700} size="lg">{formatAmount(paymentData.amount)}</Text>
                                            </Group>
                                        </List.Item>
                                    </List>
                                </Box>

                                <Divider my="lg" />

                                <Text size="sm" color="dimmed" mb="md">
                                    Your donation will help us make the world a better place. 
                                    Thank you for your generosity and support.
                                </Text>

                                <Group position="right" mt="xl">
                                    <Button variant="outline" onClick={handleBack}>
                                        Back
                                    </Button>
                                    <Button onClick={handleProceedToPayment} size="lg">
                                        Proceed to Payment
                                    </Button>
                                </Group>
                            </Paper>
                        ) : (
                            /* Transfer Details Card */
                            <Card shadow="sm" p={isMobile ? "md" : "xl"} radius="md" sx={{ maxWidth: '600px', margin: '0 auto' }}>
                                <Title order={3} size={isMobile ? 18 : 20} mb={isMobile ? 16 : 24} weight={600}>
                                    Nigerian Account
                                </Title>
                                <Stack spacing={isMobile ? "md" : "lg"}>
                                    <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                        <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Bank Name</Text>
                                        <Group spacing="xs">
                                            <Text weight={500} size={isMobile ? "sm" : "md"}>First Bank of Nigeria</Text>
                                            <CopyButton value="First Bank of Nigeria" timeout={2000}>
                                                {({ copied, copy }) => (
                                                    <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
                                                        <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                                                            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </Group>
                                    </Group>
                                    <Divider />
                                    <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                        <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Name</Text>
                                        <Group spacing="xs">
                                            <Text weight={500} size={isMobile ? "sm" : "md"}>AlaoMeHelp Foundation</Text>
                                            <CopyButton value="AlaoMeHelp Foundation" timeout={2000}>
                                                {({ copied, copy }) => (
                                                    <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
                                                        <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                                                            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </Group>
                                    </Group>
                                    <Divider />
                                    <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                        <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Number</Text>
                                        <Group spacing="xs">
                                            <Text weight={500} size={isMobile ? "sm" : "md"}>1234567890</Text>
                                            <CopyButton value="1234567890" timeout={2000}>
                                                {({ copied, copy }) => (
                                                    <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
                                                        <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                                                            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </Group>
                                    </Group>
                                    <Divider />
                                    <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                        <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Type</Text>
                                        <Group spacing="xs">
                                            <Text weight={500} size={isMobile ? "sm" : "md"}>Current Account</Text>
                                            <CopyButton value="Current Account" timeout={2000}>
                                                {({ copied, copy }) => (
                                                    <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
                                                        <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                                                            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </Group>
                                    </Group>
                                </Stack>

                                <Text size="sm" mt="xl" mb="md">
                                    <Text weight={500}>Amount: {formatAmount(paymentData.amount)}</Text>
                                    <Text color="dimmed" mt="xs">
                                        Please use invoice number {invoiceNumber} as the payment reference.
                                    </Text>
                                </Text>
                                
                                <Group position="apart" mt="xl">
                                    <Button variant="outline" onClick={handleBack}>
                                        Back
                                    </Button>
                                    <Button onClick={handleComplete} size="lg">
                                        I've Completed the Transfer
                                    </Button>
                                </Group>
                            </Card>
                        )}
                    </Stack>
                </Box>
            </Container>
        </>
    );
};

export default PaymentSummaryPage;
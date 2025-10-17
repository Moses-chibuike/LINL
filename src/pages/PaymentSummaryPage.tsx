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
    Center,
    TextInput,
    Alert,
    Loader
} from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconCheck, IconCopy, IconHeart, IconAlertCircle, IconUpload } from "@tabler/icons-react";

interface LocationState {
    amount: string;
    courseTitle: string;
    courseLevel: string;
    courseFormat: string;
    courseFee: number;
    registrationType: string;
    invoiceType: string;
}

interface FormState {
    submitted: boolean;
    submitting: boolean;
    error: string | null;
}

const PaymentConfirmationForm = ({
    courseTitle,
    amount,
    onSubmitSuccess,
    onBack
}: {
    courseTitle: string;
    amount: string;
    onSubmitSuccess: () => void;
    onBack: () => void;
}) => {
    const [state, setState] = useState<FormState>({
        submitted: false,
        submitting: false,
        error: null
    });

    const isMobile = window.innerWidth < 768;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ submitting: true, submitted: false, error: null });

        try {
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            data.append('courseTitle', courseTitle);
            data.append('amount', amount);
            data.append('_subject', `New Course Registration - ${courseTitle}`);
            data.append('_captcha', 'false');

            const response = await fetch('https://formspree.io/f/mnngwzzj', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitted: true, submitting: false, error: null });
                form.reset();
                setTimeout(() => {
                    onSubmitSuccess();
                }, 2000);
            } else {
                const responseData = await response.json();
                setState({ submitted: false, submitting: false, error: responseData.error || 'Failed to submit form' });
            }
        } catch (error) {
            if (error instanceof Error) {
                setState({ submitted: false, submitting: false, error: error.message });
            } else {
                setState({ submitted: false, submitting: false, error: 'An unknown error occurred' });
            }
        }
    };

    return (
        <Paper
            shadow="xs"
            p="xl"
            sx={{
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto'
            }}
        >
            {state.submitted ? (
                <Box sx={{ textAlign: 'center' }}>
                    <Title order={3} color="teal" mb="md">
                        Form Submitted Successfully!
                    </Title>
                    <Text color="dimmed" mb="xl">
                        Thank you for submitting your payment confirmation. We've received your details and will verify your payment shortly.
                    </Text>
                    <Group position="center" spacing="md">
                        <Button onClick={() => window.location.href = '/'}>
                            Go to Home Page
                        </Button>
                        <Button onClick={() => window.location.href = '/how-it-works'}>
                            View Courses
                        </Button>
                    </Group>
                </Box>
            ) : (
                <>
                    {/* Course Info Summary */}
                    <Box
                        mb="xl"
                        p="lg"
                        sx={(theme) => ({
                            backgroundColor: theme.colors.blue[0],
                            borderRadius: theme.radius.md,
                            borderLeft: `4px solid ${theme.colors.blue[5]}`
                        })}
                    >
                        <Text size="sm" color="dimmed" mb="xs">
                            Course Registration
                        </Text>
                        <Title order={4}>{courseTitle}</Title>
                        <Text weight={500} color="blue" mt="xs">
                            Amount: ₦{parseFloat(amount).toLocaleString()}
                        </Text>
                    </Box>

                    {/* Error Alert */}
                    {state.error && (
                        <Alert
                            icon={<IconAlertCircle size={16} />}
                            title="Error"
                            color="red"
                            mb="lg"
                        >
                            {state.error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Stack spacing="md">
                            {/* Full Name */}
                            <TextInput
                                label="Full Name *"
                                placeholder="Enter your full name"
                                required
                                name="fullName"
                                disabled={state.submitting}
                                onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                            />

                            {/* Phone Number */}
                            <TextInput
                                label="Phone Number *"
                                placeholder="Enter your phone number"
                                required
                                name="phoneNumber"
                                disabled={state.submitting}
                                onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                            />

                            {/* Email */}
                            <TextInput
                                label="Email Address *"
                                placeholder="Enter your email address"
                                type="email"
                                required
                                name="email"
                                disabled={state.submitting}
                                onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                            />

                            {/* Bank */}
                            <TextInput
                                label="Bank *"
                                placeholder="Enter your bank name"
                                required
                                name="bank"
                                disabled={state.submitting}
                                onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                            />

                            {/* Transaction Reference */}
                            <TextInput
                                label="Transaction Reference"
                                placeholder="Enter transaction reference (optional)"
                                name="transactionReference"
                                disabled={state.submitting}
                                onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                            />

                            {/* Session ID */}
                            <TextInput
                                label="Session ID"
                                placeholder="Enter session ID (optional)"
                                name="sessionId"
                                disabled={state.submitting}
                                onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                            />
                        </Stack>

                        {/* Buttons */}
                        <Group position="apart" mt="xl">
                            <Button
                                variant="outline"
                                onClick={onBack}
                                disabled={state.submitting}
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                disabled={state.submitting || state.submitted}
                                loading={state.submitting}
                                color={state.submitted ? 'green' : 'blue'}
                                leftIcon={state.submitted ? <IconCheck size={18} /> : <IconUpload size={18} />}
                            >
                                {state.submitting ? 'Submitting...' : state.submitted ? 'Submitted Successfully' : 'Submit Confirmation'}
                            </Button>
                        </Group>
                    </form>
                </>
            )}
        </Paper>
    );
};

const PaymentSummaryPage = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentData, setPaymentData] = useState<LocationState | null>(null);
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [showTransferDetails, setShowTransferDetails] = useState(false);
    const [showConfirmationForm, setShowConfirmationForm] = useState(false);
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
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(numAmount);
    };

    const isCoursRegistration = paymentData?.registrationType === 'course';
    const invoiceType = paymentData?.invoiceType || (isCoursRegistration ? 'Course Registration' : 'Payment Invoice');

    const handleProceedToPayment = () => {
        setShowTransferDetails(true);
    };

    const handleBack = () => {
        if (showSuccessView) {
            setShowSuccessView(false);
        } else if (showConfirmationForm) {
            setShowConfirmationForm(false);
        } else if (showTransferDetails) {
            setShowTransferDetails(false);
        } else {
            navigate('/how-it-works');
        }
    };

    const handleComplete = () => {
        setShowConfirmationForm(true);
    };

    const handleGoHome = () => {
        navigate('/how-it-works');
    };

    const handleContinue = () => {
        navigate('/how-it-works');
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

                        {showConfirmationForm ? (
                            /* Payment Confirmation Form */
                            <PaymentConfirmationForm
                                courseTitle={paymentData.courseTitle}
                                amount={paymentData.amount}
                                onSubmitSuccess={() => setShowSuccessView(true)}
                                onBack={handleBack}
                            />
                        ) : showSuccessView ? (
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
                                    {isCoursRegistration 
                                        ? 'Thank You for Your Course Registration!' 
                                        : 'Thank You for Your Generous Contribution!'}
                                </Title>
                                
                                <Text size={isMobile ? "md" : "lg"} mb="xl" color="dimmed">
                                    {isCoursRegistration
                                        ? 'Your registration has been confirmed. We\'re excited to have you join our language course program.'
                                        : 'Your support helps us make a meaningful impact. We truly appreciate your generosity and commitment to our mission.'}
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
                                        <Text weight={500} color="dark">
                                            {isCoursRegistration ? 'Registration Confirmation' : 'Thank You Note'}
                                        </Text>
                                    </Group>
                                    <Text size="sm" color="dimmed">
                                        {isCoursRegistration
                                            ? `You are registered for ${paymentData.courseTitle}. Check your email for course details, start date, and access instructions. If you have any questions, feel free to contact us.`
                                            : 'Every donation, no matter the size, brings us one step closer to creating positive change. Your contribution today will help us continue our important work. We\'ll keep you updated on the impact your donation is making.'}
                                    </Text>
                                </Box>

                                <Group position="center" mt="xl" spacing={isMobile ? "sm" : "lg"}>
                                    <Button 
                                        variant="outline" 
                                        size={isMobile ? "md" : "lg"} 
                                        onClick={handleGoHome}
                                    >
                                        {isCoursRegistration ? 'View All Courses' : 'Return Home'}
                                    </Button>
                                    <Button 
                                        size={isMobile ? "md" : "lg"} 
                                        onClick={handleContinue}
                                    >
                                        {isCoursRegistration ? 'Register Another' : 'Contribute Again'}
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
                                        <Text size="sm" color="dimmed">
                                            {isCoursRegistration ? 'Language Education' : 'Non-profit Organization'}
                                        </Text>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Title order={4}>{invoiceType}</Title>
                                        <Text size="sm">{invoiceNumber}</Text>
                                        <Text size="sm">{currentDate}</Text>
                                    </Box>
                                </Group>

                                <Divider my="lg" />

                                <Box mb="xl">
                                    <Title order={4} mb="md">
                                        {isCoursRegistration ? 'Course Registration Details' : 'Donation Details'}
                                    </Title>
                                    
                                    <List spacing="xs">
                                        <>
                                            <List.Item>
                                                <Group position="apart">
                                                    <Text>Course:</Text>
                                                    <Text weight={500}>{paymentData.courseTitle}</Text>
                                                </Group>
                                            </List.Item>
                                            <List.Item>
                                                <Group position="apart">
                                                    <Text>Level:</Text>
                                                    <Text weight={500}>{paymentData.courseLevel}</Text>
                                                </Group>
                                            </List.Item>
                                            <List.Item>
                                                <Group position="apart">
                                                    <Text>Format:</Text>
                                                    <Text weight={500}>{paymentData.courseFormat}</Text>
                                                </Group>
                                            </List.Item>
                                            <List.Item>
                                                <Group position="apart">
                                                    <Text>Registration Fee:</Text>
                                                    <Text weight={700} size="lg">{formatAmount(paymentData.amount)}</Text>
                                                </Group>
                                            </List.Item>
                                        </>
                                    </List>
                                </Box>

                                <Divider my="lg" />

                                <Text size="sm" color="dimmed" mb="md">
                                    {isCoursRegistration
                                        ? 'Your course registration will help you achieve your learning goals. Thank you for choosing us.'
                                        : 'Your donation will help us make the world a better place. Thank you for your generosity and support.'}
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
                                    Nigerian Bank Account
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
                                    <Text weight={500}>
                                        Registration Fee: {formatAmount(paymentData.amount)}
                                    </Text>
                                    <Text color="dimmed" mt="xs">
                                        Please use invoice number <strong>{invoiceNumber}</strong> as the payment reference.
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
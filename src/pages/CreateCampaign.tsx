import { Helmet } from "react-helmet";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PaperProps,
    Stack,
    TextInput,
    Textarea,
    Title,
    TitleProps,
    useMantineTheme,
} from "@mantine/core";
import React, { useState, FormEvent } from 'react';
import {
    IconChevronRight,
    IconCheck,
} from "@tabler/icons-react";

interface FormState {
    submitted: boolean;
    submitting: boolean;
    error: string | null;
}

const CreateCampaignPage = () => {
    const theme = useMantineTheme();
    const [state, setState] = useState<FormState>({
        submitted: false,
        submitting: false,
        error: null
    });

    const titleProps: TitleProps = {
        size: 24,
        mb: "md"
    }

    const paperProps: PaperProps = {
        p: "md",
        withBorder: false,
        shadow: 'sm',
        mb: "md",
        sx: { backgroundColor: theme.white }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ submitting: true, submitted: false, error: null });
        
        try {
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const response = await fetch('https://formspree.io/f/xgvvpzvk', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                setState({ submitted: true, submitting: false, error: null });
                form.reset();
            } else {
                const data = await response.json();
                setState({ submitted: false, submitting: false, error: data.error });
            }
        } catch (error) {
            if (error instanceof Error) {
                setState({ submitted: false, submitting: false, error: error.message });
            } else {
                setState({ submitted: false, submitting: false, error: 'An unknown error occurred' });
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Box>
                <Container my={36}>
                    <Title mb="xl" align="center">Contact Us</Title>
                    
                    <form onSubmit={handleSubmit} action="https://formspree.io/f/xgvvpzvk" method="POST">
                        <Paper {...paperProps}>
                            <Stack spacing="lg">
                                <TextInput
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    required
                                    name="name"
                                    onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                                />
                                
                                <TextInput
                                    label="Email"
                                    placeholder="your.email@example.com"
                                    required
                                    type="email"
                                    name="email"
                                    onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                                />
                                
                                <TextInput
                                    label="Subject"
                                    placeholder="How can we help you?"
                                    required
                                    name="subject"
                                    onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                                />
                                
                                <Textarea
                                    label="Message"
                                    placeholder="Type your message here..."
                                    minRows={4}
                                    required
                                    name="message"
                                    onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                                />
                            </Stack>
                        </Paper>

                        <Paper {...paperProps}>
                            <Stack spacing="sm">
                                <Checkbox
                                    label="I agree to be contacted about my inquiry"
                                    name="agree"
                                    onChange={() => state.submitted && setState(s => ({...s, submitted: false}))}
                                />
                            </Stack>
                        </Paper>

                        <Group position="center" mt="xl">
                            <Button 
                                type="submit"
                                leftIcon={state.submitted ? <IconCheck size={18}/> : <IconChevronRight size={18}/>}
                                loading={state.submitting}
                                disabled={state.submitting || state.submitted}
                                color={state.submitted ? 'green' : 'blue'}
                            >
                                {state.submitting ? 'Sending...' : state.submitted ? 'Sent Successfully' : 'Send Message'}
                            </Button>
                        </Group>
                    </form>
                </Container>
            </Box>
        </>
    );
};

export default CreateCampaignPage;
import React, { useState } from 'react';
import { Box, Button, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import CreateCVForm from './sections/CreateCVForm';
import JobDisplay from './sections/JobDisplay';
import { Job } from './sections/JobDisplay'; // Ensure the Job type is imported

const App: React.FC = () => {
    const [cvCreated, setCvCreated] = useState<boolean>(false);
    const [jobs, setJobs] = useState<Job[]>([]); // Store job data as Job[]

    // Handle CV creation (sending FormData to the backend)
    const handleCvCreate = async (cvData: FormData) => {
        const response = await fetch('http://127.0.0.1:8000/api/cv/', {
            method: 'POST',
            body: cvData,
        });
        if (response.ok) {
            setCvCreated(true);
        }
    };

    // Fetch ranked jobs from the backend
    const handleFindJobs = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/cv/rank-jobs/', {
            method: 'GET',
        });
        const data = await response.json();
        setJobs(data.ranked_jobs || []); // Update jobs with ranked jobs from API response
    };

    // Colors
    const bg = useColorModeValue('gray.50', 'gray.800');
    const containerBg = useColorModeValue('white', 'gray.700');
    const btnBg = useColorModeValue('blue.500', 'blue.300');
    const btnHover = useColorModeValue('blue.600', 'blue.400');

    return (
        <Box
            minH="100vh"
            bg={bg}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={5}
        >
            <Box
                bg={containerBg}
                p={8}
                borderRadius="md"
                boxShadow="lg"
                width={{ base: '100%', sm: '500px', lg: "800px" }}
                textAlign="center"
            >
                <Heading as="h1" size="xl" mb={6}>
                    Job Finder
                </Heading>
                <Text mb={0} color="gray.500">
                    Upload your CV to find jobs tailored to your skills.
                </Text>
                <VStack spacing={6}>
                    {/* Show CreateCVForm if CV is not created */}
                    {!cvCreated ? (
                        <CreateCVForm onCreateCV={handleCvCreate} />
                    ) : (
                        // Show Find Jobs button if CV is created
                        <Button
                            onClick={handleFindJobs}
                            bg={btnBg}
                            color="white"
                            _hover={{ bg: btnHover }}
                            size="lg"
                        >
                            Find Jobs
                        </Button>
                    )}
                    {/* Display job listings if jobs are available */}
                    {jobs.length > 0 && <JobDisplay jobs={jobs} />}
                </VStack>
            </Box>
        </Box>
    );
};

export default App;

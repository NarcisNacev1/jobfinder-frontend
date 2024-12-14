import React from 'react';
import { Box, Text, VStack, Heading, Badge } from '@chakra-ui/react';

// Define the Job interface for the job object
export interface Job {
    job_position: string;
    company_name: string;
    score: number;
    job_description: string;
}

// Define the props interface for the JobDisplay component
interface JobDisplayProps {
    jobs: Job[];
}

// Define the JobDisplay component
const JobDisplay: React.FC<JobDisplayProps> = ({ jobs }) => {
    return (
        <VStack spacing={6} mt={8} width="100%">
            <Heading as="h2" size="lg" textAlign="center" color="teal.500">
                Job Recommendations
            </Heading>
            {jobs.map((job, index) => (
                <Box
                    key={index}
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    bg="white"
                    shadow="lg"
                    width="100%"
                    maxW={{ base: '100%', md: '700px', lg: '800px' }}
                    textAlign="left"
                >
                    <Heading as="h3" size="md" color="gray.700" mb={2}>
                        {job.job_position} <Text as="span" color="gray.500">at {job.company_name}</Text>
                    </Heading>
                    <Badge colorScheme="green" mb={3} fontSize="0.9em">
                        Match: {job.score}%
                    </Badge>
                    <Text color="gray.600">
                        {job.job_description.length > 200
                            ? `${job.job_description.slice(0, 200)}...`
                            : job.job_description}
                    </Text>
                </Box>
            ))}
        </VStack>
    );
};

export default JobDisplay;

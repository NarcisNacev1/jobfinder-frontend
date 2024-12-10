import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

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
        <VStack mt={5}> {/* VStack accepts spacing and mt as valid props */}
            {jobs.map((job, index) => (
                <Box
                    key={index}
                    p={5}
                    shadow="md"
                    borderWidth="1px"
                    width="full"
                    borderRadius="md"
                >
                    <Text fontSize="xl" fontWeight="bold">
                        {job.job_position} at {job.company_name}
                    </Text>
                    <Text>Match: {job.score}%</Text>
                    <Text>{job.job_description}</Text>
                </Box>
            ))}
        </VStack>
    );
};

export default JobDisplay;

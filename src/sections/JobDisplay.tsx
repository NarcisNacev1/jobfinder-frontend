import React from 'react';
import { Box, Text, VStack, Heading, Badge, Button } from '@chakra-ui/react';

import '../fonts.css';

export interface Job {
    job_position: string;
    company_name: string;
    score: number;
    job_description: string;
    apply_link?: string;
}

interface JobDisplayProps {
    jobs: Job[];
}

const JobDisplay: React.FC<JobDisplayProps> = ({ jobs }) => {
    return (
        <VStack spacing={6} mt={8} width="100%" maxW="800px" mx="auto" fontFamily="'Roboto', sans-serif">
            <Heading as="h2" size="lg" textAlign="center" color="teal.500" fontFamily="'Orbitron', sans-serif">
                Job Recommendations
            </Heading>
            <Box
                maxH="600px"
                overflowY="auto"
                width="100%"
                p={2}
                borderRadius="lg"
                borderWidth="1px"
                bg="gray.50"
                boxShadow="md"
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'gray.200',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'teal.500',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: 'teal.600',
                    }
                }}
            >
            {jobs.map((job, index) => (
                    <Box
                        key={index}
                        p={6}
                        borderWidth="1px"
                        borderRadius="lg"
                        bg="white"
                        shadow="lg"
                        width="100%"
                        mb={4}
                    >
                        <Heading as="h3" size="md" color="gray.700" mb={2}>
                            {job.job_position} <Text as="span" color="gray.500">at {job.company_name}</Text>
                        </Heading>
                        <Badge colorScheme="green" mb={3} fontSize="0.9em">
                            Match: {job.score}%
                        </Badge>
                        <Text color="gray.600" mb={3}>
                            {job.job_description.length > 200
                                ? `${job.job_description.slice(0, 200)}...`
                                : job.job_description}
                        </Text>
                        <Button
                            as="a"
                            href={job.apply_link && job.apply_link !== "Not Available" ? job.apply_link : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            colorScheme={job.apply_link && job.apply_link !== "Not Available" ? 'blue' : 'gray'}
                            isDisabled={!job.apply_link || job.apply_link === "Not Available"}
                        >
                            {job.apply_link && job.apply_link !== "Not Available" ? 'Apply Now' : 'No Application Link'}
                        </Button>
                    </Box>
                ))}
            </Box>
        </VStack>
    );
};

export default JobDisplay;

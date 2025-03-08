import React, { useState } from 'react';
import { Box, Text, VStack, Heading, Badge, Button, Flex, Switch, FormControl, FormLabel } from '@chakra-ui/react';
import '../fonts.css';

export interface Job {
    job_position: string;
    company_name: string;
    score: number;
    job_description: string;
    apply_link?: string;
    job_id: number;
}

export interface AIRecommendation {
    methodAssessment: {
        betterMethod: string;
        justification: string;
    };
    adjustedMatchScores: {
        [key: string]: {
            jobTitle: string;
            adjustedScore: number;
        };
    };
    bestMatch: {
        jobTitle: string;
        justification: {
            skillsAlignment: string;
            experienceRelevance: string;
            careerGrowthPotential: string;
        };
    };
}

interface JobDisplayProps {
    method_a_jobs: Job[];
    method_b_jobs: Job[];
    ai_recommendation: AIRecommendation;
}

const JobDisplay: React.FC<JobDisplayProps> = ({ method_a_jobs, method_b_jobs, ai_recommendation }) => {
    const [showAIRecommendations, setShowAIRecommendations] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<'A' | 'B'>('A');

    // Filter out jobs with a score of 0
    const filteredMethodAJobs = method_a_jobs.filter(job => job.score > 0);
    const filteredMethodBJobs = method_b_jobs.filter(job => job.score > 0);

    // Get the jobs for the selected method
    const jobs = selectedMethod === 'A' ? filteredMethodAJobs : filteredMethodBJobs;

    return (
        <VStack spacing={6} mt={8} width="100%" maxW="800px" mx="auto" fontFamily="'Roboto', sans-serif">
            <Heading as="h2" size="lg" textAlign="center" color="teal.500" fontFamily="'Orbitron', sans-serif">
                {showAIRecommendations ? "AI Recommendations" : "Job Recommendations"}
            </Heading>

            <Flex width="100%" justifyContent="space-between" mb={2}>
                <Flex>
                    <Button
                        onClick={() => setSelectedMethod('A')}
                        colorScheme={selectedMethod === 'A' ? 'teal' : 'gray'}
                        size="sm"
                        mr={2}
                    >
                        Method A
                    </Button>
                    <Button
                        onClick={() => setSelectedMethod('B')}
                        colorScheme={selectedMethod === 'B' ? 'teal' : 'gray'}
                        size="sm"
                    >
                        Method B
                    </Button>
                </Flex>

                <FormControl display="flex" alignItems="center" width="auto">
                    <FormLabel htmlFor="ai-toggle" mb="0" mr={2} fontSize="sm" color={showAIRecommendations ? "teal.600" : "gray.600"}>
                        {showAIRecommendations ? "AI Insights" : "Job Listings"}
                    </FormLabel>
                    <Switch
                        id="ai-toggle"
                        colorScheme="teal"
                        isChecked={showAIRecommendations}
                        onChange={() => setShowAIRecommendations(!showAIRecommendations)}
                        size="md"
                    />
                </FormControl>
            </Flex>

            {!showAIRecommendations ? (
                <Box
                    maxH="500px"
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
                                Match: {Math.round(job.score)}%
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
            ) : (
                <Box
                    width="100%"
                    maxH="500px"
                    overflowY="auto"
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    bg="white"
                    shadow="lg"
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
                    <VStack spacing={6} align="stretch">
                        <Box>
                            <Heading as="h3" size="md" color="teal.600" mb={4} fontFamily="'Orbitron', sans-serif">
                                Career Insights
                            </Heading>
                            <Text
                                color="gray.700"
                                whiteSpace="pre-wrap"
                                lineHeight="1.8"
                                fontSize="md"
                                letterSpacing="0.1px"
                            >
                                <Text fontWeight="bold">Method Assessment:</Text>
                                {ai_recommendation.methodAssessment.justification}
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h3" size="md" color="teal.600" mb={4} fontFamily="'Orbitron', sans-serif">
                                Best Match
                            </Heading>
                            <Text
                                color="gray.700"
                                whiteSpace="pre-wrap"
                                lineHeight="1.8"
                                fontSize="md"
                                letterSpacing="0.1px"
                            >
                                <Text fontWeight="bold">{ai_recommendation.bestMatch.jobTitle}</Text>
                                <Text><strong>Skills Alignment:</strong> {ai_recommendation.bestMatch.justification.skillsAlignment}</Text>
                                <Text><strong>Experience Relevance:</strong> {ai_recommendation.bestMatch.justification.experienceRelevance}</Text>
                                <Text><strong>Career Growth Potential:</strong> {ai_recommendation.bestMatch.justification.careerGrowthPotential}</Text>
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h3" size="md" color="teal.600" mb={4} fontFamily="'Orbitron', sans-serif">
                                Adjusted Match Scores
                            </Heading>
                            <VStack align="stretch" spacing={3}>
                                {Object.entries(ai_recommendation.adjustedMatchScores).map(([key, value]) => (
                                    <Flex
                                        key={key}
                                        bg="gray.50"
                                        p={3}
                                        borderRadius="md"
                                        justify="space-between"
                                        align="center"
                                    >
                                        <Box>
                                            <Text fontWeight="medium">{value.jobTitle}</Text>
                                        </Box>
                                        <Badge colorScheme="green">{value.adjustedScore}%</Badge>
                                    </Flex>
                                ))}
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            )}
        </VStack>
    );
};

export default JobDisplay;
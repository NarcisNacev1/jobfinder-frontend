import React, { useState } from 'react';
import { Box, Button, Heading, VStack, useColorModeValue } from '@chakra-ui/react';
import CreateCVForm from './sections/CreateCVForm';
import JobDisplay from './sections/JobDisplay';
import { Job } from './sections/JobDisplay';

import './fonts.css';

const App: React.FC = () => {
    const [cvCreated, setCvCreated] = useState<boolean>(false);
    const [jobs, setJobs] = useState<Job[]>([]);

    const handleCvCreate = async (cvData: FormData) => {
        const response = await fetch('http://127.0.0.1:8000/api/cv/', {
            method: 'POST',
            body: cvData,
        });
        if (response.ok) {
            setCvCreated(true);
        }
    };

    const handleFindJobs = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/cv/rank-jobs/', {
            method: 'GET',
        });
        const data = await response.json();
        setJobs(data.ranked_jobs || []);
    };

    const containerBg = useColorModeValue('#1A202C', '#2D3748');
    const btnBg = useColorModeValue('#FF6A00', '#FF6A00');
    const btnHover = useColorModeValue('#FF4500', '#FF4500');

    return (
        <Box
            minH="50vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={5}
            fontFamily="'Roboto', sans-serif"
        >
            <video
                src="/videos/background.mp4"
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
            <Box
                bg={containerBg}
                p={8}
                borderRadius="lg"
                boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.1)"
                width={{base: '90%', sm: '400px', lg: "600px"}}
                height={'55rem'}
                textAlign="center"
                position="relative"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    background: 'linear-gradient(45deg, #FF6A00, #FF4500)',
                    borderRadius: 'lg',
                    zIndex: -1,
                    opacity: 0.3,
                    transition: '0.3s',
                }}
                _hover={{
                    _before: {
                        opacity: 0.4,
                    }
                }}
            >
                <Heading
                    as="h1"
                    size="xl"
                    mb={6}
                    fontFamily="'Orbitron', sans-serif"
                    bgGradient="linear(to-r, #FF6A00, #FF4500)"
                    bgClip="text"
                    letterSpacing="wider"
                    fontWeight="bold"
                    fontSize="4xl"
                    textTransform="uppercase"
                    _hover={{
                        transform: 'translateY(-2px)',
                        textShadow: '0 0 20px rgba(255,106,0,0.3)'
                    }}
                    transition="all 0.3s ease"
                >
                    Job Finder
                </Heading>
                <VStack spacing={6}>
                    {!cvCreated ? (
                        <CreateCVForm onCreateCV={handleCvCreate}/>
                    ) : (
                        <Button
                            onClick={handleFindJobs}
                            bg={btnBg}
                            color="white"
                            _hover={{
                                bg: btnHover,
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(255,106,0,0.3)'
                            }}
                            size="lg"
                            boxShadow="md"
                            transition="all 0.3s ease"
                        >
                            Find Jobs
                        </Button>
                    )}
                    {jobs.length > 0 && <JobDisplay jobs={jobs}/>}
                </VStack>
            </Box>
        </Box>
    );
};

export default App;
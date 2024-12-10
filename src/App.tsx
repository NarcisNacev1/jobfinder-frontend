import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
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

    return (
        <>
            <Box p={5}>
                <Heading mb={5}>Job Finder</Heading>
                {/* Show CreateCVForm if CV is not created */}
                {!cvCreated ? (
                    <CreateCVForm onCreateCV={handleCvCreate} />
                ) : (
                    // Show Find Jobs button if CV is created
                    <Button onClick={handleFindJobs}>Find Jobs</Button>
                )}
                {/* Display job listings if jobs are available */}
                {jobs.length > 0 && <JobDisplay jobs={jobs} />}
            </Box>
        </>
    );
};

export default App;

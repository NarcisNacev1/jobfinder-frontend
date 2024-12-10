import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

interface CreateCVFormProps {
    onCreateCV: (cvData: FormData) => void;
}

const CreateCVForm: React.FC<CreateCVFormProps> = ({ onCreateCV }) => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [cvFile, setCvFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cvFile) {
            const formData = new FormData();
            formData.append('full_name', fullName);
            formData.append('email', email);
            formData.append('phone_number', phoneNumber);
            formData.append('location', location);
            formData.append('cv_file', cvFile);

            onCreateCV(formData);
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => handleInputChange(e, setFullName)}
                mb={3}
            />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                mb={3}
            />
            <Input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e, setPhoneNumber)}
                mb={3}
            />
            <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => handleInputChange(e, setLocation)}
                mb={3}
            />
            <Input
                type="file"
                onChange={handleFileChange}
                mb={3}
            />
            <Button type="submit">Create CV</Button>
        </Box>
    );
};

export default CreateCVForm;

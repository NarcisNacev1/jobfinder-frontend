import React, { useState } from 'react';
import {
    Box,
    Input,
    Button,
    VStack,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

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

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
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

    // Colors
    const bg = useColorModeValue('gray.50', 'gray.800');
    const formBg = useColorModeValue('white', 'gray.700');
    const btnBg = useColorModeValue('blue.500', 'blue.300');
    const btnHover = useColorModeValue('blue.600', 'blue.400');

    return (
        <Box
            bg={bg}
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={6}
        >
            <Box
                as="form"
                onSubmit={handleSubmit}
                bg={formBg}
                p={8}
                borderRadius="md"
                boxShadow="lg"
                width={{ base: '100%', sm: '400px' }}
                textAlign="center"
            >
                <Heading as="h2" size="lg" mb={4}>
                    Create Your CV
                </Heading>
                <Text mb={6} color="gray.500">
                    Fill in your details and upload your CV.
                </Text>
                <VStack spacing={4}>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => handleInputChange(e, setFullName)}
                        focusBorderColor="blue.400"
                        size="lg"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        focusBorderColor="blue.400"
                        size="lg"
                    />
                    <Input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => handleInputChange(e, setPhoneNumber)}
                        focusBorderColor="blue.400"
                        size="lg"
                    />
                    <Input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => handleInputChange(e, setLocation)}
                        focusBorderColor="blue.400"
                        size="lg"
                    />
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        focusBorderColor="blue.400"
                        size="lg"
                        sx={{
                            '::file-selector-button': {
                                background: btnBg,
                                color: 'white',
                                borderRadius: 'md',
                                padding: '0.5rem 1rem',
                                cursor: 'pointer',
                                _hover: {
                                    background: btnHover,
                                },
                            },
                        }}
                    />
                </VStack>
                <Button
                    type="submit"
                    bg={btnBg}
                    color="white"
                    mt={6}
                    width="100%"
                    size="lg"
                    _hover={{
                        bg: btnHover,
                    }}
                >
                    Create CV
                </Button>
            </Box>
        </Box>
    );
};

export default CreateCVForm;

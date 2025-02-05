import React, { useState } from 'react';
import {
    Box,
    Input,
    Button,
    VStack,
    Heading,
    Text,
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

    const bg = 'gray.900';
    const formBg = 'gray.800';
    const inputBg = 'gray.700';
    const btnGradient = 'linear(to-r, #FF6B6B, #845EC2)';
    const highlightColor = '#FF6B6B';

    return (
        <Box
            bg={bg}
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={6}
            minH="80vh"
            width={"60vh"}
        >
            <Box
                as="form"
                onSubmit={handleSubmit}
                bg={formBg}
                p={8}
                borderRadius="xl"
                boxShadow="dark-lg"
                width={{ base: '100%', sm: '450px' }}
                textAlign="center"
                position="relative"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    bgGradient: btnGradient,
                    borderRadius: 'xl',
                    zIndex: -1,
                    opacity: 0.3,
                    transition: '0.3s ease',
                }}
                _hover={{
                    _before: {
                        opacity: 0.5,
                    },
                }}
                transition="all 0.3s ease"
            >
                <Heading
                    as="h2"
                    size="lg"
                    mb={4}
                    bgGradient={btnGradient}
                    bgClip="text"
                >
                    Create Your CV
                </Heading>
                <Text mb={6} color="gray.400">
                    Fill in your details and upload your CV.
                </Text>
                <VStack spacing={4}>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => handleInputChange(e, setFullName)}
                        bg={inputBg}
                        border="none"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _hover={{
                            bg: 'gray.600',
                            transform: 'translateY(-2px)',
                        }}
                        _focus={{
                            bg: 'gray.600',
                            boxShadow: `0 0 0 1px ${highlightColor}`,
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        bg={inputBg}
                        border="none"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _hover={{
                            bg: 'gray.600',
                            transform: 'translateY(-2px)',
                        }}
                        _focus={{
                            bg: 'gray.600',
                            boxShadow: `0 0 0 1px ${highlightColor}`,
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    />
                    <Input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => handleInputChange(e, setPhoneNumber)}
                        bg={inputBg}
                        border="none"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _hover={{
                            bg: 'gray.600',
                            transform: 'translateY(-2px)',
                        }}
                        _focus={{
                            bg: 'gray.600',
                            boxShadow: `0 0 0 1px ${highlightColor}`,
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    />
                    <Input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => handleInputChange(e, setLocation)}
                        bg={inputBg}
                        border="none"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _hover={{
                            bg: 'gray.600',
                            transform: 'translateY(-2px)',
                        }}
                        _focus={{
                            bg: 'gray.600',
                            boxShadow: `0 0 0 1px ${highlightColor}`,
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    />
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        bg={inputBg}
                        border="none"
                        color="white"
                        size="lg"
                        sx={{
                            '::file-selector-button': {
                                bgGradient: btnGradient,
                                border: 'none',
                                color: 'white',
                                borderRadius: 'md',
                                padding: '0.5rem 1rem',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                _hover: {
                                    transform: 'translateY(-2px)',
                                },
                            },
                        }}
                    />
                </VStack>
                <Button
                    type="submit"
                    bgGradient={btnGradient}
                    color="white"
                    mt={6}
                    width="100%"
                    size="lg"
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        opacity: 0.9,
                    }}
                    _active={{
                        transform: 'translateY(0)',
                    }}
                    transition="all 0.3s ease"
                >
                    Create CV
                </Button>
            </Box>
        </Box>
    );
};

export default CreateCVForm;
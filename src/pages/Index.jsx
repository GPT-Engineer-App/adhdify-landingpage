import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaBrain, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={10}>
        <VStack align="start" spacing={5}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            ADHDify Consulting
          </Heading>
          <Text fontSize="xl">Empowering your unique mind with tailored strategies and support.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
        <Image
          src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb2N1c2VkJTIwcGVyc29uJTIwd29ya2luZ3xlbnwwfHx8fDE3MTQwNzAyNzN8MA&ixlib=rb-4.0.3&q=80&w=1080"
          borderRadius="full"
          boxSize="300px"
          objectFit="cover"
          alt="Focused work"
        />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Personalized Coaching</Heading>
          <Text mt={4}>Customized coaching sessions to explore and enhance your cognitive strengths.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Workshops & Seminars</Heading>
          <Text mt={4}>Interactive workshops designed to educate and engage on ADHD management strategies.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Community Support</Heading>
          <Text mt={4}>Join a thriving community that supports and uplifts each other through shared experiences.</Text>
        </Box>
      </SimpleGrid>

      <Flex align="center" justify="center" direction="column" py={10}>
        <Heading as="h2" size="lg">
          Contact Us
        </Heading>
        <Flex mt={4} align="center">
          <FaPhone />
          <Text ml={2}>+123 456 7890</Text>
        </Flex>
        <Flex mt={2} align="center">
          <FaEnvelope />
          <Text ml={2}>info@adhdify.com</Text>
        </Flex>
      </Flex>

      <Flex align="center" justify="center" py={10}>
        <Button leftIcon={<FaBrain />} colorScheme="orange" variant="solid">
          Discover More
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;

import React, { FC } from "react";
import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { LINKS } from "@/utils/links";
import Link from "next/link";

const testimonials = [
  {
    name: 'Max Voltage',
    role: 'Crypto Enthusiast',
    content:
      "Buying POWER was a game changer! ⚡ My portfolio is now supercharged and every transaction feels instant and secure. Highly recommend for anyone wanting to energize their assets!",
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Sparky Jane',
    role: 'Digital Investor',
    content:
      "POWER is the future! 🚀 Seamless experience, lightning-fast trades, and the community is absolutely electric. I feel unstoppable every time I buy POWER.",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Bolt King',
    role: 'Tech Visionary',
    content:
      "The security and reliability of POWER exchange blew me away. 🔒 My coins are safe, and the interface is sleek and modern. This is how crypto should feel!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Electra Nova',
    role: 'Early Adopter',
    content:
      "POWER lets me trade with confidence and style. 💸 The energy here is unmatched—join the revolution and power up your future!",
    avatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?auto=format&fit=crop&w=334&q=80',
  },
]

const backgrounds = [
  `linear-gradient(135deg, #FFFDE4 0%, #005AA7 100%)`,
  `linear-gradient(135deg, #FCEABB 0%, #F8B500 100%)`,
  `linear-gradient(135deg, #43C6AC 0%, #F8FFAE 100%)`,
  `linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)`,
]

function TestimonialCard({ name, role, content, avatar, index }: any) {
  return (
    <Flex
      boxShadow={'2xl'}
      maxW={'400px'}
      direction={'column'}
      width={'full'}
      rounded={'2xl'}
      p={8}
      align="center"
      position={'relative'}
      bg={useColorModeValue('white', 'gray.900')}
      border="2px solid"
      borderColor={useColorModeValue('yellow.200', 'yellow.600')}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        width: 'full',
        filter: 'blur(32px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        background: backgrounds[index % backgrounds.length],
      }}>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        mb={4}
        border="3px solid"
        borderColor="yellow.400"
      />
      <chakra.p fontFamily={'Inter'} fontWeight={'medium'} fontSize={'16px'} pb={4} color="gray.700">
        {content}
      </chakra.p>
      <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={16} color="yellow.600">
        {name}
        <chakra.span fontFamily={'Inter'} fontWeight={'medium'} color={'gray.500'}>
          {' '} - {role}
        </chakra.span>
      </chakra.p>
    </Flex>
  )
}

interface TestimonialsProps {}
const Testimonials: FC<TestimonialsProps> = (props) => {
  const {} = props;
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}
      bg={useColorModeValue('yellow.50', 'gray.900')}
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h1
          py={5}
          fontSize={44}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('yellow.600', 'yellow.300')}>
          Trusted by POWER Users
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'80%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={20}
        >
          See how <chakra.strong color={useColorModeValue('yellow.600', 'yellow.300')}>POWER</chakra.strong> is energizing lives and transforming crypto portfolios!
        </chakra.h2>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={10} mt={12} mb={12} mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box>
        <chakra.h1
          py={5}
          fontSize={40}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('yellow.500', 'yellow.300')}>
          Ready to Power Up?
        </chakra.h1>
        <Link href={LINKS.cw20Token("AURA-Exchange")}>
            <Button
                colorScheme={'yellow'}
                bg={'yellow.400'}
                color="black"
                px={8}
                py={6}
                fontSize="xl"
                fontWeight={700}
                borderRadius="full"
                boxShadow="0 4px 24px rgba(255, 215, 0, 0.2)"
                _hover={{
                  bg: 'yellow.500',
                  boxShadow: "0 6px 32px rgba(255, 215, 0, 0.3)",
                }}>
                Buy POWER Now
            </Button>
        </Link>
      </Box>
    </Flex>
  );
};
export default Testimonials;
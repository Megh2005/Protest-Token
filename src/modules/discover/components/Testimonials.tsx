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
    name: 'DJ Moonbeam',
    role: 'Party Pioneer',
    content:
      "VIBE is the ultimate party on the blockchain! 🎉 Every trade feels like dancing to the moon. This token brings pure chaos and good vibes to my portfolio!",
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Groove Master',
    role: 'Vibe Collector',
    content:
      "VIBE is pure viral potential! 🕺 Non-stop fun trading with a community that lives for the moment. I'm riding this wave all the way to the moon!",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Cosmic Dancer',
    role: 'Blockchain Partier',
    content:
      "The VIBE community is insane! 🌙 Pure madness, good energy, and everyone's invited to this moon-bound party. Digital shades on, let's ride!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Neon Vibes',
    role: 'Trend Rider',
    content:
      "VIBE broke the internet and my expectations! 🚀 No charts, no stress, just pure fun and viral potential. This is the future of meme coins!",
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
          Trusted by VIBE Party People
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'80%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={20}
        >
          See how <chakra.strong color={useColorModeValue('yellow.600', 'yellow.300')}>VIBE</chakra.strong> is bringing pure chaos and good vibes to the blockchain!
        </chakra.h2>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={10} mt={12} mb={12} mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
export default Testimonials;
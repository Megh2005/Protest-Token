import { useAppUtils } from "@/lib/app/hooks";
import Head from 'next/head'
import React, { FC, useMemo } from "react";
import { LINKS } from "@/utils/links";
import Link from "next/link";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  chakra,
} from '@chakra-ui/react'

interface HeroSectionProps { }
const HeroSection: FC<HeroSectionProps> = (props) => {
  const { } = props;
  return (
    <Container maxW={'6xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={700}
          fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
          lineHeight={'110%'}
          color="blue.600"
          letterSpacing="wide"
          mb={4}
        >
          Unleash Your <chakra.span textDecoration="underline" color="yellow.400">VIBE</chakra.span> <br />
          <Text fontSize="5xl" fontWeight={500} as={'span'} color={'blue.400'}>
            The Ultimate Party on the Blockchain 🎉
          </Text>
        </Heading>
        <Text color={'gray.600'} fontSize="xl" px={{ base: 2, md: 20 }}>
          🚀 Buy <chakra.span color="yellow.400" fontWeight={700}>VIBE</chakra.span> and join the ultimate party on the blockchain!
          <br />
          Dance, pump, and laugh all the way to the moon with pure chaos and good vibes.
          <br />
          <chakra.span color="blue.500" fontWeight={600}>VIBE</chakra.span> is pure viral potential packed into a token—grab your digital shades and ride the wave!
        </Text>
        <Stack
          direction={'column'}
          spacing={5}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <Link href={LINKS.cw20Token("embeddables-exchange-1")}>
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
              Buy VIBE Now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};
export default HeroSection;
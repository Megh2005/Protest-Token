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

interface HeroSectionProps {}
const HeroSection: FC<HeroSectionProps> = (props) => {
  const {} = props;
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
                  Unleash Your <chakra.span textDecoration="underline" color="yellow.400">POWER</chakra.span> <br />
                  <Text fontSize="5xl" fontWeight={500} as={'span'} color={'blue.400'}>
                  —The Ultimate Coin Exchange Experience ⚡
                  </Text>
                </Heading>
                <Text color={'gray.600'} fontSize="xl" px={{ base: 2, md: 20 }}>
                  🚀 Buy <chakra.span color="yellow.400" fontWeight={700}>POWER</chakra.span> and fuel your journey to greatness!
                  <br />
                  Trade, ascend, and electrify your portfolio with the most dynamic coin in the game.
                  <br />
                  <chakra.span color="blue.500" fontWeight={600}>POWER</chakra.span> is your ticket to a new financial reality—charge up and stand out!
                </Text>
                <Stack
                  direction={'column'}
                  spacing={5}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}>
                  <Link href={LINKS.cw20Token("powerexchange-dapp")}>
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
                </Stack>
              </Stack>
            </Container>
  );
};
export default HeroSection;
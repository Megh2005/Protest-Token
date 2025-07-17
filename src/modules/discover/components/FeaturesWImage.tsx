import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  emojiIcon?: string
}

const Feature = ({ text, emojiIcon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={10} h={10} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {emojiIcon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

interface FeaturesWImageProps {}
const FeaturesWImage: FC<FeaturesWImageProps> = (props) => {
    const {} = props;
    return (
        <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
            <Text
                textTransform={'uppercase'}
                color={'yellow.400'}
                fontWeight={700}
                fontSize={'sm'}
                bg={useColorModeValue('yellow.50', 'yellow.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                POWER EXCHANGE FEATURES
            </Text>
            <Heading>Supercharge Your Wallet ⚡</Heading>
            <Text color={'gray.600'} fontSize={'lg'}>
                <chakra.span fontWeight="bold" textDecoration="underline" color="yellow.400">POWER</chakra.span> is the energy you need to electrify your crypto journey!
                <br />
                Buy, trade, and unlock new possibilities with the most dynamic coin in the market.
            </Text>
            <Stack
                spacing={4}
                divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Feature
                emojiIcon={'⚡'}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Instant Energy Boost'}
                />
                <Feature
                emojiIcon={'💸'}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Seamless Transactions'}
                />
                <Feature
                emojiIcon={'🔒'}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Secure & Reliable'}
                />
            </Stack>
            </Stack>
            <Flex>
            <Image
                rounded={'md'}
                alt={'power coin exchange'}
                aspectRatio={4 / 4}
                src={
                    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                objectFit={'cover'}
            />
            </Flex>
        </SimpleGrid>
        </Container>
    );
    };

export default FeaturesWImage;
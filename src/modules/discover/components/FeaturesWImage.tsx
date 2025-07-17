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
                VIBE PARTY FEATURES
            </Text>
            <Heading>Join the Ultimate Blockchain Party 🎉</Heading>
            <Text color={'gray.600'} fontSize={'lg'}>
                <chakra.span fontWeight="bold" textDecoration="underline" color="yellow.400">VIBE</chakra.span> is pure chaos and good vibes packed into a token!
                <br />
                Dance, pump, and laugh all the way to the moon with the most fun coin on the blockchain.
            </Text>
            <Stack
                spacing={4}
                divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Feature
                emojiIcon={'🎉'}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Pure Viral Potential'}
                />
                <Feature
                emojiIcon={'🕺'}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Non-Stop Fun Trading'}
                />
                <Feature
                emojiIcon={'🌙'}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Moon-Bound Community'}
                />
            </Stack>
            </Stack>
            <Flex>
            <Image
                rounded={'md'}
                alt={'vibe coin party'}
                aspectRatio={4 / 4}
                src={
                    'https://res.cloudinary.com/djyk287ep/image/upload/v1752761402/ChatGPT_Image_Jul_17_2025_07_38_59_PM_aowmki.png'
                    }
                objectFit={'cover'}
            />
            </Flex>
        </SimpleGrid>
        </Container>
    );
    };

export default FeaturesWImage;
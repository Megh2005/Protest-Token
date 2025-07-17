import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";


interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('yellow.400', 'yellow.600')}
      rounded={'lg'}
      bg={useColorModeValue('yellow.50', 'gray.900')}
    >
      <StatLabel fontWeight={'bold'} color="yellow.700" isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'bold'} color="black">
        {stat}
      </StatNumber>
    </Stat>
  )
}

interface BasicStatisticsProps {}
const BasicStatistics: FC<BasicStatisticsProps> = (props) => {
  const {} = props;
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'} color="yellow.500">
        Power Up Your Portfolio!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Total POWER'} stat={'5.0B POWER ⚡'} />
        <StatsCard title={'Users'} stat={'25,000+ 🔥'} />
        <StatsCard title={'Max Potential'} stat={'UNLIMITED 🚀'} />
      </SimpleGrid>
    </Box>
  );
};

export default BasicStatistics;
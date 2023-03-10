import { Box, SimpleGrid, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <SimpleGrid
        bg={`${color}.600`}
        align="start"
        spacing="10px"
        gridTemplateColumns={{
          lg: ' minmax(0, 250px) minmax(0, 1fr)',
          sm: 'minmax(0, 1fr)',
        }}
      >
        <Box padding="20px">
          <Image
            minWidth="160px"
            width="200px"
            objectFit="cover"
            src={image}
            borderRadius={roundImage ? '100%' : '3px'}
          />
        </Box>
        <Box
          padding="20px"
          lineHeight="40px"
          color="white"
          justifySelf="start"
          float="left"
        >
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="x-small" marginTop="10px">
            {description}
          </Text>
        </Box>
      </SimpleGrid>
      <Box paddingY="50px">{children}</Box>
    </Box>
  )
}

export default GradientLayout

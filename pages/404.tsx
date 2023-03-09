import { Box, Divider, LinkOverlay } from '@chakra-ui/layout'
import NextLink from 'next/link'

import { Button, Container, Heading, Text } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container display="grid" justifyContent="start" position="absolute">
      <Heading as="h1">Not found</Heading>
      <Text>Still building this functionality, try again soon!</Text>
      <Divider my={6} />
      <Box my={6}>
        <NextLink href="/" passHref>
          <LinkOverlay>
            <Button href="/" colorScheme="teal">
              Return to home
            </Button>
          </LinkOverlay>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound

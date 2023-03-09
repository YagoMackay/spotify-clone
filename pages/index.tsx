import { Box, Center, SimpleGrid, Text } from '@chakra-ui/layout'
import { Image, Skeleton } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  const { user, isLoading } = useMe()

  return (
    <Box>
      <Skeleton isLoaded={!isLoading}>
        <GradientLayout
          roundImage
          color="red"
          subtitle="profile"
          title={`${user?.firstName} ${user?.lastName}`}
          description={`${user?.playlistsCount} public playlists`}
          image="https://yago-mackay-profile.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75"
        >
          <Box color="white" paddingX="40px">
            <Box marginBottom="40px">
              <Text fontSize="2xl" fontWeight="bold">
                Top artist this month
              </Text>
              <Text fontSize="md">only visible to you</Text>
            </Box>
            <SimpleGrid minChildWidth="220px" spacing="40px">
              {artists.map((artist) => (
                <Box width="100%" height="300px">
                  <Box
                    bg="gray.900"
                    borderRadius="4px"
                    padding="15px"
                    width="100%"
                  >
                    <Center>
                      <Image
                        src={artist.avatar}
                        borderRadius="100%"
                        aspect
                        height="200px"
                        width="200px"
                      />
                    </Center>
                    <Box marginTop="20px">
                      <Text fontSize="large">{artist.name}</Text>
                      <Text fontSize="x-small">Artist</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </GradientLayout>
      </Skeleton>
    </Box>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home

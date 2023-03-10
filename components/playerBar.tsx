import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useStoreState } from 'easy-peasy'

import Player from './player'

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs)
  const activeSong = useStoreState((state: any) => state.activeSong)

  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <Box padding="20px" color="white" width="25%" display="flex">
            <Image src={activeSong.artist.avatar} height="50px" width="50px" />
            <Box paddingLeft="10px">
              <Text fontSize="large">{activeSong.name}</Text>
              <Text fontSize="sm" color="gray.600">
                {activeSong.artist.name}
              </Text>
            </Box>
          </Box>
        ) : null}
        <Box width="70%">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar

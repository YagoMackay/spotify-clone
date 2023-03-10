import { Box, Center } from '@chakra-ui/layout'
import {
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useStoreActions } from 'easy-peasy'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { formatDate, formatTime } from '../lib/formatters'

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0])
    playSongs(songs)
  }

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={
              <Center marginLeft="5px" marginTop="1px">
                <BsFillPlayFill fontSize="30px" />{' '}
              </Center>
            }
            aria-label="play"
            justifyItems="center"
            colorScheme="green"
            size="lg"
            isRound
            justifyContent="center"
            onClick={() => handlePlay()}
          />
        </Box>
        <Table variant="unstyled" verticalAlign="middle">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Artist</Th>

              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, i) => (
              <Tr
                sx={{
                  transition: 'all .3s ',
                  '&:hover': {
                    bg: 'rgba(255,255,255, 0.1)',
                  },
                }}
                key={song.id}
                cursor="pointer"
                onClick={() => handlePlay(song)}
                verticalAlign="middle"
              >
                <Td verticalAlign="middle">{i + 1}</Td>
                <Td display="flex" verticalAlign="middle" alignSelf="center">
                  <Image src={song.artist.avatar} height="50px" width="50px" />
                  <Box display="flex" flexDirection="column" paddingLeft="10px">
                    {' '}
                    <Td padding="0px 0px 5px 0px">{song.artist.name}</Td>
                    <Td padding="0px 0px 5px 0px" color="gray.500">
                      {song.name}
                    </Td>
                  </Box>
                </Td>

                <Td verticalAlign="middle">{formatDate(song.createdAt)}</Td>
                <Td verticalAlign="middle">{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default SongTable

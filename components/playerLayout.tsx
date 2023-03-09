import { Box } from '@chakra-ui/layout'
import PlayerBar from './playerBar'
import Sidebar from './sidebar'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100%">
      <Box position="absolute" top="0" width="250px" left="0" height="100%">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0">
        <PlayerBar />
      </Box>
    </Box>
  )
}

export default PlayerLayout

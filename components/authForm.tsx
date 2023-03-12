import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { auth } from '../lib/mutations'

const AuthForm: FC<{ mode: 'signin' | 'signup'; isSignUp: boolean }> = ({
  mode,
  isSignUp,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {isSignUp && (
              <>
                {' '}
                <Input
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            )} */}
            <Box display="flex" flexDirection="column">
              <Button
                marginTop="10px"
                type="submit"
                bg="green.500"
                isLoading={isLoading}
                sx={{
                  '&:hover': {
                    bg: 'green.300',
                  },
                }}
              >
                {mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </Button>
            </Box>
          </form>
          {!isSignUp && (
            <>
              <Text>Sign up here</Text>
              <Box>
                <Link href="/signup" passHref>
                  <Button
                    marginTop="10px"
                    x
                    type="submit"
                    bg="green.500"
                    sx={{
                      '&:hover': {
                        bg: 'green.300',
                      },
                    }}
                    href="/signup"
                  >
                    Sign Up
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm

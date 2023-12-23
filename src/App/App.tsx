import { ChakraBaseProvider, VStack } from '@chakra-ui/react'
import { theme } from '../theme'
import { Timer } from '../Timer'
import dayjs from 'dayjs'

export const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <VStack>
        <Timer
          to={dayjs('01/27/2024').toDate()}
          from={dayjs('11/25/2023').toDate()}
        />
      </VStack>
    </ChakraBaseProvider>
  )
}

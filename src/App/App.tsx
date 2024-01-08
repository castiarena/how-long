import { ChakraBaseProvider, Image, VStack } from '@chakra-ui/react'
import { theme } from '../theme'
import { Timer } from '../Timer'
import dayjs from 'dayjs'
import rawr from '../../public/rawr-ico.svg'

export const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <VStack py={4}>
        <Image src={rawr} />
      </VStack>
      <VStack>
        <Timer
          to={dayjs('01/27/2024').toDate()}
          from={dayjs('11/25/2023').toDate()}
        />
      </VStack>
    </ChakraBaseProvider>
  )
}

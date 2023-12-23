import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react'
import { colors } from './colors'

const { Button, Input, Badge, Avatar, Card } = chakraTheme.components
export const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Badge,
    Avatar,
    Card,
  },
  colors,
})

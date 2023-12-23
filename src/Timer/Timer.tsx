import { Card, Divider, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'

type TimerProps = {
  from: Date
  to: Date
}

export const Timer = ({ from, to }: TimerProps) => {
  const [timeTo, setTimeTo] = useState<string>('...')
  const [timeFrom, setTimeFrom] = useState<string>('...')
  const [timer, setTimer] = useState(-1)

  const initTimer = () => {
    const now = dayjs()
    const daysTo = dayjs(to).diff(now, 'days')
    const hoursTo = dayjs(to).diff(now, 'hours')
    const secondsTo = dayjs(to).diff(now, 'seconds')

    const daysFrom = dayjs(now).diff(from, 'days')
    const hoursFrom = dayjs(now).diff(from, 'hours')
    const secondsFrom = dayjs(now).diff(from, 'seconds')

    setTimeTo(`${daysTo} days | ${hoursTo} hours | ${secondsTo} seconds`)
    setTimeFrom(
      `${daysFrom} days | ${hoursFrom} hours | ${secondsFrom} seconds`,
    )
  }

  useEffect(() => {
    if (timer === -1) {
      const interval = setInterval(initTimer, 1000)
      setTimer(interval)
    }

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card p={12}>
      <Text>{timeTo}</Text>
      <Divider />
      <Text>{timeFrom}</Text>
    </Card>
  )
}

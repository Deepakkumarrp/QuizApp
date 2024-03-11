import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider } from '@chakra-ui/react'
import React, { useState } from 'react'

const LeaderBoard = () => {
    const [marks,setMarks] = useState(JSON.parse(localStorage.getItem('scoreData')))
  return (
    <div>
        <Heading>All Results</Heading>
        <Card w="30%" mt={4} >
  <CardHeader>
    <Heading size='md'>{marks.name}'s Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Name : {marks.name}
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Percentage : {marks.score /10 * 100}%
        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Score :{marks.score}
        </Heading>
   
      </Box>
    </Stack>
  </CardBody>
</Card>
    </div>
  )
}

export default LeaderBoard
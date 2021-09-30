import Image from 'next/image'
import Logo from "../assets/ywst-logo_transparent.png"
import {Button, Box, Heading} from '@chakra-ui/react'
import React from 'react'

const IndexPage = () => {
  return(
    <>
      <Box d='flex' h='vh' w={'full'} justifyContent='space-between'>
        <Image width="220" height="200"
    src={Logo} />
        <Heading color='brand.fg'>Yoga with Susan Turis</Heading>
    </Box>
    <Button bg='brand.button' color='white'>cliick</Button>
    </>
  )
}

export default IndexPage;
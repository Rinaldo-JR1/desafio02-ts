import { Box, Center, Input } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { ButtonLogin } from "./ButtonLogin"
import { login } from "../services/login"




export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Center>
          <Header />
        </Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <ButtonLogin onClick={login} text='Entrar' />
          </Center>
          </Box>
      </Box>
  )
}
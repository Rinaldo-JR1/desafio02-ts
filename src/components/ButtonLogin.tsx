import { Button } from "@chakra-ui/react"

type Props = {
    onClick: () => void
    text: string
}

export const ButtonLogin = ({ onClick, text }: Props) => {
    return (
        <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {text}
        </Button>
    )
}
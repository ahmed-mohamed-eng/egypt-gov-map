import { VStack } from "@chakra-ui/react"

export const PageContainer = (props: any) => {
  return (
    <VStack minH="100vh" boxShadow="0 0 5px #CACACA" py="1rem" px="0.5rem" spacing="1rem">
        {props.children}
    </VStack>
  )
}


import { VStack } from "@chakra-ui/react"

export const PageContainer = (props: any) => {
  return (
    <VStack py="1rem" px="0.5rem" spacing="1rem">
        {props.children}
    </VStack>
  )
}


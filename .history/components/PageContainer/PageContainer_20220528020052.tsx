import { VStack } from "@chakra-ui/react"

export const PageContainer = (props: any) => {
  return (
    <VStack py="1.5rem" px="1rem">
        {props.children}
    </VStack>
  )
}


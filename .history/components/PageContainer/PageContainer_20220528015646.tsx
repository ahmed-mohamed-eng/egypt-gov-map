import { Box } from "@chakra-ui/react"

export const PageContainer = (props: any) => {
  return (
    <Box py="1.5rem" px="1rem">
        {props.children}
    </Box>
  )
}


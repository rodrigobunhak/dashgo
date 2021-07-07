import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>
          Rodrigo Bunhak
        </Text>
        <Text color="gray.300" fontSize="small">
          rodrigo.bunhak@gmail.com
        </Text>

      </Box>
      
      <Avatar size="md" name="Rodrigo Bunhak" src="https://github.com/rodrigobunhak.png"/>
    </Flex>
  )
}
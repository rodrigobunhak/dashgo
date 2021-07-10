import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Rodrigo Bunhak
          </Text>
          <Text color="gray.300" fontSize="small">
            rodrigo.bunhak@gmail.com
          </Text>

        </Box>
      ) }
      
      <Avatar size="md" name="Rodrigo Bunhak" src="https://github.com/rodrigobunhak.png"/>
    </Flex>
  )
}
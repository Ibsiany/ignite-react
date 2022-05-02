import { Flex,Box,Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Ibsiany Dias</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    ibsiany.godinho@precato.com.br
                </Text>
            </Box>

            <Avatar size="md" name="Ibsiany Dias" src="https://github.com/ibsiany.png"/>

        </Flex>
    );
}
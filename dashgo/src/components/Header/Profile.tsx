import { Flex,Box,Text, Avatar } from "@chakra-ui/react";

interface IProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData}:IProfileProps){
    return (
        <Flex align="center">
            {
                showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Ibsiany Dias</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            ibsiany.godinho@precato.com.br
                        </Text>
                    </Box>
                )
            }


            <Avatar size="md" name="Ibsiany Dias" src="https://github.com/ibsiany.png"/>

        </Flex>
    );
}
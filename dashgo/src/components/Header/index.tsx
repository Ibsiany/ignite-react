import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";

export function Header(){
    const {} = useBreakpointValue({
        base: false,
    })

    return (
        <Flex 
            as="header" 
            width="100%"
            maxWidth={1480}
            height="20"
            marginX="auto"
            marginTop="4"
            px="6"
            align="center"
        >
            <Logo/>
            <SearchBox/>
        <Flex
            align="center"
            ml="auto"
        >

            <NotificationsNav/>
            <Profile/>
            </Flex>
        </Flex>
    );
}
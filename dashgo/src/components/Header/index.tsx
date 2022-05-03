import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header(){
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
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

        {!isWideVersion && (
                <IconButton 
                    icon={<Icon as={RiMenuLine}/>} 
                    aria-label="Open navigation" 
                    fontSize="24" 
                    variant="unstyled" 
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
        )}

        <Logo/>

        {isWideVersion && <SearchBox/>}

        <Flex
            align="center"
            ml="auto"
        >

            <NotificationsNav/>
            <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    );
}
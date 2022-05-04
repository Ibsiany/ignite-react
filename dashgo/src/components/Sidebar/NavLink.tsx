import { ElementType } from "react";
import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";


interface INavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    title: string;
    href: string
}

export function NavLink({icon,title, href, ...rest}:INavLinkProps ){
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" {...rest}> 
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{title}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}
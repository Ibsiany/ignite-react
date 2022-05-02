import { Link, Icon, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    title: string;
}

export function NavLink({icon,title, ...rest}:INavLinkProps ){
    return (
        <Link display="flex" {...rest}> 
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{title}</Text>
        </Link>
    );
}
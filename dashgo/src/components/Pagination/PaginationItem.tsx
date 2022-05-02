import { Button } from "@chakra-ui/react";

interface IPaginationProps {
    number: number;
    isCurrent?: boolean
}

export function PaginationItem({number, isCurrent = false}: IPaginationProps){
    if(isCurrent){
       return (
        <Button 
            size="sm" 
            fontSize="xs" 
            width="4"
            colorScheme="pink" 
            disabled
            _disabled={{
                bg:' pink.500',
                cursor: 'default'
            }}
        >
            {number}
        </Button>
       ) 
    }

    return (
        <Button 
            size="sm" 
            fontSize="xs" 
            width="4"
            colorScheme="gray.700" 
            bg='gray.700'
            disabled
            _hover={{
                bg:'gray.500',
            }}
        >
            {number}
        </Button>
    )
}
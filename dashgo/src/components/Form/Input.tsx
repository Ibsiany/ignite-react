import { Input as ChakraInput, FormLabel, FormControl, InputProps } from '@chakra-ui/react';

interface IInputProps extends InputProps{
    name: string;
    label?: string;
}

export function Input({name, label, ...rest}: IInputProps) {
    return (
        <FormControl>
        {!!label && <FormLabel htmlFor={name} color="white">{label}</FormLabel>}
        <ChakraInput 
          name={name} 
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{bgColor: 'gray.900'}}
          size="lg"
          {...rest}
        />
      </FormControl>
    )
}
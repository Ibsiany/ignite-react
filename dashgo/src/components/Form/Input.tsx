import { Input as ChakraInput, FormLabel, FormControl, InputProps, FormErrorMessage } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface IInputProps extends InputProps{
    name: string;
    label?: string;
    error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({name, label, error = null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name} color="white">{label}</FormLabel>}
        <ChakraInput 
          name={name} 
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{bgColor: 'gray.900'}}
          size="lg"
          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
}

export const Input = forwardRef(InputBase)
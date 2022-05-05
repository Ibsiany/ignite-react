import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    
  }

  return (
    <Flex 
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex
        as="form" 
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email"
            label="E-mail"
            error={errors.email}
            {...register}
          />
          <Input 
            name="password" 
            type="password"
            label="Senha"
            error={errors.password}
            {...register}
          />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  )
}

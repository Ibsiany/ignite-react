import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { SignInButton } from './index'

jest.mock('next-auth/react')

const useSessionMocked = useSession as jest.MockedFunction<typeof useSession>

describe('SignInButton component', () => {
    it('renders correctly qwhen user is not authentication', () => {

        useSessionMocked.mockReturnValueOnce(null)

      render(
        <SignInButton/>
      )
    
      expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
    })

    it('renders correctly qwhen user is authentication', () => {
        useSessionMocked.mockReturnValueOnce({ data: {
            user: {
                name: "John Doe",
                email: "john.doe@example.com"
            },
            expires: 'fake-expires'
        }, status: "unauthenticated" })

        render(
            <SignInButton/>
        )
    
        expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
})
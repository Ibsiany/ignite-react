import { render } from '@testing-library/react';
import { ActiveLink } from './index'

jest.mock('next/router', () => {
    return {
      useRouter() {
        return {
          asPath: '/'
        }
      }
    }
  })

describe('ActiveLink component', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <ActiveLink href="/" activeClassName="active">
          <a>Home</a>
        </ActiveLink>
      )
    
      expect(getByText('Home')).toBeInTheDocument()
    })
    
    it('adds active class if the link as currently', () => {
      const { getByText } = render(
        <ActiveLink href="/" activeClassName="active">
          <a>Home</a>
        </ActiveLink>
      )
    
      expect(getByText('Home')).toHaveClass('active')
    })
})
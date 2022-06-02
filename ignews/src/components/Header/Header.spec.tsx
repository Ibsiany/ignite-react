import { render } from '@testing-library/react';
import { Header } from './index'

jest.mock('next/router', () => {
    return {
      useRouter() {
        return {
          asPath: '/'
        }
      }
    }
  })

describe('Header component', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <Header/>
      )
    
      expect(getByText('Home')).toBeInTheDocument()
      expect(getByText('Posts')).toBeInTheDocument()
    })
})
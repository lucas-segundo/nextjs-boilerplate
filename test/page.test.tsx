import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Name of the group', () => {
  it('should ', () => {
    render(<Home />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})

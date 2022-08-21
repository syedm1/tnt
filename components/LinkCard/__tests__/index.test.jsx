// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'

describe('Remove white spaces', () => {
  it('renders a heading', () => {
    render(  <>
    {LinkCard("/removeWhiteSpaces","Remove Pesky Whitespaces","Remove white spaces from your text")}
    </>
  )

    const heading = screen.getByText("yolo")

    expect(heading).toBeInTheDocument()
  })
})
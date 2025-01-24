import { render } from '@redwoodjs/testing/web'

import ChessPuzzlePage from './ChessPuzzlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChessPuzzlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChessPuzzlePage />)
    }).not.toThrow()
  })
})

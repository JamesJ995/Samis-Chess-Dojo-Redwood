import { render } from '@redwoodjs/testing/web'

import TextMessagesPage from './TextMessagesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TextMessagesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextMessagesPage />)
    }).not.toThrow()
  })
})

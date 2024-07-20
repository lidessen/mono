import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import {Button} from '../src/button'

test('renders name', () => {
  const { getByText } = render(<Button appName='test'>Hello, World!</Button>)
  const element = getByText('Hello, World!')
  expect(element).toBeInTheDocument()
})

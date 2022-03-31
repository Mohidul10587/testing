 import React from 'react'
import {render , screen } from '@testing-library/react'
import Users from '../Users'
import '@testing-library/jest-dom'

test('should be ok', () => {
    render(<Users></Users>)
   const creatElement = screen.getByTestId('user-1')
   expect(creatElement).toBeInTheDocument()
   expect (creatElement).toHaveTextContent('Hello')
  
  })

/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import NewTodo from './component'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewTodo />, div)
})

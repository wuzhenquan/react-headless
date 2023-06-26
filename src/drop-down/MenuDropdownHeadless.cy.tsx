import React from 'react'
import MenuDropdownHeadless from './MenuDropdownHeadless'

describe('<MenuDropdownHeadless />', () => {
  const items = [
    { name: 'Vue' },
    { name: 'Svelte' },
    { name: 'React' },
    { name: 'Angular'}
  ];
  
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MenuDropdownHeadless items={items} onSelect={() => {}} />)
  })
})
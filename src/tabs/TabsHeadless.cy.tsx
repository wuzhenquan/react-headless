import React from 'react'
import TabsHeadless from './TabsHeadless'

describe('<Tabs />', () => {
  const tabs = [
    { name: 'Vue' },
    { name: 'Svelte' },
    { name: 'React' },
    { name: 'Angular' }
  ];

  const panels = [
    { content: 'Vue is a progressive framework for building user interfaces.' },
    { content: 'Svelte is a radical new approach to building user interfaces.' },
    { content: 'React is a JavaScript library for building user interfaces.' },
    { content: 'Angular is a platform for building mobile and desktop web applications.' }
  ];

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TabsHeadless tabs={tabs} panels={panels} />
    )
  })

  it('shows "Vue" content by default', () => {
    cy.mount(
      <TabsHeadless tabs={tabs} panels={panels} />
    );

    // Check if the "Vue" content is displayed by default
    cy.contains('Vue is a progressive framework for building user interfaces.').should('be.visible');
  });
  

  it('displays the correct content when a tab is clicked', () => {
    cy.mount(
      <TabsHeadless tabs={tabs} panels={panels} />
    );

    // Click on the 'Svelte' tab
    cy.contains('Svelte').click();
    // Check if the correct content is displayed
    cy.contains('Svelte is a radical new approach to building user interfaces.').should('be.visible');

    // Click on the 'React' tab
    cy.contains('React').click();
    // Check if the correct content is displayed
    cy.contains('React is a JavaScript library for building user interfaces.').should('be.visible');

    // Click on the 'Angular' tab
    cy.contains('Angular').click();
    // Check if the correct content is displayed
    cy.contains('Angular is a platform for building mobile and desktop web applications.').should('be.visible');
    
    // Click on the 'Vue' tab
    cy.contains('Vue').click();
    // Check if the correct content is displayed
    cy.contains('Vue is a progressive framework for building user interfaces.').should('be.visible');
    
  }); 

})
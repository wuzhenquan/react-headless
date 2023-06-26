import MenuDropdown from './MenuDropdown'
import '../index.css'

describe('<MenuDropdown />', () => {
  before(() => {
    cy.viewport('iphone-4')
  })

  const items = [
    { name: 'Vue' },
    { name: 'Svelte' },
    { name: 'React' },
    { name: 'Angular'}
  ];
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MenuDropdown items={items} onSelect={() => {}} />)
  })
})
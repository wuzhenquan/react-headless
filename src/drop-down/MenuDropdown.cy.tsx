import MenuDropdown from './MenuDropdown'
import '../index.css'

describe('<MenuDropdown />', () => {
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
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { MenuDropdownHeadless, MenuDropdown } from './drop-down'

const menuDropdownHeadlessPath = '/MenuDropdownHeadless'
const menuDropdown = '/MenuDropdown'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Link to={menuDropdownHeadlessPath}>{menuDropdownHeadlessPath}</Link>
          <Link to={menuDropdown}>{menuDropdown}</Link>
        </div>
      )
    },
    {
      path: menuDropdownHeadlessPath, // "/MenuDropdownHeadless"
      element: (
        <MenuDropdownHeadless
          onSelect={() => { }}
          items={[ { name: 'Vue' },{ name: 'Svelte' }, { name: 'React' }, { name: 'Angular' } ]}
        />
      ),
    },
    {
      path: menuDropdown, // "/MenuDropdown"
      element: (
        <MenuDropdown
          onSelect={() => { }}
          items={[ { name: 'Vue' },{ name: 'Svelte' }, { name: 'React' }, { name: 'Angular' } ]}
        />
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

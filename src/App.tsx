import { useState } from "react";
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import "./App.css";
import { MenuDropdownHeadless } from './drop-down';

const menuDropdownHeadlessPath = "/MenuDropdownHeadless";

function Index() {
  return (
    <div>
      <Link to={`contacts/1`}>Your Name</Link>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Link to={menuDropdownHeadlessPath}>{menuDropdownHeadlessPath}</Link>
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
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

import { useState } from "react";
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MenuDropdownHeadless } from './drop-down';

const routerConfig = {
  menuDropdownHeadless: {
    path: "/MenuDropdownHeadless",
    element: <MenuDropdownHeadless onSelect={() => { }} items={[
      { name: 'Vue' },
      { name: 'Svelte' },
      { name: 'React' },
      { name: 'Angular' },
    ]} />,
  }
}

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
      element: <div>
        <Link to={routerConfig.menuDropdownHeadless.path}>{routerConfig.menuDropdownHeadless.path}</Link>
      </div>
    },
    ...Object.values(routerConfig),
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

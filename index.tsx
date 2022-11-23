import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Netflix from './pages/Netflix';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/NETFLIX', element: <Netflix /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

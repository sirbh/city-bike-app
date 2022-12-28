import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>Journeys</div>,
      },
      {
        path: '/stations',
        element: <div>Stations</div>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Journey from '../components/journey';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Journey />,
      },
      {
        path: '/stations',
        element: <div>Stations</div>,
      },
    ],
  },
]);

export default router;

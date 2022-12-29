import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Journey from '../components/journey';
import Stations from '../components/stations';

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
        element: <Stations />,
      },
    ],
  },
]);

export default router;

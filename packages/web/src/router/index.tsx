import { useRoutes } from 'react-router-dom'
import MyInfo from '../pages/MyInfo'
import ProjectList from '../pages/ProjectList'
import App from '../pages/App'
import Login from '../pages/Login'
import LiveList from '@/pages/LiveList'
const ToRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/info',
      element: <MyInfo />,
    },
    {
      path: '/list',
      element: <ProjectList />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    { path: '/liveList', element: <LiveList /> },
  ])
  return routes
}
export default ToRoutes

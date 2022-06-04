import { createRoot } from 'react-dom/client'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import 'antd/dist/antd.css'
import './style.css'
import { HashRouter } from 'react-router-dom'
import CHeader from './components/Header'
import ToRoutes from './router/index.js'
import { WsProvider } from './store/Ws/context'
import { ws } from './store/Ws'
const root = createRoot(document.getElementById('root')!)
ws.send('changeType', { type: 'agent' })
root.render(
  <DndProvider backend={HTML5Backend}>
    <HashRouter>
      <WsProvider>
        <CHeader />
        <ToRoutes />
      </WsProvider>
    </HashRouter>
  </DndProvider>,
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import 'antd/dist/antd.css'
import './style.css'
import App from './pages/App'
import { HashRouter } from 'react-router-dom'
import CFooter from './components/Footer'
import CHeader from './components/Header'
import ToRoutes from './router/index.js'
const root = createRoot(document.getElementById('root')!)

root.render(
  <DndProvider backend={HTML5Backend}>
    <HashRouter>
      <CHeader/>
      <ToRoutes/>
    </HashRouter>
  </DndProvider>,
)

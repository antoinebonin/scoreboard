import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Viewer from './components/viewer/Viewer'
import { Provider } from 'react-redux'
import store from './app/store/index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import End from './components/viewer/end/End'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/match",
    element: <Viewer currentView={"score"} />,
  },
  {
    path: "/break",
    element: <Viewer currentView={"temps-morts"} />,
  },
  {
    path: "/half",
    element: <Viewer currentView={"mi-temps"} />,
  },
  {
    path: "/end",
    element: <Viewer currentView={"fin-du-match"} />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

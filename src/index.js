import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import './css/style.css'

const app = document.getElementById("app")

const arr = ReactDOMClient.createRoot(app)

arr.render(<App />)
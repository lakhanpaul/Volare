import { Component } from 'react'

import Logo from './assets/altafino.svg'
import './app.styles.scss'
import Home from './components/pages/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default App

import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'
import './assets/styles/config.scss'
import Home from './pages/index/Home'

function App() {
  return (
    <>
    <Router>
      {/* <Route path="/confirm-number" component={ConfirmPhoneNumber} />
      <Route path="/createId" component={CreateId} /> */}
      <Route exact path="/" component={Home} />
    </Router>
    </>
  );
}

export default App;

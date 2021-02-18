import React from 'react';
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import PersonDetails from "./components/PersonDetails";
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; 
import Details from './components/details';
import EditForm from './components/EditForm';
class App extends React.Component {
  render(){
    return (
      <div className="App">
    <Router> 
<Switch> 
 <Route exact path='/'render={() => (
 <Redirect to="/home"/> )}>
</Route> 
<Route path='/home' component={Home}></Route>
<Route path='/form/1' component={AddForm}></Route>
<Route path='/contacts' component={Details}></Route>
<Route path='/person' component={PersonDetails}></Route>
<Route path='/form/2' component={EditForm}></Route>
</Switch> 
   </Router>
      </div>
    );
  }
  
}

export default App;

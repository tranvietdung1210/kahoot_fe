import React from 'react';

import './App.css';
import {Route} from "react-router-dom";
import {Gh} from "./containers";
import {Ad} from "./containers";
function App() {
  return (
<div>
<Route exact path="/" component={Gh} />
<Route exact path="/:id" component={Ad} />
</div>
  );
}

export default App;

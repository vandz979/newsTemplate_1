import React from 'react';
import './App.css';

import Layout from "./container/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faClock, faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(faComment, faClock, faPlus)

function App() {
  return (
    <div className="App">
        <Layout />
    </div>
  );
}

export default App;

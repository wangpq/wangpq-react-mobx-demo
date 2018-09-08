import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Import the Provider from mobx-react, used below
import {Provider} from 'mobx-react';
// Import our store
import TopicStore from './stores/TopicStore';
import ProductStore from './stores/ProductStore';

import 'antd/dist/antd.css';

// import our styles produced from sass
import './static/css/styles.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';


import Home from './views/home';
import Topics from './views/topics';
import Detail from './views/detail';

/*
This seems a little weird below, but we are wrapping our App component
in a special component which comes from mobx-react... this allows us
to access our ShoeStore from within the App component
*/
const Root = (
  <Provider TopicStore={TopicStore} ProductStore={ProductStore}>
    <BrowserRouter> 
      <div>
        <Route exact  path="/" component={Home}/>
        <Route path="/topics" exact component={Topics} />
        <Route path="/detail/:id?" exact component={Detail} />
      </div>
    </BrowserRouter>
  </Provider>
)

// Render the Root variable we created above, not <App/>
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();

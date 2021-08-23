import './components/assets/scss/main.scss';
import 'antd/dist/antd.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from './routes/Login'
import AddWasteReport from './routes/AddWasteReport'

function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route
          name="login"
          exact
          path="/"
          component={Login}
        />

        <Route
          name="addWasteReport"
          exact
          path="/addwastereport"
          component={AddWasteReport}
        />

      </Switch>

    </BrowserRouter>
  );
}

export default App;

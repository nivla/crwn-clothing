import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { ShopPage } from "./pages/shoppage";
import Header from "./components/header/header";

function HatsPage() {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

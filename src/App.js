import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { ShopPage } from "./pages/shoppage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

function HatsPage() {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
}
function App({ setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

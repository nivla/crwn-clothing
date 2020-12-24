import HomePage from "./pages/homepage/homepage";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { ShopPage } from "./pages/shoppage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

function HatsPage() {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
}
function App({ setCurrentUser, currentUser }) {
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
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

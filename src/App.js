import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null 

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        console.log(this.state)
        });
      } else{
        this.setState({currentUser:userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    const {currentUser} = this.state ;
    return(
        <div>
          <Header currentUser= {currentUser} />
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
          
        </div>

    );
  }
}

export default App;

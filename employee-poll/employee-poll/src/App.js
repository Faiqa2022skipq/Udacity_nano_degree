import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared'
import SignIn from './components/LoginPage';
import { useEffect } from 'react'
import Home from './components/Home';
import Verification from './components/Verification';
import { Route, Routes } from "react-router-dom";
import NewPoll from './components/New-Poll'
import Leadership from './components/Leadership'
import Poll from './components/Poll'
import Navbar from './components/Navbar';

import ErrorPage from './components/ErrorPage';


function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  return (
    <div className="App">
      {props.loggedIn && <Navbar />}
      <Routes>
        <Route path="/login" exact element={<SignIn />} />
        <Route path="/" element={<Verification><Home /></Verification>} />
        <Route path="/leadership"  element={  <Verification><Leadership /></Verification>} />
        <Route path="/questions/:id" element={  <Verification><Poll /> </Verification>} />

        <Route path="/newPoll"  element={  <Verification><NewPoll /> </Verification>} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    

    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);

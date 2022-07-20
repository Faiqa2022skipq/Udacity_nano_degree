import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared'
import SignIn from './components/LoginPage';
import { useEffect } from 'react'
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import NewPoll from './components/New-Poll'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Poll from './components/Poll';
function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  return (
    <div>
      {props.loggedIn === !true ? (
        <SignIn />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/leaderboard" element={<Leadership />} />
            <Route  path="/questions/:id" element={<Poll/>}/>
            <Route exact path="/add" element={<NewPoll />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  const loggedIn = authedUser === null ? false : true;

  return {
    loggedIn,
  };
}

export default connect(mapStateToProps)(App);

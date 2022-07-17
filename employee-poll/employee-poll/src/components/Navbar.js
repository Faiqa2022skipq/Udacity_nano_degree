import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { connect } from "react-redux";
import { useState } from "react";
import { handleLogout } from "../actions/authedUser";

const Navbar = ({ dispatch, authedUserId, authedUserAvatar }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };
  return (
    <>
      <Nav>
        <NavLogo to="/">
          Employee poll
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink
            to="/"
            activestyle={{ color: 'black' }}
            data-testid="home"
          >
            Home
          </NavLink>
          <NavLink
            to="/leadership"
            activestyle={{ color: 'black' }}
            data-testid="leadership"
            
          >
            Leaderboard
          </NavLink>
          <NavLink
            to="/NewPoll"
            activestyle={{ color: 'black' }}
            data-testid = "new"
          >
            New Poll
          </NavLink>
          <span style={{ color: 'white' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}

          >  {<img src={authedUserAvatar} alt="avatar" style={{
            width: '40%',
            height: '20%',
            margin: 7,
            borderRadius: 7

          }} />}
            {isHovering && ` ${authedUserId}`}

            {console.log(authedUserAvatar)}
          </span>
          <NavBtn>
            <NavBtnLink to="/login" onClick={logout} activestyle={authedUserId} data-testid = "logout">Logout</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
  authedUserAvatar: authedUser.avatarURL,
});
export default connect(mapStateToProps)(Navbar);
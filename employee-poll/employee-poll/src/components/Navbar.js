import React from "react";
import {
  Nav,
  NavLink,
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


  return (
    <>

      <Nav>
        <div style={{ marginLeft: '250px' }}>


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
              data-testid="new"
            >
              New Poll
            </NavLink>
            <span style={{ color: 'white' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}

            >  {<img src={authedUserAvatar} alt="avatar" style={{
              width: '30px',
              height: '20%',
              margin: 7,
              borderRadius: 7

            }} />}
              {isHovering && ` ${authedUserId}`}


            </span>

            <NavBtn>



              <NavBtnLink to="/login" onClick={((e) => { dispatch(handleLogout(e)) })} activestyle={authedUserId} data-testid="logout" style={{ float: 'right' }}>Logout</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </div>
      </Nav>

    </>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
  authedUserAvatar: authedUser.avatarURL,
});
export default connect(mapStateToProps)(Navbar);
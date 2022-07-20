import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser"; import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
const theme = createTheme();
const SignIn = ({ dispatch, loggedIn, users }) => {
  const [username, setUsername] = useState("tylermcginnis");
  const [password, setPassword] = useState("abc321");

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    console.log("Redirect URL " + redirectUrl + " " + urlParams)
    return <Navigate to={redirectUrl ? "redirectUrl" : "/"} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };
  return (
    <div className="text-3xl font-bold mt-9" data-testid="siginPage">
      <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              SignIn

            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} data-testid="login">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                inputProps={{ "data-testid": "username" }}

                autoComplete="email"
                value={username}
                autoFocus
                onChange={((e) =>     setUsername(e.target.value))}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputProps={{ "data-testid": "password" }}
                autoComplete="current-password"
                value={password}
                onChange={((e) => setPassword(e.target.value))}
              />

              <Button
                type="submit"
                fullWidth
                data-testid="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

              >
                Sign In
              </Button>

            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  );
}
const mapStateToProps = ({ authedUser, users }) => ({
  loggedIn: authedUser,
  users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),

});

export default connect(mapStateToProps)(SignIn)
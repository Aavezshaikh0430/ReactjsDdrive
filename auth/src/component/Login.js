import React, { Component } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

      auth: {
        username: 'Aavez',
        password: '12345',

      },
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password ,auth} = this.state;
    
    if(!username){
      console.log("Username should not be empty")
      return;
    }

    if(!password){
      console.log("Password should not be empty")
      return;
    }

    if(
      username=== auth.username &&
      password=== auth.password)
      {
        console.log('Authenticated')
        return;
      }
      else{
        console.log('incorrect login and password')
      }
    

    // console.log("Email:", username);
    // console.log("Password:", password);
  };

  render() {
    const { username, password } = this.state;

    return (
      <Grid
        container
        spacing={2}
        style={{
          
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h3"  component="h2">
          Ecom
        </Typography>
        <br/>

        <form onSubmit={this.handleSubmit}>

          <Grid item>
          <TextField
            label="username"
            name="username"
            fullWidth
            value={username}
            onChange={this.handleInput}
          />
          </Grid>
          <br/>

          <Grid item>
          <TextField
          
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleInput}
          />
          </Grid>

          <br/>

          <Grid item>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          </Grid>

        </form>
      </Grid>
    );
  }
}

export default LoginForm;

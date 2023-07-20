import React from "react";
import '../style/Form.css';


class Formvalidation extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            form: {
              username: null,
              password: null
            },
            error: ''
          }
        }
      
        validate() {
          let form = this.state.form;
          
          if (!form.username) {
            this.setState({'error': 'Enter Username'})
            return false;
          } 
          
          if(form.username.length>35){
            this.setState({'error':'Username should be very long.'})

            return false;
          }
      
          if (!form.password) {
            this.setState({'error': 'Enter Password'})
      
            return false;
          }

      
          if (form.password.length < 8) {
            this.setState({'error': 'Password should be greater than or equal to 8 '})
      
            return false;
          }
      
          return true;
        }
        
      
        handleInput = (value, key) => {
          let form = this.state.form;
          form[key] = value;
          this.setState({form});
        }
      
        handleForm = () =>  {
          const isValidated = this.validate()
          console.log(this.state);
      
          if (isValidated){
            console.log('form submitted');
          } else {
            console.log('form not submitted')
          }
        }
      

    render(){
        const{error}=this.state;
        return(
            <div>


                <div className="container">
                <div className="form">
                    
                    

                <img  src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"  alt="logo"  height={'180px'} className="formImg"/>  <br/>

                <input 
                name='Username' placeholder="Phone number,username,email address"
                 onChange={(data)=>this.handleInput(data.target.value,'username')}/>  <br/> <br/>
                  
                  

                <input 
                name='password' placeholder="Enter Password" type="password"
                 onChange={(data)=>this.handleInput(data.target.value,'password')}/>    <br/> <br/>
                
                

               <button onClick={this.handleForm}>Log in</button>
               {
               error ? (<h4>{error}</h4>):(<></>)
               }
               
               

               <div className="OR"> 

                <div className="Or1"><hr/></div>
                <div>OR</div>
                <div className="Or1"><hr/></div>

               </div>

               <div className="anchorTag">
                
                 <a href="https://www.facebook.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="logo" height={'20px'} className="anchorTag_img"/> Log in with Facebook</a>   
                
               </div>

               <div className="forgettonPass">
                <p><a href="none">Forgotten your password?</a></p>
               </div>


               <div className="singup">

                <p>Don't have an account? <a href='none'>Sign up</a></p>
                

               </div>
               </div>

            <div className="footer">
                <p>Meta</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Help</p>
                <p>API</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Top accounts</p>
                <p>Locations</p>
                <p>Instagram Lite</p>
                <p>Threads</p>
                <p>Contact uploading and non-users</p>
                <p>Meta Verified</p>
            
            </div>

            </div>




            </div>
        )
    }
}
export default Formvalidation;
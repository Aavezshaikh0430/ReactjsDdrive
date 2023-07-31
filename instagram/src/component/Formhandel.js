import React from "react";
import '../style/Form.css';


class Formhandel extends React.Component{
    constructor(props){
        super();
        
        this.state={
            fname:"",
            password:"",
        }

    }

    //(e)=event Object
    
    // handelfname=(e)=>{
    //     this.setState({fname:e.target.value})

    // } 
    
    // handelpassword=(e)=>{
    //     this.setState({password:e.target.value})
    // }

    handelChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handelLogin=(e)=>{
        e.preventDefault();
        console.log("fname:" ,this.state.fname)
        console.log("password:" ,this.state.password)

    }

    // handelInput(value,key){
    //     console.log(value,key);
    // }


    // handelForm(){
    //     console.log(':Congratulation Form has submitted');
    // }


handel=()=>{
    console.log(    this)
}



    render(){
        return(
            <div>


                <div className="container">
                <div className="form">
                    
                    <form onSubmit={(e)=>this.handelLogin(e)}>

                <img  src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"  alt="logo"  height={'180px'} className="formImg"/>  <br/>

                <input 
                name='fname' placeholder="Phone number,username,email address"
                /*onChange={(data)=>this.handelInput(data.target.value," :Username")}*/ value={this.state.fname} onChange={(e)=>{this.handelChange(e)}}/> <br/> <br/>
                  
                  {/* {this.state.fname}  */}

                <input 
                name='password' placeholder="Enter Password" type="password"
                /* onChange={(data)=>this.handelInput(data.target.value, " :Password")}*/ value={this.state.password}  onChange={(e)=>{this.handelChange(e)}}/>  <br/> <br/>
                {/* {this.state.password} */}
                

               <button /*onClick={this.handelForm}*/ >Log in</button>
               </form>
               

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
export default Formhandel;
import React from 'react'
import './Login.css'


class Login extends React.Component  {
  render() {
    return (
      <div>
           
      <form  

onSubmit={this.onSubmitHandler}
role="form"
accept-charset="UTF-8"
class="sign-up"

> 

  
  <h2 className='' style={{ fontSize:'50px', marginLeft:''}}>Login</h2>
  
    <label htmlFor="username">Username</label>
    <input
      onChange={this.onChange}
      type="username"
      placeholder="foo@bar.com "
      name="username"
      id="username"
      required
    />
  

  
    <label htmlFor="password">Password</label>
    <input
      onChange={this.onChange}
      placeholder="1234passw0rd"
      type="password"
      name="password"
      id="password"
      required
    />
  
  

  <button type="submit" style={{width:'100%'}}>Log In</button>
  


</form>
</div>
        
      
    
    )
  }

}


export default Login
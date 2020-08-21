import React from 'react'
import './Messages.css'


class Messages extends React.Component  {
  render() {
    return (
      <>
      <h2>Chat Messages</h2>

<div class="container00">

  <p>Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</div>

<div class="container00 darker">
  <p style={{display:'flex', flexDirection:'row-reverse'}}>Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</div>

<div class="container00">
  <p>Sweet! So, what do you wanna do today?</p>
  <span class="time-right">11:02</span>
</div>

<div class="container00 darker">
  
  <p style={{display:'flex', flexDirection:'row-reverse'}}>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span class="time-left">11:05</span>
</div>

<div className='underline'/>

<div className='btn-container' >
<button className='button'>Send</button>
</div>

<textarea id="w3review" name="w3review" rows="10" cols="50" className='' >
  At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
  </textarea>

      </>

    
    )
  }

}


export default Messages;
import React from 'react';

export default function Right() {
    return (
      <>
        <form action="https://formsubmit.co/aryandhiman0510@gmail.com" method="POST">
            <input type="hidden" name="_template" value="table"></input>
            <div className='row'>
                <label>Name</label>
                <input type='text' placeholder='Full Name' name='Name' required></input>
            </div>
            <div className='row'>
                <label>Email</label>
                <input type='email' placeholder='Email' name='Email' required></input>
            </div>
            <div className='row'>
                <label>Subject</label>
                <input type='text' placeholder='Subject' name='Subject' required></input>
            </div>
            <div className='row'>
                <label>Message</label>
                <textarea rows="7" placeholder='Write a message' name='Message' required></textarea>
            </div>
            <button type='submit'>Send</button>
        </form>
      </>
    );
  }
  
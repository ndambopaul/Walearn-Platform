import React, { useState } from 'react';
import { BACKEND_URL } from '../services/constants';

const Subscribe = () => {
  const [email, setEmail] = useState(null);

  const handleSubscription = async(e) => {
    e.preventDefault();

    const subscriptionData = {
      email: email
    }

    try {
      const response = await fetch(`${BACKEND_URL}/notifications/newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(subscriptionData)
      });
      if (response.ok) {
        window.alert("You have successfully subscribed to our newsletter!")
      } else {
        window.alert("Something went wrong!!")
      }
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className="container text-center mb-3">
    <h2>Stay Updated!</h2>
    <p>Sign up for our newsletter to get the latest updates on new courses and offers.</p>
    <form onSubmit={handleSubscription}>
    <input type="email" id='email' name='email' placeholder="Enter your email" className="form-control w-50 mx-auto" onChange={(e) => setEmail(e.target.value)} />
    <button className="btn btn-primary mt-2" type='submit'>Subscribe</button>
    </form>
    
</div>
  )
}

export default Subscribe
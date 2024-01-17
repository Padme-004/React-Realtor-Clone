import React from 'react';
import {useState} from 'react';

export default function Signin() {
  const [showPassword, setShowPassword]=useState(false);
  const [formData, setFormData]=useState({
    email:"",
    password: "",
  });
  const{email, password}=formData;


  function onChange(e){
    setFormData((prevState)=>({
      ...prevState
      [e.target.id]=e.target.value,
    }));
  }


  return (
    <section>
      <h1 className="text-3xl text-center mt-6">Sign In</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fHww "alt="Key"
        className="w-full rounded-2xl "/>

        
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input className='w-full' 
            type="email"
            id="email" 
            value={email} onChange={onChange}
            placeholder="Email address"
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
          
          <div>
            
            <input className='w-full' 
            type={showPassword ? "text": "password"} 
            id="password" 
            value={email} 
            onChange={onChange}
            placeholder="Password"
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            </div>

          </form>
        </div>
    </div>
    </section>
  )
}
{/*NOTES:
1.The numbers allow flex wrap to decide whether they should be next to each other or on top of each other 

2. Flex keeps the elements in the center.

3.Flex wrap ensures that if the screen size is small the elements lie on top of each other

4.max-w-6xl Gives margin on both LHS and RHS, but they are not in the center, so we use:

5.mx-auto to get them in the center

6.lg:ml-20 In the larger screens, have a margin of 20px to the left of this division.

7. We put the password box in a separate div, because it contains the eye icon on its box. This icon is placed absolute inside the div.
*/}
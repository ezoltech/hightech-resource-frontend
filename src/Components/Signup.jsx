import React from 'react'
import { Button } from 'flowbite-react'
import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebookCircle} from 'react-icons/bi'
const Signup = () => {
  return (
    
      <div className='bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-3% from-green-100 to-emerald-100 to-90%'>
<div className=''>
<div className='flex flex-col items-center mt-[10vh]'>
<h1 className='text-2xl font-semibold text-center text-gray-500 mt-8 mb-6'>RES.SHERE</h1>
<div>
<Button className="bg-[#1da1f2] mb-4 flex flex-row-reverse space-x-4 space-x-reverse" >
<div className="mx-3"><BiLogoFacebookCircle /></div>
<div className="mr-10">Sign in with Facebook</div>

</Button>

<         Button className="bg-[rgba(168,194,204,0.2)] mx-2 ">
            <div className="mx-3"><FcGoogle/></div>
            < div className="text-black mr-11">sign in with Google</div>
         </Button>
</div>

<p classNameclass="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
<h2 >Sign up with your email address</h2>
<form class=" flex flex-col mt-2 space-y-6 items-center ">
<div >
<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input type="email" name='email' id='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 " placeholder="name@gmail.com"/>
</div>
<div>
<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Creat a Password</label>
<input type="password" name='password' id='password' placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 "/>
</div>

<div>
<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm a Password</label>
<input type="password" name='password' id='password' placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 "/>
</div>
<div className='text-center text-xs'>
<p> By clicking on ‘Sign up’, you agree to Res.share Terms and Conditions of Use.</p>
<p> To learn more about how Res.share collects, uses, shares and protects your personal data,</p> 
<p>please see Res.share’s Privacy Policy.</p>
</div>



<Button className="flex flex-row gap-2 mx-11">

<div className="">sign up</div>
</Button>

<div>
<p>Have an account? <a href="#" className='text-cyan-600'>Log in</a></p>
</div>
</form>
</div>
</div>
</div>

  )
}

export default Signup
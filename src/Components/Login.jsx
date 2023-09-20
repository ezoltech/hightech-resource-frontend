import React from 'react'
import { Button } from 'flowbite-react'
import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebookCircle} from 'react-icons/bi'
const Login = () => {
  return (

          <div className='bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-3% from-green-100 to-emerald-100 to-90%'>
<div className='max-w-[280px] mx-auto'>
<div className=' flex flex-col items-center mt-[10vh]'>
<h1 className='mb-5 text-col text-3xl file:items-center'>RES.SHERE</h1>
<div>

<Button className="bg-[#1da1f2] mb-4 flex flex-row-reverse space-x-4 space-x-reverse" >
<div className="mx-3"><BiLogoFacebookCircle /></div>
<div className="mr-10">Sign in with Facebook</div>

</Button>


<         Button className="bg-[rgba(168,194,204,0.2)] mx-2">
            <div className="mx-3"><FcGoogle/></div>
            < div className="text-black mr-11">sign in with Google</div>
         </Button>
</div>
<p>or</p>

<h2 className=''>Sign up with your email address</h2>
<div>
<form class="mt-8 space-y-6" action="#">
<div>
<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input type="email" name='email' id='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 " placeholder="name@gmail.com"/>

</div>
<div>
<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
<input type="password" name='password' id='password' placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 "/>

</div>
            
      <Button className="flex flex-row gap-2 mx-20">

           <div className="">sign up</div>

       </Button>
</form>
</div>
</div>
</div>
</div>

  )
}

export default Login
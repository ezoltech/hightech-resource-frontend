import React from 'react'
import { Button } from 'flowbite-react'
import {BiLogoFacebookCircle} from "react-icons/bi";
import {FcGoogle} from "react-icons/fc";
 const Signup = () => {
  return (
    <div>
                 <div className='justify-center items-center mx-auto'>
<div className='flex flex-col mt-2 space-y-6 items-center'>
<Button className="bg-[#1da1f2] flex flex-row-reverse space-x-4 space-x-reverse" >

<div className="mx-3"><BiLogoFacebookCircle /></div>
<div className="mr-10">Sign in with Facebook</div>

</Button>

<Button className="bg-[rgba(168,194,204,0.2)] ">

<div className="mx-3 "><FcGoogle/></div>
<div className="text-black mr-11">sign in with Google</div>

</Button>
<p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>

<div className='mt-3 space-y-6" action="#"'>

<div>
<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input type="email" name='email' id='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 " placeholder="name@gmail.com"/>
</div>
<div>
<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Creat a Password</label>
<input type="password" name='password' id='password' placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-150 "/>
</div>
</div>

<Button className="flex flex-row mt-5 center gap-2">
<div>Log in </div>
</Button>
</div>
    </div>
    </div>
    )
}

export default Signup
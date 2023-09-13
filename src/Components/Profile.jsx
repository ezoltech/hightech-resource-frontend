import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className='container flex justify-center mt-20' >
                <img className='rounded-full  w-48' src="./images/div.png" alt="" />

                <div className='m-11'>
                    <h1 className='text-4xl font-black'>NAME DEVELOPER</h1>
                    <p className='text-xl'>Empowering student with collaborative <br /> platform</p>
                    <p className='text-green-600/100'>@resdev</p>
                    <div className='flex mt-2 gap-3' >
                        <button className='bg-green-600/100 p-2' type='button'>Edit profile</button>
                        <img className='rounded-full w-8' src="./images/javascript.png" alt="" />
                        <img className='rounded-full w-8' src="./images/php.png" alt="" />
                        <img className='rounded-full w-8' src="./images/react.png" alt="" /></div>
                </div>

            </div>
        </div>
    )
}

export default Profile
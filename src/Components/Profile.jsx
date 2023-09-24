import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className='container flex justify-center mt-20' >
                <img className='rounded-full w-1/6 h-auto' src="./images/div.png" alt="" />

                <div className='m-11'>
                    <h1 className='text-4xl font-black'>NAME DEVELOPER</h1>
                    <p className='text-xl'>Empowering student with collaborative <br /> platform</p>
                    <p className='text-green-300/100'>@resdev</p>
                    <div className='flex mt-2 gap-3' >
                        <button className='bg-green-300/100  p-2' type='button'>Edit profile</button>
                        <img className='rounded-full sm:w-2 md:w-3 lg:w-4 xl:w-8' src="./images/javascript.png" alt="" />
                        <img className='rounded-full sm:w-2 md:w-3 lg:w-4 xl:w-8' src="./images/php.png" alt="" />
                        <img className='rounded-full sm:w-2 md:w-3 lg:w-4 xl:w-8' src="./images/react.png" alt="" /></div>
                </div>

            </div >

            <div className='flex flex-wrap justify-center gap-6'>
                <div className='card flex  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6  mt-12 h-auto rounded-md shadow-lg border-2 shadow-black-500'>
                    <div className='m-8'>
                        <h1 className='text-xl'>General information/basic info</h1>
                        <p className='text-lg'>
                            The most important aspect of computer science is problem solving, an essential skill for life. Students study the design, development and analysis of software and hardware used to solve problems in a variety of business, scientific and social contexts.
                        </p>
                        <button className='mt-4 ml-11 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6  border-2 p-1 rounded-md overflow-auto shadow-black-500' type='button'>Stanford university</button>
                        <button className='mt-4 ml-11 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6  border-2 p-1 rounded-md overflow-auto shadow-black-500' type='button'>Stanford university</button>
                        <button className='mt-4 ml-11  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 border-2 p-1 rounded-md overflow-auto shadow-black-500' type='button'>Stanford university</button>
                        <button className='mt-4 ml-11  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 border-2 p-1 rounded-md overflow-auto shadow-black-500' type='button'>Stanford university</button>
                        <button className='mt-4 ml-11  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 border-2 p-1 rounded-md overflow-auto shadow-black-500' type='button'>Stanford university</button>
                        <button className='mt-4 ml-11  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 border-2 p-1 rounded-md overflow-auto shadow-black-500' type='button'>Stanford university</button>

                    </div>
                </div>


                <div className='card flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6  mt-12 h-auto rounded-md shadow-lg border-2 shadow-black-500'>
                    <div className='m-8'>
                        <h1>Skills</h1>
                        <p>javascript</p><img className='rounded-full w-8' src="./images/javascript.png" alt="" />
                        <p>php</p> <img className='rounded-full w-8' src="./images/php.png" alt="" />
                        <p>react</p> <img className='rounded-full w-8' src="./images/react.png" alt="" />
                    </div>
                </div>
            </div>


            <div className='card flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-4/6 ml-auto mr-auto mt-12 h-32 rounded-md shadow-lg border-2 shadow-black-500' >
                <form action="">
                    <label for="files" class="btn">Upload</label>
                    <input id="files" className='invisible' type="file"></input>
                </form>
                {/* <button type='fil'>upload</button> */}
            </div>

            <div className='card flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-4/6 ml-auto mr-auto mt-12 h-auto rounded-md shadow-lg border-2 shadow-black-500'>
                <div className='m-2'>
                    <h1 className='font-bold'>project</h1>
                    <h1 className='mt-4 font-bold'>Empowering Student with collaborative platform</h1>
                    <p className='mt-4'>Student practice at their own place.first filling in gaps in their <br /> understanding and then acclerating their learining</p>
                    <h1 className='mt-4 font-bold'>Empowering student with collabrative platform</h1>
                    <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem itaque molestiae recusandae eaque id fugit earum explicabo inventore laborum ratione voluptatum facilis ipsa perferendis ipsam, expedita consequuntur est? Expedita, nostrum!</p>
                </div>
            </div>

            <div className='card flex  w-full bg-blue-200 mt-12 h-60 shadow-lg border-2 shadow-black-500'>
                <div className='m-8 p-8 border-r-2 border-black'>
                    <h1>RES SHARE</h1>
                    <h2 className='mt-4'>Our Mission</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptatum ex aliquam <br /> consectetur atque earum officiis debitis ad, harum, perspiciatis  iure eos enim <br /> fuga illum culpa, labore quaerat reprehenderit cupiditate!</p>
                </div>
                <div className='flex gap-20 m-8 p-8'>
                    <div className='flex flex-col '>
                        <h1 className='font-bold'>product </h1>
                        <a href="" className='mt-4'>product</a>
                        <a href="">product</a>
                        <a href="">product</a>
                        <a href="">product</a>
                        <p className='mt-2'>@2010- 2020 privacy-term</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold'>company</h2>
                        <a href="" className='mt-4 '>Company</a>
                        <a href="">Company</a>
                        <a href="">Company</a>
                        <a href="">Company</a>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Profile

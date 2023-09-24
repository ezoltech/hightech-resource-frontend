const SideBar = () => {
    return (
        <div className='flex'>
            <div className='border border-indigo-800 w-60 h-4/6 ml-8 fixed top-36 bg-white-900 shadow-lg shadow-cyan-500'>
                <div> <img className="w-8" src="./images/left.png" alt="" />
                </div>

                <div className='flex flex-col mt-4'>
                    <p className='ml-4'>DEPARTMENT</p>
                    <button className='mt-4 mr-24' type='button'>Computer Science</button>
                    <button className='mt-4 mr-20' type='button'>Accounting & Finance</button>
                    <button className='mt-4 mr-20' type='button'>Software Engineering</button>
                    <button className='mt-4 mr-30' type='button'>MY ACCOUNT</button>
                    <button className='mt-4 mr-44' type='button'>Profile</button>
                </div>
            </div>

            {/* Content */}
            {/* Add your content here */}

        </div>
    );
}

export default SideBar;
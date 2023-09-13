import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col items-center w-full h-full justify-center'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-center text-4xl font-bold'>
                    <p>Hi, I'm Fatih. Nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p className='sm:text-left text-center'>I am passionate about building well-designed websites and creating reusable components. I have a strong programming and computer background. I have many projects I built on my own. I have a good knowledge of Cyber Security and Pyhon too. I have a good grasp of secure coding.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
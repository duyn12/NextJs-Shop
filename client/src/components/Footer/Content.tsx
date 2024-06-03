import React from 'react'

export default function Content() {
  return (
    <div className='bg-foreground pt-[30%] pb-12 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end text-white'>
            <h1 className='text-[4vw] leading-[0.8] mt-10'>Footer</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2 text-white'>
                <h3 className='mb-2 uppercase '>About</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2 text-white'>
                <h3 className='mb-2 uppercase '>Xã hội</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>GitHub</p>
                <p>Publications</p>
            </div>
        </div>
    )
}
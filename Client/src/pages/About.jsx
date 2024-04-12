import React from 'react'
import Bg from '../assets/BackgroundHEX.png'
const About = () => {
  return (
    <div>
      <div className='relative'>
        <img className='rotate-180 w-full h-2/4' src={Bg} alt="" />
        <h1 className='absolute  text-[50px] lg:text-[96px] underline font-semibold top-[48px] left-[40px] lg:top-[200px] lg:left-[80px'>About Us</h1>
        <div className='mx-[40px] lg:mx-[176px] w-auto text-center lg:text-[30px] space-y-[40px] lg:space-y-[112px]'>
          <p className=''>At HackPro InfoSolutions, we believe that cybersecurity is not just a necessity but a fundamental right in today's digital age. With the increasing prevalence of cyber attacks, it's crucial for individuals and businesses to stay ahead of potential threats. That's where we come in.</p>
          <p className=''>Our team comprises seasoned cybersecurity professionals and ethical hackers who are passionate about sharing their expertise and insights with aspiring cybersecurity enthusiasts. With years of experience in the field, we understand the ever-evolving landscape of cybersecurity and tailor our courses to equip you with practical, real-world skills. Whether you're a beginner looking to start your journey in cybersecurity or a seasoned professional seeking advanced training, we have a wide range of courses to cater to your needs. From ethical hacking and digital forensics to network security and cryptography, our comprehensive curriculum covers various aspects of cybersecurity to ensure you're </p>
          <p>Check out our courses <span className='text-blue-500'>here</span></p>
        </div>
      </div>
    </div>
  )
}

export default About
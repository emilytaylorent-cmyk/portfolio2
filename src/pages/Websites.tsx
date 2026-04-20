
import '../index.css'

import FlowLeft from "../assets/pictures/FlowerTop.svg"
import FlowRight from "../assets/pictures/FlowerFlowRight.svg"
import PicFlower from "../assets/pictures/FlowerSkewRight.svg"
import Sunset from "../assets/pictures/Sunset2.jpg"
import SectionHolder from '../components/SectionHolder'
import FlowerFlowSection from '../components/FlowerFlowSection'
import SkillSec from '../components/SkillSec'
import FlowerLeft from "../assets/pictures/FlowerSkewLeft.svg"
import FlowerRight from "../assets/pictures/FlowerSkewRight.svg"
import Linked from "../assets/pictures/LinkedinIcon.svg"
import Email from "../assets/pictures/EmailIcon.svg"

function About() {

  return (
    <div className='max-w-[100vw]'>

      {/* custom flower flow section */}
      <div className='max-w-370 mx-auto mt-[-20]'>
        <img src={FlowLeft} />
        <h2 className='text-center text-[24px] font-["Kameron"] font-bold'>Creating quality websites <br /> that are beautiful and functional <br /> for your business.</h2>
        <img src={FlowRight} />
      </div>

      <SectionHolder>
        <div className='flex flex-row justify-between pt-[5%]'>
          <div className='w-[40%] gap-[20]'>
            <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Meet the Designer</h2>
            <p className='font-["Kameron"] text-[18px] leading-loose'>A small town Christian with a big heart, I’ll deliver a beautiful and usable solution for your business' website.</p>
            <p className='font-["Kameron"] text-[18px] leading-loose pt-3'>UX / UI Design is my specialty, especially with my keen eye for detail and empathy for users. I enjoy creating websites, upkeeping them, and refining them. </p>
            <p className='font-["Kameron"] text-[18px] leading-loose pt-3'>I love people, and all people deserve to have things that work. It is my mission to create quality designs that are accesssible, beautiful, and functional!</p>
          </div>

          <div className='w-[50%] relative flex justify-center items-center'>
            <img src={PicFlower} width='200' className='absolute -right-20 top-0' />
            <img src={Sunset} width='500' height='200' />
          </div>
        </div>
      </SectionHolder>

      <FlowerFlowSection>
        <h2 className='font-["Kameron"] font-bold text-[24px] text-center leading-loose pb-5 mt-[-40]'>Skills</h2>

        <div className='flex flex-row justify-between'>

          <SkillSec title="Technical">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>SEO Optimization</li>
            <li>React Native</li>
            <li>Python</li>
          </SkillSec>

          <img src={FlowerLeft} width='100' />

          <div className='w-40% flex flex-col gap-4'>
            <SkillSec title="Design">
              <li>Figma</li>
              <li>Adobe Illustrator</li>
            </SkillSec>

            <SkillSec title="Writing">
              <li>Grammar</li>
              <li>Writing/Reading</li>
            </SkillSec>
          </div>

          <img src={FlowerRight} width='90' />

          <SkillSec title="Personal">
            <li>Attention to detail</li>
            <li>Hard-working</li>
            <li>Extravert</li>
            <li>Organized</li>
            <li>Encourager</li>
            <li>Positive</li>
            <li>Team-Worker</li>
          </SkillSec>

        </div>
      </FlowerFlowSection>


      <SectionHolder>
        <div className='flex flex-row justify-between pt-[5%]'>

          <div className='w-[50%] relative flex justify-center items-center'>
            <img src={PicFlower} width='200' className='absolute -left-20 -top-20' />
            <img src={Sunset} width='500' height='200' />
          </div>

          <div className='w-[40%] gap-[20] items-center justify-center'>
            <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Resume</h2>
            <p className='font-["Kameron"] text-[18px] leading-loose'>Want to know more? Download my resume and see details about my jobs, education, and awards!</p>
            {/* insert button here */}
            <div>Download Resume Here</div>
          </div>

        </div>
      </SectionHolder>

      <FlowerFlowSection>
        <div className='flex flex-col gap-5 items-center'>
        
        <h2 className='text-center text-[24px] font-["Kameron"] font-bold'>Contact me at <a href="mailto:emilytaylor@gmail.com" className='underline'>emilytaylor@gmail.com</a> or follow me on <a href="www.linkedin.com/in/emily-taylor-1a145138b" className='underline'>LinkedIn!</a></h2>
        <div className='flex flex-row gap-3 items-center'>
        <a href="www.linkedin.com/in/emily-taylor-1a145138b"><img src={Linked} width='70' className='hover:fill-[#F1D6E0]' /></a>
        <a href="mailto:emilytaylor@gmail.com"><img src={Email}  width='70'/></a>
        </div>
        </div>
      </FlowerFlowSection>


    </div>
  )
}

export default About

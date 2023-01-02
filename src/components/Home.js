import styled from "styled-components"
import  Navbar  from "./Navbar";
import Slider from "./Slider";


const HomeWrapper = styled.div`
background: #efefef;
`;

const HeroSectionWrap = styled.section`
height: 103vh;
z-index: 15;
position: relative;
bottom: 72px;

@media (min-width: 1024px) {
  height: 100vh;
}
`;


const Home = props => {
  return (
    <HomeWrapper>
       <Navbar className='z-50 relative mb-10' />
       <HeroSectionWrap>
          <img
            src="./MyImg2.png"
            alt='background'
            className='w-full h-full invisible'
          />
		   </HeroSectionWrap>
       <Slider></Slider>
    </HomeWrapper>
   
    // <div className="h-screen w-full bg-zinc-200 flex flex-col justify-between">
    //   <div className="grid  md:flex  m-auto">
    //     <div className="flex flex-col mb-[60%] justify-center  w-full px-2 py-8">
    //       <p className="text-2xl">Hello, my name  is <span/></p>
    //       <h1 className="md:text-6xl text-5xl py-4 font-bold">Samuel Fajobi.</h1>
    //       <h4 className="text-2xl pb-4">I am a Full Stack Devloper!!</h4>
    //       <button className="bg-blue-500 py-3 sm:w-[60%]">Resume</button>
    //     </div>
    //     <div className="">
    //       <img className="ml-[8%] pb-[250%] " src="./MyImg2.png" alt=""/>
    //     </div>  
    //   </div>
    // </div>
  )
}

export default Home;
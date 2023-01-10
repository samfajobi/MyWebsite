import JavaScript from '../assets/images/images/skills/javascript.png';
import ReactJs from '../assets/images/images/skills/react-80.png';
import TypeScript from '../assets/images/images/skills/typescript-96.png';
import Amazon from '../assets/images/images/skills/amazon.png';
import CSS3 from '../assets/images/images/skills/css3.png';
import Git from '../assets/images/images/skills/gitIcon.png';
import Redux from '../assets/images/images/skills/redux-96.png';
import GitHub from '../assets/images/images/skills/iconGithub.png';
import NodeJs from '../assets/images/images/skills/node-js-96.png'


const skills = (props) => {
  return (
    <div className="h-[700px]  mt-16 bg-slate-100  space-y-10" {...props}> 
        <h1 className=" text-center pt-20 font-bold capitalize text-3xl ">Languages & Skills</h1>
        <div  className='flex flex-col   justify-between justify-items-center   '>
          <div className='space-y-10 items-center'>
            <div className="flex flex-row justify-center space-x-8 md:space-x-20">
              <div className=""> 
                <img className='bg-slate-200' src={JavaScript}/> 
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={CSS3}/>
                <h2 className='text-center'>Javascript</h2>         
              </div> 
              <div> 
                <img className=' bg-slate-200' src={TypeScript}/>
                <h2 className='text-center'>Javascript</h2> 
              </div>    
            </div>
            <div className="flex flex-row justify-center space-x-8 md:space-x-20">
              <div > 
                <img className=' bg-slate-200' src={ReactJs}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={Git}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={NodeJs}/>
                <h2 className='text-center'>Javascript</h2> 
              </div>   
            </div>
            <div className="flex flex-row justify-center space-x-8 md:space-x-20">
              <div > 
                <img className=' bg-slate-200' src={Redux}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={Amazon}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={GitHub}/>
                <h2 className='text-center'>Javascript</h2> 
              </div>   
            </div>
          </div>
        </div>  
    </div>
  )
}

export default skills
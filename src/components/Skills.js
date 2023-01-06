import JavaScript from '../assets/images/images/skills/javascript.png'


const skills = (props) => {
  return (
    <div className="h-[700px] mt-16 bg-slate-100  space-y-10" {...props}> 
        <h1 className="text-4xl text-center  font-semibold ">Skills & Experience</h1>
        <div  className='flex flex-col  md:flex-row justify-center'>
          <div className='space-y-10 md:mx-10 '>
            <div className="flex flex-row justify-center space-x-8">
              <div > 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2> 
              </div>   
            </div>
            <div className="flex flex-row justify-center space-x-8">
              <div > 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2> 
              </div>   
            </div>
            <div className="flex flex-row justify-center space-x-8">
              <div > 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2>       
              </div> 
              <div> 
                <img className=' bg-slate-200' src={JavaScript}/>
                <h2 className='text-center'>Javascript</h2> 
              </div>   
            </div>
          </div>
        
          <div>
            Div for Experience 
          </div>
        </div>  
    </div>
  )
}

export default skills
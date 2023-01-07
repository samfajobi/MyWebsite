import JavaScript from '../assets/images/images/skills/javascript.png'


const skills = (props) => {
  return (
    <div className="h-[700px] mt-16 bg-slate-100  space-y-10" {...props}> 
        <h1 className="text-4xl text-center  font-semibold ">Skills & Experience</h1>
        <div  className='flex flex-col space-y-10 md:grid-cols-2 md:flex-row justify-center'>
          <div className='space-y-10 md:mx-10 md:items-start'>
            <div className="flex flex-row justify-center  space-x-8">
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
        
          <div  className='flex flex-col space-y-10 justify-between'>
            <div className='flex flex-row'>
              <h4>2018</h4>
              <div>
                <h4>FullStack Developer</h4>
                <p>Precise Platform</p>
              </div>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default skills
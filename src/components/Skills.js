import JavaScript from '../assets/images/images/skills/javascript.png'


const skills = () => {
  return (
    <div className="h-[700px] mt-16 bg-slate-100 flex flex-col space-y-10"> 
        <h1 className="text-4xl text-center text-4xl font-semibold ">Skills & Experience</h1>
        <div className='space-y-10'>
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
  )
}

export default skills
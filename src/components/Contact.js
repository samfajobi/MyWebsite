import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const contact = () => {
  return (
    <div className=" h-[600px] bg-gray-900 flex relative flex-col text-center
     md:text-row items-center px-10 justify-evenly mx-auto">
       <h2 className="text-center text-white text-4xl font-semibold">Take Coffee and Chat With Me!!!</h2>
      
        <div className=" space-y-10 ">
            <div className='flex flex-col items-center md:space-x-6 md:flex-row'>
              <div className='rounded-md w-[300px] bg-slate-200 flex pt-4 pb-4 align-center items-center space-x-4 justify-center'>
                <PhoneIcon className='w-7 h-7'/>
                <h4>08153382359</h4>
              </div>
              <div className='rounded-md w-[300px] mt-6 md:mt-0 bg-slate-200 flex pt-4 pb-4 items-center space-x-4 justify-center'>
                <EnvelopeIcon className='w-7 h-7'/>
                <h4>olusegunfajobi12@gmail.com</h4>
              </div>
            </div>
            <div>
              <form className='flex flex-col space-y-6'>
                <div className='flex space-x-3' > 
                  <input type="text" />
                  <input type="text" />
                </div> 

                <input type="text" />
                
                <textarea />
                <button className='rounded-md font-bold  py-5 bg-slate-300'>Submit</button>
              </form>  
            </div>          
        </div>
    </div>
  )
}

export default contact
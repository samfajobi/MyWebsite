import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const contact = () => {
  return (
    <div className="flex relative flex-col text-center
     md:text-row items-center px-10 justify-evenly mx-auto">
       <h2 className="text-center pt-12 text-2xl font-semibold">Take Coffee and Chat With Me!!!</h2>
      
        <div className="flex flex-row space-x-10 pt-8 ">
           <div>
              <div className='rounded-md w-[300px] bg-slate-200 flex pt-4 pb-4 align-center items-center space-x-4 justify-center'>
                <PhoneIcon className='w-7 h-7'/>
                <h4>08153382359</h4>
              </div>
              <div className='rounded-md w-[300px] mt-4 align-center bg-slate-200 flex pt-4 pb-4 items-center space-x-4 justify-center'>
                <EnvelopeIcon className='w-7 h-7'/>
                <h4>olusegunfajobi12@gmail.com</h4>
              </div>
           </div>    
        </div>
    </div>
  )
}

export default contact
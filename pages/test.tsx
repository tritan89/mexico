'use client';


import { createBookingRequest} from '@/app/lib/actions';


export default function Test() {
    return (
        <div className="w-sw flex-col items-center justify-center">
        <form action={createBookingRequest} className="max-w-sm mx-auto">
            <label htmlFor="firstname" className="border-3 mr-2 p-1">
            First Name:
          </label>
           <input type="text" id="firstname" name="firstname" className='border-2 rounded' />
           <button type="submit" className='p-2 border-2 rounded'>Submit</button>
        </form>
        
        <h1>Test</h1>
        </div>
    )
}
// 'use client';
// import 'tailwindcss/tailwind.css';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction'; // for selectable
// import Link from 'next/link';
// import { promises as fs } from 'fs';
// import { FormEvent, useState } from 'react';
// import { createBookingRequest} from '@/app/lib/actions';
// import { ShowUsers, CheckFreeDate } from '@/pages/api/users';


// export default function Calendar({ data }: { data: any }) {
//   const [dateStart, setStart] = useState();
//   const [dateEnd, setEnd] = useState();
//   const [dateObj, setDateObj] = useState();

//   function handleSelect(arg: any) {
//     setStart(arg.startStr);
//     setEnd(arg.endStr);
//     setDateObj(arg);
//   }
//   const 



//   return (
//     <div className="w-sw flex-col items-center justify-center">
//       <h1 className="p-10 text-center text-5xl">Book your stay</h1>

//       <form action={createBookingRequest} className="max-w-sm mx-auto">
//         <div className=' grid-cols-1  w-5/12 p-2'>

       
       
//           <label htmlFor="firstname" className="border-3 mr-2 p-1">
//             First Name:
//           </label>
//           <input type="text" id="firstname" name="firstname" className='border-2 rounded' />
        
        
//           <label htmlFor="lastname" className="border-3 mr-2 p-1">
//             Last Name:
//           </label>
//           <input type="text" id="lastname" name="lastname" className='border-2 rounded' />
        
        
//           <label htmlFor="email" className="border-3 mr-2 p-1">
//             Email:
//           </label>
//           <input type="text" id="email" name="email" className='border-2 rounded'/>
       
        
//           <label htmlFor="number" className="border-3 mr-2 p-1">
//             Number:
//           </label>
//           <input type="text" id="number" name="number" className='border-2 rounded'/>
//           <label htmlFor="start">Start Date:</label>
//           <input type="date" id="start" value={dateStart}/>
//           <label htmlFor="end">End Date:</label>
//           <input type="date" id="end" value={dateEnd} />
        
//         <button type="submit" className='p-2 border-2 rounded'>Submit</button>
        
//         </div>
        
//       </form>

//       <div className="flex items-center justify-center">
//         <div className="w-6/12">
//           <FullCalendar
//             plugins={[dayGridPlugin, interactionPlugin]}
//             initialView="dayGridMonth"
//             events={data}
//             selectable={true}
//             selectOverlap={false}
//             select={handleSelect}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

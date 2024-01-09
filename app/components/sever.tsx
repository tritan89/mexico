import { promises as fs } from 'fs';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



export async function getStaticprops() {
  const file = await fs.readFile(process.cwd() + '/app/data/dates.json', 'utf8');
  
  const data =  JSON.parse(file);
  return {
    props: {
      data
    }
  }
}

export default async function Cal({ data }: { data: any }) {
 
  console.log(data.then());


  return (<FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    events={data}
  />);
}





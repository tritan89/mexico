import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { promises as fs } from 'fs';
import { FormEvent, useState } from 'react';
import { set } from 'zod';


export async function getStaticProps() {
  const file = await fs.readFile(
    process.cwd() + '/app/data/dates.json',
    'utf8',
  );

  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
}

export default function Calendar({ data }: { data: any }) {
  const [dateStart, setStart]= useState();
  const [dateEnd, setEnd]= useState();  
  const [dateObj, setDateObj]= useState();

  function handleSelect(arg: any) {
    setStart(arg.startStr)
    setEnd(arg.endStr)
    setDateObj(arg)
    
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();
   
    const formData = new FormData(event.currentTarget);
    
     const selected = {title: formData.get('form1'), start: dateStart, end: dateEnd, className: "success"}
     const selectedJson = JSON.stringify(selected);
     const response = await fetch('/api/submit', {
      method: 'POST',
      body: selectedJson,
    });
    console.log(selectedJson);
  }

  return (
    <div className="w-sw flex items-center justify-center">
      <div className="p-20 flex items-center">
        
        <div className="p-20 flex items-center">
        start: {dateStart} 
        end: {dateEnd}
        
      </div>
        <form onSubmit={onSubmit}>
          <input type="text" name='firstname' />
          <input type="text" name='lastname' />
          <input type="text" name='email' />
          <input type="text" name='number'/>
          <input type="text" name="form1" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1 className='text-5xl'>Calendar</h1>
      <div className="w-6/12 p-10">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={data}
          selectable={true}
          selectOverlap={false}
        
          select={handleSelect}
        />
      </div>
    </div>
  );
}

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { promises as fs } from 'fs';
import { FormEvent } from 'react';

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
  function handleDateClick(arg: any) {
    alert(arg.dateStr);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
  }

  return (
    <div className="w-sw">
      <div className="p-20">
        <h1>Calendar</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="w-6/12 p-10">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={data}
          selectable={true}
          selectOverlap={false}
          dateClick={handleDateClick}
        />
      </div>
    </div>
  );
}

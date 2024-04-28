import { sql } from "@vercel/postgres";

import { start } from "repl";



export async function ShowUsers({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from USERS `;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name} - {row.email}
        </div>
      ))}
    </div>
  );
}

export async function CheckFreeDate({
    params
    } : {
    params: { date: Date }
    }): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from BOOKINGS `;
    const valid_date = rows.map((row) => {
        
        console.log(row.start_date);
        const start : Date = row.start_date;
        const end : Date = row.end_date;
        const date = params.date;
        console.log(start);
        console.log(end);
        if (date >= start && date <= end) {
            
            return "Date is not available";
        }
        else {

            return "Date is available";
        }

    });
    
    return (
        
        <div>
        

            {valid_date}
        </div>
    );
    }


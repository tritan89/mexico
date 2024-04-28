const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      phone: '1234567890',
    },
  ];

    
const bookings = [ 
    {
        id: '410544b2-4001-4691-6955-fec4b6a6442a',
        customer_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        start_date: '2022-01-01',
        end_date: '2022-01-02',
        status: 'PENDING',
        date_booked: '2021-12-01',
        paid: false,
        },
];




const requests = [
    {
        id: '410544b2-4001-4691-9855-fec4b6a6442a',
        customer_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        start_date: '2022-01-01',
        end_date: '2022-01-02',
        status: 'PENDING',
        date_requested: '2021-12-01',
     
        },
];

module.exports = { users, bookings, requests };
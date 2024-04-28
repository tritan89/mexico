const { db } = require('@vercel/postgres');
const {
  bookings,
  requests,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        
        return client.sql`
        INSERT INTO users (id, name, email, phone)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.phone})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedBookings(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "bookings" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    date_booked DATE NOT NULL,
    paid BOOLEAN NOT NULL DEFAULT FALSE
  );
`;

    console.log(`Created "Bookings" table`);

    // Insert data into the "bookings" table
    const insertedBookings = await Promise.all(
      bookings.map(
        (booking) => client.sql`
        INSERT INTO bookings (customer_id, start_date, end_date, status, date_booked, paid)
        VALUES (${booking.customer_id}, ${booking.start_date},${booking.end_date}, ${booking.status}, ${booking.date_booked}, ${booking.paid})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBookings.length} bookings`);

    return {
      createTable,
      bookings: insertedBookings,
    };
  } catch (error) {
    console.error('Error seeding bookings:', error);
    throw error;
  }
}

async function seedRequests(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "requests" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS requests (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        customer_id UUID NOT NULL,
        status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
        date_requested DATE NOT NULL
      );
    `;

    console.log(`Created "requests" table`);

    // Insert data into the "requests" table
    const insertedRequests = await Promise.all(
      requests.map(
        (request) => client.sql`
        INSERT INTO requests (id, start_date, end_date, date_requested, customer_id, status)
        VALUES (${request.id}, ${request.start_date}, ${request.end_date}, ${request.date_requested}, ${request.customer_id}, ${request.status})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRequests.length} requests`);

    return {
      createTable,
      requests: insertedRequests,
    };
  } catch (error) {
    console.error('Error seeding requests:', error);
    throw error;
  }
}



async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedRequests(client);
  await seedBookings(client);
 

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

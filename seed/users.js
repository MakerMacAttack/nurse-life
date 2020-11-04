const db = require('../db/connection')
const User = require('../models/users')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = 
    [
      {
        name:
        {
          first: "Bob",
          last: "Bobson",
        },
        gender: "Male",
        password: "admin",
        birthday:
        {
          year: 1991,
          month: 02,
          day: 29,
        },
        work:
        {
          institution: "General Hospital",
          state: "Colorado",
          city: "Denver",
        },
        contact:
        {
          phone: "212-555-1234",
          email: "me@domain.ext"
        },
        privacy:
        {
          anonymous: false,
          locationServices: false,
        }
      }
      ]

    await User.insertMany(users)
    console.log("Created users!")
}
const run = async () => {
    await main()
    db.close()
}

run()
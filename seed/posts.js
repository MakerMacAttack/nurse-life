const db = require('../db/connection')
const Post = require('../models/posts')
const User = require('../models/users')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const user1 = new User({
    name:
    {
      first: "Ted",
      last: "Baxter",
    },
    gender: "Female",
    password: "nimrod",
    birthday:
    {
      year: 1969,
      month: 08,
      day: 05,
    },
    work:
    {
      institution: "St. Elsewhere",
      state: "Michigan",
      city: "Ypsilanti",
    },
    contact:
    {
      phone: "806-454-6666",
      email: "name@site.com"
    },
    privacy:
    {
      anonymous: false,
      locationServices: false,
    }
  })
      await user1.save()
  
    const posts = 
    [
      {
        user: user1,
        content: "first post",
        imgURL:
          "https://developer.nvidia.com/sites/default/files/akamai/embedded/images/2018-power-up-logo-promo.jpg",
      }
      ]

    await Post.insertMany(posts)
    console.log("Created posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()
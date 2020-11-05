import { getUsers } from '../client/src/services/Users'

const db = require('../db/connection')
const Post = require('../models/posts')

const testUser = getUsers()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = 
    [
      {
        user: testUser[0],
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
const db = require('../db/connection')
const Post = require('../models/posts')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = 
    [
      {
        name: "mac",
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
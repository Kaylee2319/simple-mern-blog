const express = require('express')
const router = express.Router()
const Article = require('./article.model')
const { response } = require('express')

router.get('/:articlesId', (req, response) => {
    Article.findById(req.params.articleId, (err, article) => {
        if(err){
            console.log(err)
            response.status(400).json(err)
        } else {
            if(!article) {
                response.sendStatus(410)
            }
            else {
                response.status(200).json(article)
            }
        }
    })
   })
 

router.post('/', (req, response) => {
   Article.create(req.body, (error, article) => {
       if(error) {
           console.log(`Error creating Article, ${new Date()}: ${error}`)
           response.status(400).json(error)
      } else {
          console.log(req.body)
          console.log(article)
          response.status(201).json(article)
      }
   })
  })

module.exports = router;

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser())

const messages = []

app.get('/', (req, res, next) => {
    res.render('home', { messages })
})

app.route('/publish')
    .get((req, res, next) => {
        // 渲染发布留言表单页面
        res.render('publish')
    })
    .post((req, res, next) => {
        const now = (new Date()).toLocaleDateString()
        messages.push({
            name: req.body.name,
            content: req.body.content,
            date: now
        })
        res.redirect('/')
    })
app.listen('8081', () => {
    console.log('正在监听8081端口')
})
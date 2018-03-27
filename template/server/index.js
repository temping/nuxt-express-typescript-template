const express = require('express') 
const { Nuxt, Builder } = require('nuxt')

//express app
const app = express()

// Nuxt를 인스턴스화 합니다.
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })

// 컴파일을 실행합니다.
if (!isProd) {
  const builder = new Builder(nuxt)
  
  builder.build()
  .catch(reason=>{
    console.log(`Server nuxt build error\n${reason}`)
  })
}

app.use(nuxt.render)

app.listen(3000,()=>{
  console.log('Server is listening on http://localhost:3000')
})
import Fastify from 'fastify'
import {env} from './config/env.js'

const app = Fastify({logger:true})

app.listen({port:env.PORT}).then(()=>{
    console.log('Server is running')
})

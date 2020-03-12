const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

const { ms1 } = require('./services/microservicesOne')

app.use(koaBody())
app.use(async (ctx, next) => {
  //console.log(ctx.request.body)
  if('/signup' == ctx.path) {
    const { data } = await ms1.post(`/create`, ctx.request.body);
    
    ctx.body = data
  } else {
    await next()
  }
});

app.listen(3002);
console.log('run')

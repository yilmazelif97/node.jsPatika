const Koa = require('koa');

var router = require('koa-router')

const app = new Koa();

var _ = router();

_.get('/iletisim', getmessage());

function getmessage(){
    this.body="iletisim page"
};

_.get('/hakkimda', getmessage2());

function getmessage2(){
    this.body="hakkimda page"
};



app.use(async ctx => {
  ctx.body = 'index World';
});

app.use(_.routes());

app.listen(3000);


//app.use is for adding middleware

//ctx --> context ; request ve response u bir çatı altında birleştiriyor.
const http = require('http');

//web sunucu oluştururken request ve response objeleri kullanılr.

const server = http.createServer((req,res)=>{

    const url = req.url;

    if(url === '/about'){
        res.write("<h2>About Page hoşgeldiniz <h2>");
    }
    else if(url ==='/'){
        res.write("<h2>home Page hoşgeldiniz <h2>")
    }
    else{
        res.write("<h2>Contact page hoşgeldiniz <h2>")
    }

    console.log('bir istek gönderildi');
    res.end();
});

//sunucu için kendi pcmiz kullanılacako yüzden hangi port olduğunu yazmalısın.

//port bilgisi değişkene atanıyor
const port =5000;

server.listen(port,()=>{
    console.log( `sunucu ${port} da başlatıldı`)
});


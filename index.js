const http=require("http");const s=http.createServer((q,r)=>{r.writeHead(200);r.end("Coming soon.");});s.listen(process.env.PORT||3000);

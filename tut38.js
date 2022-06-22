const http = require('http');

const fs = require('fs');
const { url } = require('inspector');

const hostname = "127.0.0.1";
const port = 3000;

const home = fs.readFileSync('home.html')

const about = fs.readFileSync('about.html')

const contacts = fs.readFileSync('contact.html')

const services = fs.readFileSync('services.html')

const server = http.createServer((req, res)=>{
    console.log(req.url)
      let url = req.url;
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      if(url =='/' || url =='/home.html'){
          res.end(home);
      } 
      else if(url == '/about.html'){
        res.end(about)
      }
      else if(url == '/services.html'){
        res.end(services)
      }
      else if(url == '/contact.html'){
        res.end(contacts)
      }
      else{
        res.statusCode = 404;
        res.end(`<h4>404 not found</h4`)
      }

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
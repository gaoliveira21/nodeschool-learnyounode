const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const routes = new Routes(req, res);

  routes.get('/api/parsetime', (request, response) => {
    const { iso } = request.query;

    const date = new Date(iso);

    const parsedTime = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(JSON.stringify(parsedTime));

  });

  routes.get('/api/unixtime', (request, response) => {
    const { iso } = request.query;

    const date = new Date(iso);

    const unixTime = {
      unixtime: date.getTime()
    };

    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(JSON.stringify(unixTime));
  });

});

class Routes {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.urlParser = new url.URL(req.url, `http://localhost:${port}`);
  }

  get(path, callback) {
    if(this.urlParser.pathname === path && this.req.method == 'GET') {
      this.req.query = url.parse(this.req.url, true).query;
      callback(this.req, this.res);
    }
  }
}

server.listen(port);

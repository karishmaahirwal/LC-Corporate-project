const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`);
  console.log("Database connected successfully");

}); 
import * as express from "express";
import * as dotenv from "dotenv";
import { Router } from "./routes/router";
import * as projectInformation from "./package.json";


const projectVersion = projectInformation.version;
const projectAuthor = projectInformation.author;

console.log(
    "*************" + 
    "\n*\n" + 
    `Project Version: ${projectVersion}` + 
    "\n" + 
    `Project Author: ${projectAuthor}` + 
    "\n*\n*" + 
    "*************"
);

let startServer = async() => {
    //initialize enviroment variables
    dotenv.config();

    const port = parseInt(process.env.SERVER_PORT);
    if(!port){
        throw "No port configured for the server. You can solve this by inserting one enviroment variable called SERVER_PORT(And it MUST be a number)";
    }

    const app = express();
    const router = new Router(app);
    await router.initializeRoutes().then((controllers) => {
        controllers.map((controller) => {
            console.log(`${controller} Controller have been initialized`);
        })
    });
    
    app.listen(port, () => {
        console.log(`Server listening in: ${port}`);
    });    
}
startServer();

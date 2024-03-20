const express = require("express");
const fs = require('fs'); 
const puppeteer = require("puppeteer");
const app = express();
const port = 4000;
const content = fs.readFileSync("./ssr.html","utf-8").toString();
app.get("/ssr", async(req,res) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();


    await page.setContent(content, {
        waitUntil: ["domcontentloaded"],
    });

    const fullHTML = await page.content();
    res.send(fullHTML);
});





app.listen(port, ()=>{
 console.log(`Example Server side app running on: ${port}`);
});

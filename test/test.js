const bodyParser = require('body-parser');
const request = require("supertest");
const router = require("../routes/index");
const express = require("express");

const app = express(); //an instance of an express app, a 'fake' express app

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", router); //routes

describe("GET /", () => {
    it("respond with Hello World", (done) => {
        request(app).get("/").expect("Hello World From Afeka College!", done);
    })
});

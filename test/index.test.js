const chai = require("chai");
const app = require("../index")
const request = require("supertest");

chai.should();

describe("GET /test ", ()=> {
    it("it should test endpoint", (done)=> {
        request(app).get("/test").then((err, res)=> {
            if(err) throw err;
            res.should.have.status(200)
        })

        done()
    })
})
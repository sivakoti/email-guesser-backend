const req = require("supertest");
const app = require("../src/app");

describe("Testing email guesser api with all edge cases", () => {
    it("should return 200 and email address with first_name_initial_last_name for the valid babbel domain", async () => {
        const res = await req(app).post("/api/v1/email-guesser").send({
            fullName: "Nina Simons",
            companyDomain: "babbel.com"
        })

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({email: "nsimons@babbel.com"})
    });

    it("should return 200 and email address with first_name_last_name for the valid linkedin domain", async () => {
        const res = await req(app).post("/api/v1/email-guesser").send({
            fullName: "Priya Kuber",
            companyDomain: "linkedin.com"
        })

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({email: "priyakuber@linkedin.com"})
    });

    it("should return 200 and email address with first_name_last_name for the valid google domain", async () => {
        const res = await req(app).post("/api/v1/email-guesser").send({
            fullName: "Matthew Hall",
            companyDomain: "google.com"
        })

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({email: "matthewhall@google.com"})
    });

    it("should return 404 and error message for the invalid slideshare domain", async () => {
        const res = await req(app).post("/api/v1/email-guesser").send({
            fullName: "Robert Miller",
            companyDomain: "slideshare.net"
        })

        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({message: "unable to guess email based on given domain name"})
    });
    
})
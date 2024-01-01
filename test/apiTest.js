const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Note API', () => {
  it('should create a new note', (done) => {
    chai.request(app)
      .post('/notes')
      .send({ title: 'Test Note', content: 'This is a test note.' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', 'Test Note');
        done();
      });
  });

  it('should retrieve all notes', (done) => {
    chai.request(app)
      .get('/notes')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  
});

const {expect} = require('chai')
const knex = require('knex')
const app = require('../src/app')

describe('Articles Endpoints', function() {
    let db
    //create a knex instance to connect to the test db
    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    //clear any data so that we have a fresh start
    before('clean the table', () => db('blogful_articles').truncate())

    //disconnect from the db so that the tests don't 'hang'
    after('disconnect from db', () => db.destroy())

    
})
const { Client } = require('pg')

class SqlHandler {
    constructor() {
        this.client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'greentest',
            password: 'qwe123',
            port: 5432
        })

        this.client.connect()
    }

    handleDb = async (data) => {
        await this.client.connect()
    
        const res = await this.client.query('INSERT INTO attempt (Temp, Press) VALUES ($1, $2);', [20, 210])
        console.log(res.rows)
        await this.client.end()
    }

    getData = async () => {
        const res = await this.client.query('SELECT Temp, Press FROM attempt;', [])
        return res.rows
    }
}

module.exports = SqlHandler
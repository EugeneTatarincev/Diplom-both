const { Client } = require('pg')

class SqlHandler {
    constructor() {
        this.client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'tables',
            password: 'qwe123',
            port: 5432
        })

        this.client.connect()
    }

    __makeValues = (len) => {
        let point = 1
        let res = ''
        while(point <= len) {
            if (point != len) {
                res += '$' + point + ', '
            }
            else {
                res += '$' + point 
            }
            point++
        }
    
        return res
    }

    setData = async (table ,data, cols) => {
        let values = this.__makeValues(cols.length)
        let from = cols.join()
        console.log(values)
        console.log(from)
        const res = await this.client.query(`INSERT INTO ${table} (${from}) VALUES (${values});`, data)
    }

    getData = async (table, cols) => {
        let from = cols.join()
        const res = await this.client.query(`SELECT ${from} FROM ${table};`, [])
        return res.rows
    }

    getMails = async () => {
        const res = await this.client.query('SELECT Mail FROM users;', [])
        return res.rows
    }

    getDataByMail = async (email) => {
        const res = await this.client.query(`SELECT id, Mail, Password FROM users WHERE Mail = '${email}';`)
        return res.rows
    }

    joinSensorDataById = async (id) => {
        const res = await this.client.query(`SELECT sensor.name, sensor.type, sensordata.data FROM sensor INNER JOIN sensordata ON sensordata.id=sensor.id WHERE sensor.id = '${id}';`, [])
        return res.rows
    }

    // Проверяем есть ли в таблице с блоками блок (подлючили ли мы его к тсп серверу и бд)

    getDataById = async (id) => {
        const res = await this.client.query(`SELECT id FROM cb WHERE id = '${id}';`)
        return res.rows
    }

    // Проверка на то записывали ли мы этот блок уже на пользователя

    getIsWritten = async (idUs, idCb) => {
        const res = await this.client.query(`SELECT id_cb FROM cbtouser WHERE id_user = '${idUs}' AND id_cb = '${idCb}';`)
        return res.rows
    }

    getDataByUser = async (id) => {
        const res = await this.client.query(`SELECT id_cb FROM cbtouser WHERE id_user = '${id}';`)
        return res.rows
    }

    getSensorsByBlock = async (id) => {
        const res = await this.client.query(`SELECT id_sensor from cbtosensor WHERE id_cb = '${id}';`, [])
        return res.rows
    }
}

module.exports = SqlHandler
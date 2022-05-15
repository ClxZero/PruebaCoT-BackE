import { Injectable } from '@nestjs/common';
const { Pool } = require("pg");
require('dotenv').config();

const config = {
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
    max: 20,
    min: 5,
    idleTimeoutMillis: 20000,
    connectionTimeoutMillis: 4000,
};

const Singleton = (() => {
    let instance;
    const createInstance = () => {
        var classObj = new Pool(config);
        return classObj;
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
                console.log("Pool created");
            }
            else {
                console.log("Pool already exists");
            }
            return instance;
        },
    };
})();


const pool = Singleton.getInstance();




@Injectable()
export class AppService {
  getDiez = async () => {

    const userQuery = {
        text: "SELECT * FROM log LIMIT 10",
    };

    try {
        const user = await pool.query(userQuery);
        return user.rows

    } catch (error) {
        throw error
    };

};


testSesionActiva = async () => {

    const userQuery = {
        text: "SELECT * FROM log WHERE fecha BETWEEN '2017-02-24 00:00:00' AND '2017-02-27 23:59:59' ORDER BY fecha ASC",
    };
//AND userid = 1 
    try {
        const user = await pool.query(userQuery);
        return user.rows

    } catch (error) {
        throw error
    };

};

queryPorFecha = async (fechafull) => {
    
let fechas = [];
fechas.push(`${fechafull.slice(0,10)} 00:00:00`);
fechas.push(`${fechafull.slice(11)} 23:59:59`);
console.log(fechas)
    const userQuery = {
        text: "SELECT * FROM log WHERE fecha BETWEEN $1 AND $2 ORDER BY fecha ASC",
        values: fechas
    };

    try {
        const user = await pool.query(userQuery);
        return user.rows

    } catch (error) {
        throw error
    };

};

}

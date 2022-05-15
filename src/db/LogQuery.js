const res = require("express/lib/response");
const PoolSingleton = require("./Pooldb");
const pool = PoolSingleton.getInstance();

const getDiez = async () => {

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

const testSesionActiva = async () => {

    const userQuery = {
        text: "SELECT * FROM log WHERE fecha BETWEEN '2017-02-24 00:00:00' AND '2017-02-24 18:59:59' AND userid = 1 LIMIT 10",
    };

    try {
        const user = await pool.query(userQuery);
        return user.rows

    } catch (error) {
        throw error
    };

};

module.exports = {
    getDiez,
    testSesionActiva
}
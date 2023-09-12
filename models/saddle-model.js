
const pool = require('.././config/saddle-config');

const addSaddle = (body) => {
    const { type, size, color, weight, description, price, saddle_name } = body;
    console.log('A new saddle has been added');

    return new Promise(async (reject, resolve) =>{
        pool.query('INSERT INTO saddle (type, size, color, weight, description, price, saddle_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ', 
        [type, size, color, weight, description, price, saddle_name], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows[0]);
            }
        });
    });
};

module.export = {
    addSaddle,
}
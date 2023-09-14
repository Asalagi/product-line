
const { request } = require('express');
const pool = require('.././config/saddle-config');

const getSaddles = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM saddle ORDER BY id ASC', (error, results) => {
          if (error) {
            reject(error);
          } else {
          resolve(results.rows);
        }
    });
 });
};

const addSaddle = (body) => {
    const { type, size, color, weight, description, price, saddle_name } = body;
    console.log('A new saddle has been added');

    return new Promise(async (resolve, reject) =>{
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

const deleteSaddle = (id) => {
    return new Promise(async (resolve, reject) => {
        const id =  parseInt(request.params.id);
        pool.query('DELETE FROM saddle WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(`Saddle with ${id} has been deleted`);
            }
        });
    });
}

module.exports = {
    getSaddles,
    addSaddle,
    deleteSaddle,
}
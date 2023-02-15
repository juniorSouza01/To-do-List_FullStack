const connection = require('./connectionconnection');

const getAll = () => {
    const tasks = connection.execute('SELECT * FROM tasks');
};

module.exports = {
    getAll
};
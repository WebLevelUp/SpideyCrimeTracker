import {Connection, Request} from 'tedious';

let config = {
    server: process.env.DB_HOST,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
    authentication: {
        type: "default",
        options: {
            userName: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        }
    }
};

export let connection = new Connection(config);

export function executeStatement(query, params = []) {
    let request = new Request(query, function (err, rowCount) {
        if (err) {
            console.error('Request error:', err);
        } else {
            console.log(`${rowCount} rows`);
            connection.close();
        }
    });

    request.on('row', function (columns) {
        const rowValues = columns.map((column) => `${column.metadata.colName}: ${column.value}`);
        console.log('Row:', rowValues.join(', '));
    });

    for (let param of params) {
        request.addParameter(param.name, param.type, param.value);
    }

    connection.execSql(request);
}
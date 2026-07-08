import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const db = new Sequelize(
    process.env.BD_NOMBRE,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        host: process.env.BD_HOST,
        port: Number(process.env.BD_PORT) || 3306,
        dialect: 'mysql',

        define: {
            timestamps: true
        },

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        dialectOptions: {
            ssl:
                process.env.BD_SSL === 'true'
                    ? {
                        minVersion: 'TLSv1.2'
                    }
                    : undefined
        }
    }
);

export default db;
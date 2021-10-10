module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cars_and_drivers',
  entities: ['dist/**/*.model.js'],
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

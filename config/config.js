// {
//   "development": {
//     "database": "WorkTrack_db",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "database": "WorkTrack_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "database": "WorkTrack_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }

require('dotenv').config()
module.exports = {
  development: {
    database: 'WorkTrack_db',
    dialect: 'postgres'
  },
  test: {
    database: 'WorkTrack_db',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

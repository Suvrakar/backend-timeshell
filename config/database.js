module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'dpg-clthoq21hbls73efdgrg-a'), // Hostname
        port: env.int('DATABASE_PORT', 5432), // Port
        database: env('DATABASE_NAME', 'timeshell'), // Database name
        username: env('DATABASE_USERNAME', 'suvra'), // Username
        password: env('DATABASE_PASSWORD', 'luqoAYpLbLSPsUkUKCWJWz7q1xfSDi2E'), // Password
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});

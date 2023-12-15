    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'timeshell-db'),
          user: env('DATABASE_USERNAME', 'suvra'),
          password: env('DATABASE_PASSWORD', 'luqoAYpLbLSPsUkUKCWJWz7q1xfSDi2E'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });
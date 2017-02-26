const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3000,
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379/0',
  PG_CONFIG: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PW,
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
    max: 10,
    idleTimeoutMillis: 30000,
  },
  SESSION_SECRET: process.env.SESSION_SECRET,
};

module.exports = config;

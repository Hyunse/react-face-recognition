export default {
  dev: {
    name: 'cappic',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: 'localhost',
    port: process.env.DB_PORT
  }
};

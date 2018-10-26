import DBConfig from '../config/config_db';
import pg from 'pg-promise';

class DBUtils {
  private static pgp;

  private static getConnection() {
    this.pgp = pg();
  }

  private static end() {
    this.pgp.end();
  }

  static async connect() {
    const connectionString = `postgres://${DBConfig.dev.user}:${
      DBConfig.dev.password
    }@${DBConfig.dev.server}:${DBConfig.dev.port}/${DBConfig.dev.name}`;

    try {
      this.getConnection();

      const db = this.pgp(connectionString);
      const data = await db.any('select * from tests');

      this.end();

      return data;
    } catch (error) {
      return error;
    }
  }
}

export default DBUtils;

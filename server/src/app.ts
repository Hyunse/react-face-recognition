import express from 'express';
// Routes
import homeRoute from './routes/route_home';

class App {
  public express;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  // Mount Routes
  private mountRoutes (): void {
    this.express.use(homeRoute);
  }
}

export default new App().express;
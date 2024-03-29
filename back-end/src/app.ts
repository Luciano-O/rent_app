import * as express from 'express';
import errorMiddleware from './middlewares/ErrorMiddleware';
import productsRouter from './routes/products';
import rentsRouter from './routes/rents';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import usersRouter from './routes/users';
import swaggerConfig from './docs/swagger.config';

class App {
  public app: express.Express;

  public swaggerDoc: any

  constructor() {
    this.app = express();

    this.swaggerDoc = swaggerJsDoc(swaggerConfig)

    this.config();

  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDoc))
    this.app.use(accessControl);
    this.app.use(productsRouter);
    this.app.use(usersRouter);
    this.app.use(rentsRouter);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();

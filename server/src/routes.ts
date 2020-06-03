import express, { Router, request, response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

export default routes;

/*
Padrões de Rotas:
index - listar todos
show - lista uma única coisa
create - criar
update - atualizar
delete - deletar

*/
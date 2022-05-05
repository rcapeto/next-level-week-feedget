import { Router } from 'express';

import { FeedbacksController } from '../controller/FeedbacksController';

export const route = Router();

const feedbackController = FeedbacksController.getInstance();

route.post('/', feedbackController.create);
route.get('/', feedbackController.getAll);
route.get('/:id', feedbackController.getOne);
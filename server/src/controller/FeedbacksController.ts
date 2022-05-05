import { Request, Response } from 'express';

import { config } from '../config';
import { manipulateRequestBody } from '../utils';
import { APIMethods } from '../@types';

import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbacks-repository';
import { GetAllFeedbackUseCase } from '../use-cases/getall-feedback-use-case';
import { GetOneFeedbackUseCase } from '../use-cases/getone-feedback-use-case';
import { ErrorAdapter } from '../adapters/error-adapter';
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter';

const errorController = new ErrorAdapter();
const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

export class FeedbacksController implements APIMethods {
   private static INSTANCE: FeedbacksController;

   private constructor() {}

   public static getInstance() {
      if(!this.INSTANCE) {
         this.INSTANCE = new FeedbacksController();
      }
      return this.INSTANCE;
   }

   async create(request: Request, response: Response) {
      const { emptyFields, hasEmptyField } = manipulateRequestBody(request.body, 'screenshot');
      
      if(hasEmptyField) {
         return response.status(config.status.bad_request).json({
            error: true,
            errorMessage: 'Please fill all fields',
            emptyFields,
         });
      }

      const { type, comment, screenshot } = request.body;

      try {
         const emailAdapter = new NodemailerMailAdapter();
         const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, emailAdapter);

         await submitFeedbackUseCase.execute({ type, comment, screenshot });
   
         return response.status(config.status.created).json({ data: { message: 'Created with success!' }});
      } catch(err) {
         return errorController.renderError(response, err as Error);
      }
   }

   async getAll(request: Request, response: Response) {
      try {
         const getAllFeedbackUseCase = new GetAllFeedbackUseCase(prismaFeedbacksRepository);

         const feedbacks = await getAllFeedbackUseCase.execute();
         return response.status(config.status.ok).json({ data: feedbacks });

      } catch(err) {
         return errorController.renderError(response, err as Error);
      }
   }

   async getOne(request: Request, response: Response) {
      const { id } = request.params;

      try {
         const getOneFeedbackUseCase = new GetOneFeedbackUseCase(prismaFeedbacksRepository);

         const feedback = await getOneFeedbackUseCase.execute(id);

         return response.status(config.status[feedback ? 'ok' : 'not_found']).json({
            data: feedback
         });

      } catch(err) {
         return errorController.renderError(response, err as Error);
      }
   }
}
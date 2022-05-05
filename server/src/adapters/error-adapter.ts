import { Response } from 'express';

import { config } from '../config';

export interface IErrorAdapter {
   renderError: (response: Response, error: Error) => void;
}

export class ErrorAdapter implements ErrorAdapter {
   constructor() {}
   
   renderError(response: Response, error: Error) {
      return response.status(config.status.internal_server_error).json({
         error: true,
         errorMessage: 'Internal Server Error',
         message: error.message
      });
   }
};
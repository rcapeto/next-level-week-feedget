import { Feedback } from '@prisma/client';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

export class GetAllFeedbackUseCase {
   constructor(private feedbacksRepository: FeedbacksRepository) {}

   async execute(): Promise<Feedback[]> {
      return await this.feedbacksRepository.getAll();
   }
}; 
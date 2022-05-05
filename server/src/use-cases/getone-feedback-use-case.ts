import { Feedback } from '@prisma/client';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

export class GetOneFeedbackUseCase {
   constructor(private feedbacksRepository: FeedbacksRepository) {}

   async execute(id: string): Promise<Feedback | null> {
      return await this.feedbacksRepository.getOne(id);
   }
}; 
import { Feedback } from '@prisma/client';
import { MailAdapter } from '../adapters/mail-adapter';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

interface SubmitFeedbackUseCaseRequest {
   type: string;
   comment: string;
   screenshot?: string;
}

export class SubmitFeedbackUseCase {
   constructor(
      private feedbacksRepository: FeedbacksRepository,
      private mailAdapter: MailAdapter
   ) {}

   async execute({ comment, type, screenshot }: SubmitFeedbackUseCaseRequest): Promise<void> {
      if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
         throw new Error('Invalid screenshot format');
      }

      if(!comment) {
         throw new Error('Comment is required!');
      }

      if(!type) {
         throw new Error('Type is required!');
      }

      await this.feedbacksRepository.create({ comment, type, screenshot });

      await this.mailAdapter.sendEmail({
         subject: 'Novo Feedback',
         body: [
            '<div style="font-family: sans-serif; font-size: 16px; color: #222;">',
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            screenshot ? `<img src="${screenshot}" alt="${comment}"/>` : '',
            '</div>',
         ].join('\n')
      });
   }
}; 
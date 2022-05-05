import { SubmitFeedbackUseCase } from "../use-cases/submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
   { 
      create: createFeedbackSpy, 
      getAll: async () => { return [] }, 
      getOne: async () => { return { comment: '', id: '', screenshot: '', type: '' }} 
   }, 
   { sendEmail: sendEmailSpy }
);

describe('Create feedback', () => {
   it('should be able to submit a feedback', async () => {
      await expect(submitFeedback.execute({
         comment: 'Random comment',
         type: 'BUG',
         screenshot: 'data:image/png;base64-test.jpg'
      })).resolves.not.toThrow();

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendEmailSpy).toHaveBeenCalled();
   });
   it('should not be able to submit a feedback without type', async () => {
      await expect(submitFeedback.execute({
         comment: 'Random comment',
         type: '',
         screenshot: 'data:image/png;base64-test.jpg'
      })).rejects.toThrow();
   });
   it('should not be able to submit a feedback without comment', async () => {
      await expect(submitFeedback.execute({
         comment: '',
         type: 'BUG',
         screenshot: 'data:image/png;base64-test.jpg'
      })).rejects.toThrow();
   });
   it('should not be able to submit a feedback with an invalid screenshot', async () => {
      await expect(submitFeedback.execute({
         comment: 'Random comment',
         type: 'BUG',
         screenshot: 'test.jpg'
      })).rejects.toThrow();
   });
});
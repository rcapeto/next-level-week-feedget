import api from './api';
import { FeedbackType } from '../utils/feedbackTypes';

const apiPath = '/feedbacks';

interface Feedback {
   comment: string;
   screenshot: string | null;
   type: FeedbackType;
};

interface FeedbackAPI extends Feedback {
   id: string;
};

interface APIResponse<T> {
   data: T
};

export const submitFeedback = async (feedback: Feedback) => {
   await api.post(apiPath, feedback);
};

export const getAllFeedbacks = async (): Promise<FeedbackAPI[]> => {
   const { data: response } = await api.get<APIResponse<FeedbackAPI[]>>(apiPath);
   return response.data;
};

export const getOneFeedback = async (id: string): Promise<FeedbackAPI> => {
   const { data: response } = await api.get<APIResponse<FeedbackAPI>>(`${apiPath}/${id}`);
   return response.data;
};
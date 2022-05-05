import { Feedback } from "@prisma/client";

export interface FeedbackCreateData {
   screenshot?: string;
   type: string;
   comment: string;
};

export interface FeedbacksRepository {
   create: (data: FeedbackCreateData) => Promise<void>;
   getAll: () => Promise<Feedback[]>;
   getOne: (id: string) => Promise<Feedback | null>;
}
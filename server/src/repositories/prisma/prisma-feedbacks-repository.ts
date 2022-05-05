import { prisma } from '../../database/prisma';

import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
   async create ({ type, comment, screenshot }: FeedbackCreateData) {
      await prisma.feedback.create({
         data: { type, comment, screenshot }
      });
   }

   async getAll() { 
      return await prisma.feedback.findMany();
   };

   async getOne(id: string) {
      return await prisma.feedback.findUnique({
         where: { id },
      });
   }
};
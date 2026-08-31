import { z } from 'zod';
import { baseEntitySchema, linkSchema } from '../common';

export const teamMemberSchema = baseEntitySchema.extend({
  name: z.string(),
  role: z.string(),
  bio: z.string().optional(),
  avatar: z.string().optional(),
  socials: z.array(linkSchema).default([]),
});
export type TeamMember = z.infer<typeof teamMemberSchema>;

import type { TeamMember } from '@agency/types';
import { content } from './client';

export async function getTeam(): Promise<TeamMember[]> {
  const { items } = await content.team.list({ sortBy: 'order', sortOrder: 'asc', limit: 50 });
  return items;
}

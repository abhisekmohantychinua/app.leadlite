import type { LeadStage } from '../models/lead';

export interface LeadUpdateRequest {
  title?: string;
  value?: number;
  stage?: LeadStage;
  tags?: string[];
}

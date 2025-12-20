import type { Lead } from '../models/lead';

export interface StagedLeads {
  newLeads: Lead[];
  contactedLeads: Lead[];
  proposalLeads: Lead[];
  closedLeads: Lead[];
}

export type UserStatus = 'pending' | 'approved' | 'deny' | 'suspended';
export type UserRole = 'user' | 'vetter' | 'admin';

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  status: UserStatus;
  role: UserRole;
  skills: string[];
  interests: string[];
}

export interface Opportunity {
  id: string;
  org_id: string;
  title: string;
  description: string;
  is_one_time: boolean;
  event_time?: string;
  estimated_hours: number;
  deadline: string;
  milestones: string[];
  project_lead_id?: string;
}

export interface OrganizationMember {
  id: string;
  user_id: string;
  org_id: string;
  member_status: 'pending_approval' | 'active';
  can_manage_projects: boolean;
  proof_of_affiliation?: string;
}

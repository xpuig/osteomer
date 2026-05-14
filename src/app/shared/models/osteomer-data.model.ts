export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
}

export interface OsteomerData {
  treatments: Treatment[];
  team: TeamMember[];
}

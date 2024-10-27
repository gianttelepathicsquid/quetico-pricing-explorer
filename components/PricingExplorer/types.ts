import { LucideIcon } from 'lucide-react';

export interface PricingDetail {
  name: string;
  range: string;
  avg: string;
}

export interface ServiceCategory {
  id: number;
  title: string;
  icon: LucideIcon;
  details: PricingDetail[];
}

export interface ServiceCardProps {
  service: ServiceCategory;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export interface PricingExplorerProps {
  // Add any props if needed for the main component
}

// src/types/navigation.ts
export interface NavigationLink {
  url: string;
  label: string;
  paths?: NavigationLink[];
  isVisible?: boolean;
}

export interface BreadcrumbItem {
  url: string;
  label: string;
}

export interface MenuItem extends NavigationLink {
  icon?: string;
  badge?: string;
}
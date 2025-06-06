// src/types/navigation.ts
export interface NavigationLink {
  url: string;
  label: string;
  paths?: NavigationLink[];
  isVisible?: boolean;
  isComingSoon?: boolean;
}

export interface BreadcrumbItem {
  url: string;
  label: string;
}

export interface MenuItem extends NavigationLink {
  icon?: string;
  badge?: string;
}
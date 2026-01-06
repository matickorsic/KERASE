import React from 'react';

export enum LegalPage {
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS',
  COOKIES = 'COOKIES',
  COMPANY_INFO = 'COMPANY_INFO',
  NONE = 'NONE'
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}
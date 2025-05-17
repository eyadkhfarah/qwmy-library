export interface NavLink {
    id: number;
    title: string;
    link: string;
}

export interface FooterLink {
    id: number;
    title: string;
    link: string;
}

export interface Tab {
    id: number;
    name: string;
    slug: string;
}

export interface SearchListProps {
    searchOpen: boolean;
    setSearchOpen: (open: boolean) => void;
    className?: string;
}

export interface NavListProps {
    btn: boolean;
    setBtn: (open: boolean) => void;
    className?: string;
}

// Import statements needed at the top of the file
import { KeyboardEvent, ChangeEvent, ReactNode } from 'react';
import { Document, Block, Inline, Text } from '@contentful/rich-text-types';
import { Entry } from 'contentful';
import { MetaTag } from 'next-seo/lib/types';

// Contentful Types
export interface Author {
  fields: {
    name: string;
  };
}

export interface Book extends Entry<{
  title: string;
  slug: string;
  type: string;
  author: Author;
}> {}

export interface ImageFile {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface CV extends Entry<{
  name: string;
  slug: string;
  type: string;
  image: ImageFile;
  info: Document;
  title?: string;
  // Additional fields from CVDeatils
  ifPerson: boolean;
  date: string;
  location: string;
  position?: string[];
  ifDied?: boolean;
  deathDate?: string;
  facebook?: string;
  twitter?: string;
  website?: string;
}> {}

// Props Types
export interface BooksProps {
  books: Book[];
}

export interface CVProps {
  cvs: CV[];
}

export interface CVDetailsProps {
  cv: CV;
}

export interface QuoteProps {
  children: ReactNode;
}

// Component Props
export interface CVDetailsComponentProps {
  cv: CV;
  className?: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    type: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
      type: string;
    }>;
  };
  additionalMetaTags?: MetaTag[];
}

// Event Types
export interface SearchEvents {
  onSearch: (searchText: string, typeValue: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

// Utility Types
export interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

// Rich Text Types
interface Mark {
  type: 'bold' | 'italic' | 'underline' | 'code';
}

export interface TextContent {
  value: string;
  nodeType: 'text';
  marks: Mark[];
}

export interface RichTextNode {
  nodeType: string;
  content: Array<{
    nodeType: string;
    content?: Array<TextContent>;
    data?: {
      uri?: string;
    };
  }>;
  data?: {
    uri?: string;
  };
} 
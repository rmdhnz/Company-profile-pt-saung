export type Item = { label: string; value: string };

export type Division = 'marine' | 'industrial' | 'safety';

export type CapabilityCardData = {
  title: string;
  description: string;
  items: string[];
  division: Division;
};

export type ContentCard = [title: string, body: string];

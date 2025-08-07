
export enum Audience {
  GENERAL = 'GENERAL',
  INVESTOR = 'INVESTOR',
  SCHOOL = 'SCHOOL',
  EDUCATOR = 'EDUCATOR',
  PARTNER = 'PARTNER',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SlideData {
    id: string;
    title?: string;
    subtitle?: string;
    mainText: string;
    imageUrl?: string;
    bulletPoints?: string[];
    details?: {
        title: string;
        text: string;
        items?: string[];
    };
    bgColor?: string;
    textColor?: string;
}

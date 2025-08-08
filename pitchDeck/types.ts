
export enum Persona {
  INVESTOR = 'INVESTOR',
  SCHOOL = 'SCHOOL',
  EDUCATOR = 'EDUCATOR',
  PARTNER = 'PARTNER',
}

export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  keyMessage: string;
  dataPoints?: { icon: React.ReactNode; text: string; detail?: string }[];
  visuals?: { type: 'image' | 'logos' | 'testimonial' | 'chart' | 'team' | 'funds' | 'partners' | 'key-metrics' | 'luminous-text' | 'video-text-mask'; content: any };
  notes?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
  sources?: { uri: string; title: string }[];
}

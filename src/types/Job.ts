export default interface IJob {
    id: string;
    title: string;
    jobTitle: string;
    location: string;
    postTimeStamp: number; // Unix timestamp in seconds
    desc: string;
    priceType: 'Fixed-price' | 'Hourly';
    budget?: number; // in USD, only present for Fixed-price job postings
    hourRate?: {
      min: number; // in USD
      max: number; // in USD
    }; // only present for Hourly job postings
    projectLength?: string; // expressed in months, only present for Hourly job postings
    proposals: string;
    level: 'Entry level' | 'Intermediate' | 'Expert';
    levelDesc: string;
    projectType: 'One-time' | 'Ongoing';
    skills: string[];
  }
  
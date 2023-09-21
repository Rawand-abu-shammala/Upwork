export default interface IUser {
    id: string;
    token: string;
    username: string;
    photo: string;
    location: string;
    job_title: string;
    hourly_rate: number;
    overview: string;
    portfolio: PortfolioItem[];
    skills: string[],
    searchHistory: string[],
    savedJobs: string[]
}

interface PortfolioItem {
    description: string;
    image: string;
}
import axios from "axios"
import IUser from "@/types/user"

export const getRandomUser = async (id: string, username: string, token: string) => {
    const { data } = await axios.get("https://randomuser.me/api?limit=1");
    const result = data.results[0];
    const user: IUser = {
        id,
        username,
        hourly_rate: Math.round(Math.random() * 20) + 5,
        job_title: "front end developer",
        location: result.location.city,
        overview: "software engineering student at Islamic university of Gaza level 4, frontend developer for three years, I worked on several projects as a React.js front-end developer.",
        photo: result.picture.large,
        portfolio: [{
            description:"landing page",
            image:"https://assets-global.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png"
        }],
        searchHistory: [],
        savedJobs: [],
        skills: ["react", "js", "css"],
        token
    }

    return user;
}
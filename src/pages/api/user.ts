import Api from "./axios";

import IUser from "types/user";

const getUserById = async (id: string) => {
    const { data } = await Api.get(`users?id=${id}`);
    return data[0];
}

export const updateAvatar = async (image: string, id: string) => {
    const user = await getUserById(id);
    user.photo = image;
    const { data } = await Api.put(`users/${id}`, user);
    return data;
}

export const updateJobTitle = async (job_title: string, id: string) => {
    const user = await getUserById(id);
    user.job_title = job_title;
    const { data } = await Api.put(`users/${id}`, user);
    return data;
}

export const updateOverview = async (overview: string, id: string) => {
    const user = await getUserById(id);
    user.overview = overview;
    const { data } = await Api.put(`users/${id}`, user);
    return data;
}

export const updateHourlyRate = async (hourly_rate: number, id: string) => {
    const user = await getUserById(id);
    user.hourly_rate = hourly_rate;
    const { data } = await Api.put(`users/${id}`, user);
    return data;
}

export const addToPortfolio = async (image: string, description: string, id: string) => {
    const user: IUser = await getUserById(id);
    user.portfolio.push({
        image,
        description
    })

    const { data } = await Api.put(`users/${id}`, user);
    return data;
}

export const updateSkills = async (skills: string[], id: string) => {
    const user = await getUserById(id);
    user.skills = skills;
    const { data } = await Api.put(`users/${id}`, user);
    return data;
}

export const addToSearchHistoryApi = async (query: string, id: string) => {
    const user: IUser = await getUserById(id);
    user.searchHistory = [...user.searchHistory, query];
    const { data } = await Api.put(`users/${id}`, user);
    return data;
}


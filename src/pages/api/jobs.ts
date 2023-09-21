import Api from "./axios";

export const getJobById = async (id: string) => {
    const { data } = await Api.get(`jobs?id=${id}`);
    return data[0];
}

export const getBestMatchJobs = async () => {
    const { data } = await Api.get("jobs?_limit=10");
    return data;
}

export const getMostRecentJobs = async () => {
    const { data } = await Api.get("jobs?_sort=postTimeStamp&_order=desc&_limit=10");
    return data;
}

export const searchInJobs = async (q: string, page: number, pageSize: number) => {
    const { data, headers } = await Api.get(`jobs?q=${q}&_page=${page}&_limit=${pageSize}`);
    const totalCount = parseInt(headers['x-total-count']);
    return { data, resultsCount: totalCount };
}

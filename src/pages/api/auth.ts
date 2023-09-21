import Api from "./axios";
import IApiResponse from 'types/apiResponse';
import { nanoid } from "nanoid";
import { getRandomUser } from "utils/getRandomUser";
import IUser from "types/user";

export const loginApi = async (username: string, password: string) => {
    let result: IApiResponse<IUser | null>;
    try {
        const { data } = await Api.get(`auth?username=${username}&password=${password}`);
        if (data.length > 0) {
            const { id } = data[0];
            const userData = await Api.get(`users?id=${id}`);
            result = {
                status: "SUCCESS",
                data: userData.data[0],
                error: ""
            }
        } else {
            result = {
                status: "FAILED",
                data: null,
                error: "wrong user name or password"
            }
        }
        return result;
    } catch (error) {
        console.log("error")
        result = {
            status: "FAILED",
            data: null,
            error: "wrong user name or password"
        }
        return result;
    }
}

export const signupApi = async (username: string, password: string) => {
    let result: IApiResponse<IUser | null>;
    try {
        const isExistRes = await Api.get(`auth?username=${username}`);
        if (isExistRes.data.length > 0) {
            result = {
                status: "FAILED",
                data: null,
                error: "username already taken"
            }
            return result;
        }

        const { data } = await Api.post("auth", {
            id: nanoid(8),
            username,
            password,
            token: nanoid()
        });

        if (data) {
            const user = await getRandomUser(data.id, data.username, data.token);
            await Api.post("users", user);

            result = {
                status: "SUCCESS",
                data: user,
                error: ""
            }
        } else {
            result = {
                status: "FAILED",
                data: null,
                error: "something went wrong"
            }
        }
        return result;
    } catch (error) {
        console.log(error);
        result = {
            status: "FAILED",
            data: null,
            error: "Api error"
        }
        return result;
    }
}

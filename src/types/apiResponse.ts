export default interface IApiResponse<T> {
    status: "SUCCESS" | "FAILED",
    data: T[] | T,
    error: string
}
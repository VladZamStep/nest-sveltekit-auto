export type ApiResponse<T> = {
    result: boolean;
    data?: T;
}
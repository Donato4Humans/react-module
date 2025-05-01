import {IUser} from "./IUser.ts";

export interface IReqresInResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: Support;
}

interface Support {
  url: string;
  text: string;
}
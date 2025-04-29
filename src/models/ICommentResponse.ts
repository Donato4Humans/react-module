import {IComment} from "./IComment.ts";

export interface ICommentResponse {
    comments: IComment[];
    total: number;
    skip: number;
    limit: number;
}
import { AxiosHttpClient } from "../infra/axios-http-client";
import { PostsService } from "./posts-service";

const httpClient = new AxiosHttpClient("https://jsonplaceholder.typicode.com");
export const postsService = new PostsService(httpClient);


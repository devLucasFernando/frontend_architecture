import { HttpClient } from "../infra/axios-http-client";
import { Post } from "../models/post";

export class PostsService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    if (!httpClient) {
      throw new Error("HttpClient é obrigatório");
    }
    this.httpClient = httpClient;
  }

  async getAllPosts(): Promise<Post[]> {
    return this.httpClient.get<Post[]>("/posts");
  }

  async getPostById(id: number): Promise<Post> {
    return this.httpClient.get<Post>(`/posts/${id}`);
  }

  async createPost(newPost: Omit<Post, "id">): Promise<Post> {
    return this.httpClient.post<Omit<Post, "id">, Post>("/posts", newPost);
  }

  async updatePost(id: number, updatedPost: Partial<Post>): Promise<Post> {
    return this.httpClient.put<Partial<Post>, Post>(`/posts/${id}`, updatedPost);
  }

  async deletePost(id: number): Promise<void> {
    return this.httpClient.delete<void>(`/posts/${id}`);
  }
}

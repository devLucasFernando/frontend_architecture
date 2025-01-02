import { Post } from "@/models/post";
import { postsService } from "@/service"
import { useQuery } from "@tanstack/react-query"

interface UsePostsModel {
  posts: Post[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const usePostsModel = (): UsePostsModel => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => postsService.getAllPosts(),
  });

  return {
    posts: data,
    isLoading,
    error,
  };
};
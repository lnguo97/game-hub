import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (genre: Genre | null) =>
  useData<Game>("/games", { params: { genres: genre?.id } }, [genre?.id]);

export default useGames;

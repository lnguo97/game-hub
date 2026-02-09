import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (genre: Genre | null, platform: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: genre?.id, parent_platforms: platform?.id } },
    [genre?.id, platform?.id],
  );

export default useGames;

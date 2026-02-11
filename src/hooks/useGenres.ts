import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () => {
  return { data: genres, error: null, isLoading: false };
};

export default useGenres;

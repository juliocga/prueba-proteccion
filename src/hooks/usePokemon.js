import { useQuery } from "@tanstack/react-query";


const usePokemon = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['Pokemon'],
    queryFn: async () => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then((response) => response.json());
    },
    refetchOnWindowFocus: false
  });
  return {
    pokemons: data ?? null,
    isLoadingPokemons: isLoading,
    errorPokemons: error
  };
};

export default usePokemon;
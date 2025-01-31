import { useQuery } from "@tanstack/react-query"

export const useItems = () => {
    return useQuery({
        queryKey:['CompodiumList'],
        queryFn: async () => {
            const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials');
             return response.json();
            },
            staleTime: 1000 * 60 * 5,
    });
};
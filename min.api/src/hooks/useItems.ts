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

export const UseSearch = (search:string) => {
   
    return useQuery({
        queryKey:['CompodiumList', search],
        queryFn: async () => {
            const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/entry/' + search);
            
            if (!response.ok) {
             return response.text;
            }
            return response.json();
            },
            staleTime: 1000 * 60 * 10,
    });
};

import { useInfiniteQuery } from '@tanstack/react-query';
import GithubApi from '@/data/api/github-api';
import { User } from '@/types/user';

const useSearchUsersQuery = (query: string) => {
	const githubApi = new GithubApi();
	const pageSize = 20;

	return useInfiniteQuery<User[]>(
		['githubUsers', query],
		async ({ pageParam = 1 }) => {
			if (!query.trim()) {
				return [];
			}
			const response = await githubApi.getUsers(
				`q=${query}&page=${pageParam}&per_page=${pageSize}`,
			);
			return response;
		},
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length === 0 || lastPage.length < pageSize) {
					return undefined;
				}
				return allPages.length + 1;
			},
			enabled: !!query.trim(),
			retry: 0,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
		},
	);
};

export default useSearchUsersQuery;

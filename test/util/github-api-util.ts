import { SearchEndpoint } from "../constant/search-endpoint";
import SearchResponse from "../constant/search-response";

export default class GitHubApiUtil {
    private baseUrl = 'https://api.github.com';
    private searchEndpoint = '/search';

    public async getRepositorySearchResults(query: string): Promise<SearchResponse> {
        const url = `${this.baseUrl}${this.searchEndpoint}/${SearchEndpoint.Repositories}?q=${encodeURIComponent(query)}`;
        return fetch(url).then(response => response.json());
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GithubService {
    constructor(private http: HttpClient) { }

    private baseURL = 'https://api.github.com';
    private clientID = '63ad20d7b2d8ced6e25c'
    private clientSecret = 'c24488939275949193587314c952080799864071'

    getUserDetails(username: string): Observable<any> {
        return this.http.get(`${this.baseURL}/users/${username}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
    }

    getUserRepos(username: string, page: number, max: number): Observable<any> {
        const encodedQuery: string = encodeURI(
            `user:${username} in:name sort:updated-asc`
        );
        return this.http.get(
            `${this.baseURL}/search/repositories?q=${encodedQuery}&page=${page}&per_page=${max}`
        );
    }
}

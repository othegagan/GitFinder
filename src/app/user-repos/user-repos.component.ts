import { Component, Input, OnChanges } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
    selector: 'user-repos',
    templateUrl: './user-repos.component.html',
})
export class UserReposComponent implements OnChanges {
    // Takes totalPublicRepos and username from user-details component
    @Input() totalRepos!: number;
    @Input() username!: string;

    userRepos: any = null;
    fetchingRepos: boolean = false;

    currentPage = 1;
    maxPerPage = 10;

    constructor(private githubService: GithubService) { }

    ngOnChanges(): void {
        if (this.totalRepos > 0) {
            this.currentPage = 1;
            this.fetchRepos();
        }
    }

    // Public Repos that the user owns are fetched
    fetchRepos() {
        this.reset();
        this.fetchingRepos = true;

        this.githubService
            .getUserRepos(this.username, this.currentPage, this.maxPerPage)
            .subscribe({
                next: (res) => {
                    this.userRepos = res;
                    this.fetchingRepos = false;
                },
                error: (err) => {
                    this.userRepos = null;
                    this.fetchingRepos = false;
                },
            });
    }

    // To handle pagination option change
    handlePageChange(p: any) {
        this.currentPage = p;
        this.fetchRepos();
    }

    reset() {
        this.userRepos = null;
    }

    maxRepoLimiter(): number {
        if (this.userRepos.total_count! > 1000) {
            return (this.userRepos.total_count = 1000);
        }
        return this.userRepos.total_count;
    }


}

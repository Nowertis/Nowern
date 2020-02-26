import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>("/api/posts")
      .subscribe(response => {
        this.posts = response.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };

    this.http
      .post<{ message: string }>("/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData);

        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}

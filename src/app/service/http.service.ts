import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private httpClient: HttpClient) {}

    public getMetadata(path: string): Promise<any> {
        return this.httpClient.get(path).toPromise()
    }

    public getMintHistory(): Promise<any> {
        return this.httpClient.get('/api/v1/mintedHistory').toPromise();
    }
}
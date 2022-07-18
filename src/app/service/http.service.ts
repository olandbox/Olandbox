import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cypher } from "../pages/lands/cypher";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { AlertService } from "./alert.service";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': ' application/x-www-form-urlencoded;charset=utf-8' }),
};
const httpOptionsJson = {
    headers: new HttpHeaders({ 'Content-Type': ' application/json;charset=utf-8' }),
};

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private httpClient: HttpClient, private alertService: AlertService) {}

    

    public getMetadata(path: string): Promise<any> {
        return this.httpClient.get(path).toPromise()
    }

    public getMintHistory(): Promise<any> {
        return this.httpClient.get('/api/v1/mintedHistory').toPromise();
    }

    public uploadImg(fileToUpload: File) {
        const url = '/home/a/img/img';
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post(url, formData).pipe(catchError(err => this.catchAuthError(err)))
    }

    //登陆后验证
    public test() {
        return this.httpClient.post('/a/v/test','').pipe(catchError(err => this.catchAuthError(err))).toPromise()
    }
    public noncestr(address) {
        const body = new HttpParams().set('address', address)
        return this.httpClient.post('/a/oland/noncestr', body, httpOptions).toPromise()
    }
    public login(address: string, signature: string, hexmessage: string, noncestr: string) {
        const body = new HttpParams()
        .set('address', address)
        .set('signature', signature)
        .set('hexmessage', hexmessage)
        .set('noncestr', noncestr)
        const params = {
            address: address,
            signature: signature,
            hexmessage: hexmessage,
            noncestr: noncestr
        }
        return this.httpClient.post('/a/oland/login', body, httpOptions).pipe(catchError(err => this.catchAuthError(err))).toPromise()
    }



    private catchAuthError(error): Observable<Response> {
        if (error && error.error && error.error.message) {
            this.alertService.create({
                body: error.error.message,
                color: 'danger',
                time: 5000
            })
        } else if (error && error.message) {
            this.alertService.create({
                body: error.message,
                color: 'danger',
                time: 5000
            })
        } else {
            this.alertService.create({
                body: JSON.stringify(error),
                color: 'danger',
                time: 5000
            })
        }
        return throwError(error)
    }

    // --------------neo4j数据库操作start---------------------
    
    // 数据库接口
    public toDatabase(matchQuery: string): Observable<any> {
        console.log(matchQuery)
        return this.httpClient.post('/a/oland/query', matchQuery).pipe(
            map((res: any) => {
                if (res.code === 0) {return res.data}
                else {return []}
            }),
            catchError(err => this.catchAuthError(err)),
        )
    }

    

    // 节点操作语句
    public getNodeNameByTab(tab):string {
        switch (tab) {
          case 'p':
            return 'PublicLand';
            break;
          case 'v':
            return 'VerifyLand';
            break;
          case 'o':
            return 'OwnerLand';
            break;
          default:
            return 'Project';
            break;
        }
    }
    // 匹配父节点，创建子节点，如果已存在则不添加
    public createCNodeById(params: Cypher) {
        return `MATCH ${this.setPn(params)} WHERE id(pn)=${params.id} CREATE (pn)-${this.setR(params)}->${this.setCn(params)} RETURN cn`;
    }
    // 获取映射节点
    public getMappingNode(params: Cypher) {
        return `MATCH ${this.setPn(params)}-${this.setR(params)}->${this.setCn(params)} return pn`;
    }
    // 获取父节点
    public getSingleNode(params: Cypher) {
        return `MATCH ${this.setPn(params)} RETURN pn`;
    }
    // 根据ID获取父节点的子节点
    public getChildNodesById(params: Cypher) {
        return `MATCH ${this.setPn(params)}-${this.setR(params)}->${this.setCn(params)} WHERE id(pn)=${params.id} RETURN cn`;
    }
    // 根据ID修改节点整体属性
    public updateNodeById(params: Cypher) {
        let properties = this.stringifyProperties(params.pNodeProperties);
        return `MATCH (pn) WHERE id(${params.id}) SET pn=${properties} RETURN pn`;
    }
    // 根据ID修改节点单一属性
    public updateNodePropertyById(id: number, property: string, value: string | number) {
        if (typeof(value) === 'string') {
            value = `"${value}"`
        }
        return `MATCH (pn) WHERE id(pn)=${id} SET pn.${property}=${value} RETURN pn`;
    }
    // 根据ID删除节点
    public deleteNodeById(id: number) {
        return `MATCH (pn) WHERE id(pn)=${id} DETACH DELETE pn`;
    }

    // 节点属性, object -> string
    private stringifyProperties(propertiesObj): string {
        let properties = propertiesObj ? JSON.stringify(propertiesObj) : '';
        properties = properties.replace(/"(\w+)"\s*:/g, '$1:');
        return properties;
    }
    // 依据传入参数组建父节点、关系节点和子节点的cyper语句
    private setPn(params: Cypher) {
        let properties = this.stringifyProperties(params.pNodeProperties);
        return `(pn${params.pNodeLabel ? ':'+params.pNodeLabel : ''}${properties})`
    }
    private setR(params: Cypher) {
        let properties = this.stringifyProperties(params.relationProperties);
        return `[r${params.relationType? ':'+params.relationType : ''}${properties}]`
    }
    private setCn(params: Cypher) {
        let properties = this.stringifyProperties(params.cNodeProperties);
        return `(cn${params.cNodeLabel ? ':'+params.cNodeLabel : ''}${properties})`
    }

    

    // --------------neo4j数据库操作end---------------------

}
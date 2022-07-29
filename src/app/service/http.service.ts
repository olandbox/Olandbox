import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cypher } from "../pages/lands/cypher";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject, throwError } from 'rxjs';
import { AlertService } from "./alert.service";
import { environment } from "src/environments/environment";


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

    // add community
    private subjectCommunity = new Subject();
    public communityListen = this.subjectCommunity.asObservable();
    public emitCommunity(value: number) { // 1-增加 0-增加结束
        this.subjectCommunity.next(value);
    }
    private subjectData = new Subject();
    public dataListen = this.subjectData.asObservable();
    public emitData(isEnd: boolean) {
        this.subjectData.next(isEnd);
    }

    constructor(private httpClient: HttpClient, private alertService: AlertService) {}

    

    public getPolygonGas(): Promise<any> {
        return this.httpClient.get(environment.polygonGasApi).toPromise();
    }

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
    public isLogin() {
        return this.httpClient.post('/a/v/address','').pipe(catchError(err => this.catchAuthError(err))).toPromise()
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
    
    public updateDatabase(matchQuery: string): Observable<any> {
        return this.httpClient.post('a/v/oland/execute', matchQuery).pipe(
            map((res: any) => {
                if (res.code === 0) {return res.data}
                else {
                    this.alertService.create({
                        body: 'Interface error: ' + res.message,
                        color: 'danger',
                        time: 5000
                    })
                    return [];
                }
            }),
            catchError(err => this.catchAuthError(err))
        )
    }
    // 数据库接口
    public getDatabase(matchQuery: string): Observable<any> {
        console.log(matchQuery)
        return this.httpClient.post('/a/oland/query', matchQuery).pipe(
            map((res: any) => {
                if (res.code === 0) {return res.data}
                else {
                    this.alertService.create({
                        body: 'Interface error: ' + res.message,
                        color: 'danger',
                        time: 5000
                    })
                    return [];
                }
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
        return `MATCH ${this.setPn(params)}-${this.setR(params)}->${this.setCn(params)} RETURN pn`;
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
        return `MATCH (pn) WHERE id(pn)=${params.id} SET pn=${properties} RETURN pn`;
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

    // --- 单一功能查询语句

    // 获取空间基本信息
    // public getLand(label: 'PublicLand' | 'VerifyLand' | 'OwnerLand', name: string) {
    //     return `MATCH (p:${label}{name: '${name}'}) RETURN p`;
    // } 
    public getLand(label: 'PublicLand' | 'VerifyLand' | 'OwnerLand', name: string) {
        if (label === 'PublicLand') {
            return ``
        }
        if (label === 'VerifyLand') {
            return `MATCH (p)-[:Verify]->(a:PublicLand{name:'${name}'})-[:VerifyLand]->(b) RETURN b`
        }
        if (label === 'OwnerLand') {
            return `MATCH (p)-[:Owner]->(a:PublicLand{name:'${name}'})-[:OwnerLand]->(b) RETURN b`
        }
    } 


    // 获取官方和私人空间的官方空间
    public getLandPublic(label: 'VerifyLand'|'OwnerLand', id: number) {
        return `MATCH (p)-[:${label}]->(c) WHERE id(c)=${id} RETURN p`;
    }
    // 修改空间属性
    public updateLand(id: number, property: string, value: any, notString?: boolean) {
        if (notString) {
            return `MATCH (p) WHERE id(p)=${id} SET p.${property}=${value} RETURN p`;
        } else {
            return `MATCH (p) WHERE id(p)=${id} SET p.${property}='${value}' RETURN p`;
        }
        
    }
    // 获取空间所有人
    public getLandEditor(label: 'Verify' | 'Owner', name: string) {
        // return `MATCH (p)-[:Owner]->(c:PublicLand) WHERE id(c)=${id} RETURN p`;
        return `match (p)-[:${label}]->(c:PublicLand{name:'${name}'}) RETURN p`
    }
    
    

    // 获取link
    public getLinks(id) {
        return `MATCH (pn) WHERE id(pn)=${id} MATCH (pn)-[:LinkTo]->(cn) RETURN cn ORDER BY cn.sort DESC, id(cn) DESC`;
    }
    // 更新link的sort
    public updateLinkSort(batch: any[]) { // [{id:80, sort:2}, {id:84, sort: 1}]
        const batchStr = JSON.stringify(batch);
        const batchStrUnquoted = batchStr.replace(/"([^"]+)":/g, '$1:');
        return `UNWIND ${batchStrUnquoted} as row MATCH (pn) WHERE id(pn)=row.id SET pn.sort=row.sort RETURN pn;`;
    }



    // 获取映射对象
    public getMappingLand(name: string) {
        return `MATCH (a:OwnerLand{name:'${name}', mapping: 1})<-[:OwnerLand]-(:PublicLand)<-[or:Owner]-(b:PublicLand)-[vl:VerifyLand]->(v:VerifyLand) RETURN v`
    }
    // 修改私有土地映射
    public updateOwnerLandMapping(id: number, mappingStatus: 0 | 1) {
        return `MATCH (p) WHERE id(p)=${id} SET p.mapping=${mappingStatus} RETURN p `
    }


    // 获取land的私人land列表
    public getOwnLand(name: string) {
        return `MATCH (p:PublicLand{name: '${name}'})-[:Owner]->(c:PublicLand)-[:OwnerLand]->(cn) RETURN cn`;
    }

    // 获取land的官方land列表
    public getVerifyLand(name: string) {
        return `MATCH (p:PublicLand{name: '${name}'})-[:Verify]->(c) RETURN c`
    }

    // 节点属性, object -> string
    private stringifyProperties(propertiesObj): string {
        let properties = propertiesObj ? JSON.stringify(propertiesObj) : '';
        properties = properties.replace(/"(\w+)"\s*:/g, '$1:');
        return properties;
    }
    // 依据传入参数构造父节点、关系节点和子节点的cyper语句
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
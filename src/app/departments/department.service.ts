import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { DepartmentsEntity } from 'app/core/model';

import 'rxjs/add/operator/toPromise';

export class DepartmentFilter {
  page = 0;
  size = 4;
}

@Injectable()
export class DepartmentService {

  departmentsUrl: string;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.departmentsUrl = `${environment.apiUrl}/departments`
  }

  list(filter: DepartmentFilter): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.size.toString());

    return this.http.get(`${this.departmentsUrl}?resume`,
      { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const departments = responseJson.content;

        const result = {
          departments,
          total: responseJson.totalElements
        };

        return result;
    })
  }

  delete(code: number): Promise<void> {
    return this.http.delete(`${this.departmentsUrl}/${code}`)
      .toPromise()
      .then(() => null);
  }

  create(departmentsEntity: DepartmentsEntity): Promise<DepartmentsEntity> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(this.departmentsUrl,
      JSON.stringify(departmentsEntity), { headers })
      .toPromise()
      .then(response => response);
  }

  searchForCode(code: number): Promise<DepartmentsEntity> {
    const params = new URLSearchParams();

    return this.http.get(`${this.departmentsUrl}/${code}`)
    .toPromise()
      .then(response => response.json());
  }

  update(departmentsEntity: DepartmentsEntity): Promise<DepartmentsEntity> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.put(`${this.departmentsUrl}/${departmentsEntity.code}`,
      JSON.stringify(departmentsEntity), { headers })
      .toPromise()
      .then(response => response);
  }

}

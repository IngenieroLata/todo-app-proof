import {Observable} from 'rxjs/Rx';

export class MockConfigService {
    host: string;
    getHost(): Observable<any> {
        return Observable.of({ 'host': 'http://service.com/api' });
    }
}

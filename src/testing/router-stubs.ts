export class RouterStub {
    rootComponentType;
    navigateByUrl(url: string) { return url; }
}


export class ActivatedRouteStub {
    url = '/api/';
    params = 'id';
}

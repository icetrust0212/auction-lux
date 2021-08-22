export interface RouteInterface {
    title?: string,
    path: string,
    component: any,
    exact?: boolean,
    routes?: RouteInterface[]
}
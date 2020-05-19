export interface StateObj
{
    state: string,
    confirmed: number,
    recovered: number,
    deaths: number,
    active: number
}
export interface State
{
    success:boolean,
    data : {
    source: string,
    lastRefreshed: string,
    total: {
    confirmed: number,
    recovered: number,
    deaths: number,
    active: number,
    },
    statewise: Array<StateObj>,
    }
    lastRefreshed:string,
    lastOriginUpdate : string,
}
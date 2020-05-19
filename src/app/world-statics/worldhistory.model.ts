export interface FederalPojo
{
    date:string,
    confirmed:number,
    recovered:number,
    deaths:number
}
export interface WorldHistory
{
    federal:Array<FederalPojo>
}
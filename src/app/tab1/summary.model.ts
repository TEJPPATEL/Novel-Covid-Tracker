export interface Summary {

    statesData: [],
    id: string,
    parent: string,
    label: string,
    label_parent: string,
    label_en: string,
    label_parent_en: string,
    lon: number,
    lat: number,
    population: number,
    date: string,
    levels: string,
    updated: string,
    retrieved: string,
    confirmed: number,
    recovered: number,
    deaths: number,
    source: string,
    source_url: string


    // success: boolean,
    // data: {
    //     summary: {
    //         total: number,
    //         confirmedCasesIndian: number,
    //         confirmedCasesForeign: number,
    //         discharged: number,
    //         deaths: number,
    //         confirmedButLocationUnidentified: number
    //     },
    //     unofficialsummary:any[],
    //     regional:[]
    // }
    // lastRefreshed:string,
    // lastOriginUpdate:string

    // data:{
    //     date:string,
    //     last_update:string,
    //     confirmed: number,
    //     confirmed_diff: number,
    //     deaths: number,
    //     deaths_diff: number,
    //     recovered: number,
    //     recovered_diff: number,
    //     active: number,
    //     active_diff: number,
    //     fatality_rate:number
    // }

}
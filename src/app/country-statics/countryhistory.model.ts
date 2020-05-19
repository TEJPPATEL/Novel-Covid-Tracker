export interface FederalModel{
    confirmed: number
    date: string,
    deaths: number,
    id: string,
    label: string,
    label_en: string,
    label_parent: string,
    label_parent_en: string,
    lat: number,
    levels: string,
    lon: number,
    parent: string,
    population: string,
    recovered: number,
    retrieved: string,
    scraper: string,
    source: string,
    source_url: string,
    updated: number
}

export interface CountryHistory
{
    federal:Array<FederalModel>
   
}
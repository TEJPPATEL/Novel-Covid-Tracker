export interface SourceObject {
    id: string,
    name: string
}
export interface ArticleObjects {
    source: SourceObject,
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}


export interface NewsModel {
    status: string,
    totalResults: number,
    articles: Array<ArticleObjects>;
}
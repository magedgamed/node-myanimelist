declare type searchTypeT = "anime" | "manga" | "person" | "character";
declare type statusT = "airing" | "completed" | "complete" | "tba" | "upcoming";
declare type ratedT = "g" | "pg" | "pg13" | "r17" | "r" | "rx";
declare type filterTypeT = "tv" | "ova" | "movie" | "special" | "ona" | "music" | "manga" | "novel" | "oneshot" | "doujin" | "manhwa" | "manhua";
/**
 * ### Advanced Search Parameters
 * - q
 * - page
 * - type
 * - status
 * - rated
 * - genre
 * - score
 * - start_date
 * - end_date
 * - genre_exclude
 * - limit
 */
export interface SearchParameters {
    q: string;
    page?: number;
    type?: filterTypeT;
    status?: statusT;
    rated?: ratedT;
    genre?: number;
    score?: number;
    start_date?: string;
    end_date?: string;
    genre_exclude?: 0 | 1;
    limit?: number;
}
/**
 * ### Search results for the query
 * @param type Specify what to search: anime, manga, person, character.
 * @param sp Advanced Search Parameters [Read More:Jikan Doc](https://jikan.docs.apiary.io/#reference/0/search).
 */
export default function (type: searchTypeT, sp: SearchParameters): Promise<{}>;
export {};

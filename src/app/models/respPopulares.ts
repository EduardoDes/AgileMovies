export class RespPopulares {
    constructor(
        public imageBaseUrl: string,
        public data: Data[],

    ) {}
}

export class Data {
    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public id: number,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: string,
        public poster_path: string,
        public release_date: string,
        public title: string,
        public vote_average: number,

    ) {}
}

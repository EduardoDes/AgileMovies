export class RespActores {
    constructor(
        public imageBaseUrl: string,
        public data: DataActores[],

    ) {}
}

export class DataActores {
    constructor(
        public adult: boolean,
        public gender: number,
        public id: number,
        public known_for_department: string,
        public name: string,
        public original_name: string,
        public popularity: number,
        public profile_path: string,
        public cast_id: number,
        public character: string,
        public credit_id: string,
        public order: number,

    ) {}
}

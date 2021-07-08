export class DataUsuario {
    constructor(
        
        public data : Usuario
        
    ) {}
}

export class Usuario {
    constructor(
        
        public id: string,
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email : string
    ) {}
}
export class Repository {

    constructor(
        public name: string,
        public url: string,
        public description: string,
        public stars: number,
        public language: string,
        public forks: number,
    ){}
}

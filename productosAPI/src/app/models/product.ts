import { Category } from "./category";

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public images: string[],
        public creationAt: Date,
        public updatedAt: Date,
        public category: Category
    ){}
}

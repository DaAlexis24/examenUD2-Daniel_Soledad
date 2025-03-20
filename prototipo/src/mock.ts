export class Products {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public stock: number,
        public is_active: boolean,
        public created_at: Date,
        public update_at: Date
    ) {
        if (created_at && update_at > new Date()) {
            throw new Error(
                'La fecha es errónea, ya que la creación del registro no puede ser en el futuro'
            );
        }

        if (update_at < created_at) {
            throw new Error(
                'La fecha de actualización del producto no puede ser antes de su fecha de creación'
            );
        }
    }
}

// let products: Products[] = [
//     {}, {}
// ];

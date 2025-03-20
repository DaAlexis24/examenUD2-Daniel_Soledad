// Creo la entidad Productos para poder guardar los datos correspondientes que se utilizaran en este ejemplo, en este caso utilizare una interfaz para poder guardar algunos datos en memoria sin la necesidad de crear más de una variable para crear una nueva instancia de esta interfaz, cosa que las clases no me lo permiten
interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    is_active: boolean;
    created_at: Date;
    update_at?: Date;
}

export const mockProducts: Product[] = [
    {
        id: 'PD01',
        name: 'PC Gaming',
        price: 450,
        stock: 10,
        is_active: true,
        created_at: new Date(),
    },
    {
        id: 'PD02',
        name: 'Mouse XR',
        price: 25,
        stock: 30,
        is_active: true,
        created_at: new Date('14/04/2020'),
        update_at: new Date(),
    },
];

// Creo la entidad Productos para poder guardar los datos correspondientes que se utilizaran en este ejemplo, en este caso utilizare una interfaz para poder guardar algunos datos en memoria sin la necesidad de crear más de una variable para crear una nueva instancia de esta interfaz, cosa que las clases no me lo permiten
export interface Products {
    id: string;
    name: string;
    price: number;
    stock: number;
    is_active: boolean;
    created_at: Date;
    update_at: Date;
}

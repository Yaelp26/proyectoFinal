export interface LostItemsAPI {
    lostItems: LostItem[];
}

export interface LostItem {
    lostObject: string;
    place: Place;
    photo: string;
    prioritary: boolean;
}

export interface Place {
    faculty: "Ciencias de la Computación" |
    "Derecho" |
    "Fisco-Matemáticas" |
    "Bilogía" |
    "Farmacobiología" |
    "Ingenierias" |
    "Arquitectura" |
    "Artes" |
    "Cultura Física" |
    "Contabilidad" |
    "Administración"
}


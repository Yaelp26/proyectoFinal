export interface LostObjectAPI {
    LostObjects: LostObject[];
}

export interface LostObject {
    id: number;
    object_name: string;
    place: number;
    img: string;
    important: boolean;
}

export interface ValidPlaces {
    Places: Place[];
}

export interface Place {
    id: number;
    faculty: string;
}

export interface StudentsAPI {
    Students: Student[];
}

export interface Student {
    register: number;
    first_name: string;
    last_name: string;
}
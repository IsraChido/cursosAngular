export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Israel',
}

const passenger2: Passenger = {
    name: 'Pedro',
    children: ['Juan', 'Diana'],
}

const returnChildrenNumber = (passenger: Passenger): number => {
    
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1);
export class Robot {
    name: string;
    photo: string;

    constructor() { }
}

export let robotList: Robot[] = [
    {
        name: 'Bender',
        photo: 'assets/robot_1.png'
    },

    {
        name: 'Oscar',
        photo: 'assets/robot_2.png'
    },

    {
        name: 'Robotus',
        photo: 'assets/robot_3.png'
    },

    {
        name: 'Tod',
        photo: 'assets/robot_4.png'
    }

];

export let newrobotList: Robot[] = [];
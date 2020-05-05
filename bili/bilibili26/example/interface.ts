// comma or semicolon??
interface NameInfo {
    firstname: string;
    lastname: string;
    readonly type: string;
    [key: string]: any;
};

const getFullname = ({firstname, lastname}: NameInfo) => {
    return `${firstname} - ${lastname}`;
};

type addFunc = (num1: number, num2: number) => number;
const add: addFunc = (n1, n2) => n1 + n2;

interface RoleDic {
    [id: number]: string;
}

// inheritance
interface Vegetables {
    color: string;
}

interface Carrot extends Vegetables {
    length: number;
}

interface Tomato extends Vegetables {
    radius: number;
}
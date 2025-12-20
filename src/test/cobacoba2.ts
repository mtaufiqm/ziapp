

function cobacoba(angka1: number, angka2: number = 5, angka3: number): number {
    return angka1+angka2+angka3;
}

function cobacoba2(angka1: number, angka2? : number): number {
    return (angka1+(angka2??0));
}

console.info(cobacoba(0,undefined,5)+ " is equal to 10");
cobacoba(0, undefined, 5);
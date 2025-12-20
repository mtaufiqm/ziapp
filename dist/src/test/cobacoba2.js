"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cobacoba(angka1, angka2 = 5, angka3) {
    return angka1 + angka2 + angka3;
}
function cobacoba2(angka1, angka2) {
    return (angka1 + (angka2 ?? 0));
}
console.info(cobacoba(0, undefined, 5) + " is equal to 10");
cobacoba(0, undefined, 5);
//# sourceMappingURL=cobacoba2.js.map
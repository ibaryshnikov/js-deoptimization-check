class Vec3 {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;

        return this;
    }
}

class AnotherVec3 {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;

        return this;
    }
}

const accumulator = new Vec3();
function checkVec3(label, limit, a, b) {
    const start = Date.now();
    for (let i = 0; i < limit; i++) {
        accumulator.subVectors(a, b);
    }
    console.log(label, 'time passed', Date.now() - start);
}

const anotherAccumulator = new AnotherVec3();
function checkAnotherVec3(label, limit, a, b) {
    const start = Date.now();
    for (let i = 0; i < limit; i++) {
        anotherAccumulator.subVectors(a, b);
    }
    console.log(label, 'time passed', Date.now() - start);
}

window.addEventListener('load', () => {
    const limit = 1e8;
    const a = new Vec3(0.3, 0.2, 0.1);
    const b = new Vec3(0.1, 0.2, 0.3);
    
    checkVec3('case 1, not optimized', limit, a, b);
    checkVec3('case 2, optimized', limit, a, b);
    checkAnotherVec3('case 3, run with different class', limit, a, b)
    checkAnotherVec3('case 4, second run with different class', limit, a, b)
    new Vec3({}, {}, {})
    checkVec3('case 5, slowed down after passing objects', limit, a, b);
    checkVec3('case 6, second run after passing objects', limit, a, b);
    checkAnotherVec3('case 7, again quick with different class', limit, a, b)
    checkAnotherVec3('case 8, second run with different class', limit, a, b)
});

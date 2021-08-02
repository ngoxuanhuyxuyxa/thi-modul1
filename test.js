class Animal {
    name;
    weight;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    getName() {
    return this.name;
}
    getWeight() {
        return this.weight;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight
    }
    toString() {
        return document.write(" name : " + this.getName() + ", weight : " + this.getWeight());
    }
}
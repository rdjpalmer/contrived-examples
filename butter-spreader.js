const GramsPerSlice = 10;

class BreadSpreader {
  constructor(butterSupplyInGrams) {
    this.butterSupply = butterSupplyInGrams;
  }

  spread(breadSlice) {
    if (this.butterSupply <= GramsPerSlice) {
      throw new Error('Please refill butter capsule');
    }

    breadSlice.butter();
    this.butterSupply -= GramsPerSlice;
  }

  refill(butterSupplyInGrams) {
    this.butterSupply = butterSupplyInGrams;
  }
}

class BreadSlice {
  constructor(color) {
    if(!color) {
      throw new Error('Bread must have a color');
    }
    this.color = color;
    this.buttered = false;
  }

  butter() {
    this.buttered = true;
  }
}

const spreader = new BreadSpreader(100);
const loaf = new Array(16).fill(new BreadSlice('white'));

loaf.forEach((slice) => {
  try {
    spreader.spread(slice);
  } catch (error) {
    spreader.refill(100);
  }
});

console.log(loaf);
console.log(spreader.butterSupply);

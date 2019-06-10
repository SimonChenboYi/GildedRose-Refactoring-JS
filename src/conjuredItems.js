class ConjuredItems extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  logItemQuality(){
    this.sellIn--;
    if (this.quality > 0 && this.quality < 50){
      if (this.sellIn >= 0) this.quality -= 2;
      if (this.sellIn < 0) this.quality -= 4;
    }
    return this;
  }
}

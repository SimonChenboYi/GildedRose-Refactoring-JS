class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  logItemQuality(){
    this.sellIn--;
    if (this.quality > 0 && this.quality < 50) {
      if (this.sellIn > 10) this.quality++;
      if (this.sellIn > 5 && this.sellIn <= 10) this.quality += 2;
      if (this.sellIn >= 0 && this.sellIn <= 5) this.quality += 3;
      if (this.sellIn < 0) this.quality = 0;
    }
    return this;
  }
}

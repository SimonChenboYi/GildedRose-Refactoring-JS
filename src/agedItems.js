class AgedItems extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  logItemQuality(){
    this.sellIn--;
    if (this.quality > 0 && this.quality < 50) this.quality++;
    return this;
  }
}

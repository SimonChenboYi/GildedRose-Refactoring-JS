class LegendaryItems extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  logItemQuality(){
    return this;
  }
}

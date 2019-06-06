class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  alterSellin(sellInChange){
    return this.sellIn += sellInChange
  }

  alterQuality(qualityChange){
    return this.quality += qualityChange
  }

}

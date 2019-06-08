class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}



class Shop {
  constructor(items = []) {
    this.items = items;
    this.specialItems = ['Sulfuras, Hand of Ragnaros', 'Aged Brie',
      'Backstage passes to a TAFKAL80ETC concert',
      'Conjured Items'
    ]
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.logItemQuality(this.items[i])
    }
    return this.items;
  }

  logItemQuality(item) {
    if (item.name == 'Sulfuras, Hand of Ragnaros') return item;

    if (item.quality > 0 && item.quality < 50) {
      this.updateItem(item)
      return item;
    };
  }

  updateItem(item) {
    item.sellIn--;
    if (item.name == 'Aged Brie') return this.updateAgedBrie(item);
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') return this.updateBackstagePasses(item);
    if (item.name == 'Conjured Items') return this.updateConjuredItems(item);
    this.updateNormalItems(item);
    return item;
  }

  updateAgedBrie(item) {
    item.quality++;
    return item;
  }

  updateBackstagePasses(item) {
    if (item.sellIn > 10) item.quality ++;
    if (item.sellIn > 5 && item.sellIn <= 10) item.quality += 2;
    if (item.sellIn >= 0 && item.sellIn <= 5) item.quality += 3;
    if (item.sellIn < 0 ) item.quality = 0;
    return item;
  }

  updateConjuredItems(item) {
    if (item.sellIn >= 0) item.quality -= 2;
    if (item.sellIn < 0 ) item.quality -= 4;
    return item;
  }

  updateNormalItems(item) {
    if (item.sellIn >= 0) item.quality -= 1;
    if (item.sellIn < 0 ) item.quality -= 2;
    return item;
  }

}

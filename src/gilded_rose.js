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
    this.specialItems = {
      legendaryItems: ['Sulfuras, Hand of Ragnaros'],
      agedItems: ['Aged Brie'],
      backstagePasses: ['Backstage passes to a TAFKAL80ETC concert'],
      conjuredItems: ['Conjured Items']
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.logItemQuality(this.items[i])
    }
    return this.items;
  }

  logItemQuality(item) {
    if (this.isLegendaryItem(item)) return item;
    if (item.quality > 0 && item.quality < 50) return this.updateItem(item)
  }

  updateItem(item) {
    item.sellIn--;
    if (this.isAgedItem(item)) return this.updateAgedBrie(item);
    if (this.isBackstagePass(item)) return this.updateBackstagePasses(item);
    if (this.isConjuredItem(item)) return this.updateConjuredItems(item);
    this.updateNormalItems(item);
    return item;
  }

  updateAgedBrie(item) {
    item.quality++;
    return item;
  }

  updateBackstagePasses(item) {
    if (item.sellIn > 10) item.quality++;
    if (item.sellIn > 5 && item.sellIn <= 10) item.quality += 2;
    if (item.sellIn >= 0 && item.sellIn <= 5) item.quality += 3;
    if (item.sellIn < 0) item.quality = 0;
    return item;
  }

  updateConjuredItems(item) {
    if (item.sellIn >= 0) item.quality -= 2;
    if (item.sellIn < 0) item.quality -= 4;
    return item;
  }

  updateNormalItems(item) {
    if (item.sellIn >= 0) item.quality -= 1;
    if (item.sellIn < 0) item.quality -= 2;
    return item;
  }

  isLegendaryItem(item){
    return this.specialItems.legendaryItems.includes(item.name)
  }

  isAgedItem(item){
    return this.specialItems.agedItems.includes(item.name)
  }

  isBackstagePass(item){
    return this.specialItems.backstagePasses.includes(item.name)
  }

  isConjuredItem(item){
    return this.specialItems.conjuredItems.includes(item.name)
  }

}

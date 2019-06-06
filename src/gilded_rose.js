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
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.alterItemQuality(this.items[i])
      }
    }
    return this.items;
  }

  alterItemQuality(item) {
    item.sellIn = item.sellIn - 1;

    if (item.quality > 0 && item.quality < 50) {
      if (item.name == 'Aged Brie') {
        item.quality = item.quality + 1;
      } else {
        if(item.sellIn >= 0){
          this.changeItemQualityBeforeSale(item)
        } else {
          this.changeItemQualityAfterSale(item)
        }
      }
    }
  }

  changeItemQualityBeforeSale(item){
    if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = item.quality - 1;
    } else {
      item.quality = item.quality + 1;
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 11) {
          item.quality = item.quality + 1;
        }
        if (item.sellIn < 6) {
          item.quality = item.quality + 1;
        }
      }
    }
  }

  changeItemQualityAfterSale(item){
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0;
    } else {
      item.quality = item.quality - 2;
    }
  }
}

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
    if(item.name == 'Sulfuras, Hand of Ragnaros' ){
      return item;
    };
    if (item.quality > 0 && item.quality < 50) {
      this.updateItem(item)
    };
  }


  updateItem(item){
    item.sellIn--;

    if (item.name == 'Aged Brie') {
      item.quality++;
    } else {
      if (item.sellIn >= 0) {
        this.changeItemQualityBeforeSale(item)
      } else {
        this.changeItemQualityAfterSale(item)
      }
    };
  }





  changeItemQualityBeforeSale(item) {
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sellIn > 10) {
        item.quality++;
      } else if (item.sellIn > 5 && item.sellIn <= 10) {
        item.quality += 2;
      } else {
        item.quality += 3;
      }
    } else if (item.name == 'Conjured Items') {
      item.quality -= 2;
    } else {
      item.quality--;
    }
  }

  changeItemQualityAfterSale(item) {
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0;
    } else if (item.name == 'Conjured Items') {
      item.quality -= 4;
    } else {
      item.quality -= 2;
    }
  }






}

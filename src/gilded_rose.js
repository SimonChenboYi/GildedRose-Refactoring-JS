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
    for (let i = 0; i < this.items.length; i++) {
      let itemClass = this.classifyItems(this.items[i])
      let item = new itemClass(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
      this.items[i] = item.logItemQuality()
    }
    return this.items;
  }

  classifyItems(item){
    if(this.specialItems.legendaryItems.includes(item.name)) return LegendaryItems;
    if(this.specialItems.agedItems.includes(item.name)) return AgedItems;
    if(this.specialItems.backstagePasses.includes(item.name)) return BackstagePasses;
    if(this.specialItems.conjuredItems.includes(item.name)) return ConjuredItems;
    return NormalItems;
  }

}

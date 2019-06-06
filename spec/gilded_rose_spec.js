describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("lower SellIn value each day", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
  });

  it("lower Quality value each day", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(19);
  });

  it("lower Quality value by 2 each day Once the sell by date has passed", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
  });

  it("has quality value never been nagtive", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("'Aged Brie' actually increases in Quality the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
  });

  it("The Quality of an item is never more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("'Sulfuras, Hand of Ragnaros', Quality is 80 and never changes", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("'Sulfuras, Hand of Ragnaros', never sale", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
  });

  it("'Backstage passes', Quality increases by 1 when there are more than 10 days ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
  });

  it("'Backstage passes', Quality increases by 2 when there are 10 days or less ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
  });

  it("'Backstage passes', Quality increases by 3 when there are 5 days or less ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23);
  });

  it("'Backstage passes', Quality drops to 0 after the concert ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

});

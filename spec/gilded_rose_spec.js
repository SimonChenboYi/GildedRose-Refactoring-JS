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


});

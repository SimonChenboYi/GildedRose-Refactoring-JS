describe("Feature", function() {

  xit("decrease the SellIn value and Quality value by 1 each day", function() {
    const gildedRose = new Shop();
    item = new Item("Cake", 5, 20)
    const items = gildedRose.updateQuality();
    expect(items[0].getQuality).toEqual(19);
    expect(items[0].getSellIn).toEqual(4);
  });

});

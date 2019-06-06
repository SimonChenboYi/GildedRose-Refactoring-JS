describe("Merchandise", function() {

  it("alter the sellIn", function() {
    const item = new Item("Cake", 5, 20)
    expect(item.alterSellin(-1)).toEqual(4);
  });
});

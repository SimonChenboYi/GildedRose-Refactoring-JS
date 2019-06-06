# GildedRose

## Context
GildedRose is an kata testing the refactoring and extension on legacy code : [Here](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/master/js-jasmine/src/gilded_rose.js). Javascript and Jasmine are used for Development and Test.  

## Requirement

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast  
The Quality of an item is never negative  
“Aged Brie” actually increases in Quality the older it gets  
The Quality of an item is never more than 50  
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality  
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when   there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert  
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items.  

### How to Run
Git Clone and navigate to the GildedRose-JS repository.
To simplify the running environment, the application and tests are hosted on the chrome.
copy the full path of SpecRunner.html to the url bar on the chrome.
Open console by 'inspect' the page.
create the Shop instance and updateQuality in the console, for example:
```
>const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
>const items = gildedRose.updateQuality();
>items[0].quality
<0
```

### Run the tests
Tests files are in './spec' repository
copy the full path of SpecRunner.html to the url bar on the chrome to the the Tests


### Approach

1. Adding test to cover each methods and features
2. Refactor based on user stories/features
3. extend the code (Tdd)


#### Refactor:
1. extra the update each item from update all items and leave the timeless item in condition statement.
2. extra the common rule on the range of quality to the most outer layer of condition statement.
3. extra the case of 'Aged Brie' as its change pattern is not affected by the range of SellIn.
4. extra the change patterns before sale and after sale into two methods.
5. Tidy up each method to make sure the each method has no more than two layers condition statements.

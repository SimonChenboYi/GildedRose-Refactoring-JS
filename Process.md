# Process

## Requirement

"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items


## User Stories

1. As a manager  
   So I can manage the selling prices  
   I would like all item to have SellIn value

2. As a manager    
   So I can manage the selling prices  
   I would like all item to have Quality value

3. As a manager    
   So I can manage the selling prices  
   I would like SellIn value and Quality value to be decreased by 1 each day

4. As a manager    
  So I can manage the selling prices  
  I would like Quality value to be decreased by 2 each day when SellIn is lower than 0

5. As a manager    
  So I can manage the selling prices  
  I would like Quality value to be positive

6. As a manager    
  So I can manage the selling prices  
  I would like Quality value of “Aged Brie” to be increased each day

7. As a manager    
  So I can manage the selling prices  
  I would like Quality value to be no more than 50

8. As a manager    
  So I can manage the selling prices  
  I would like the legendary item  “Sulfuras” to have Quality value of 80 never changed.

9. As a manager    
   So I can manage the selling prices  
   I would like the 'Backstage passes' to has Quality increasing by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after SellIn being 0 or lower.

10. As a manager
    So I can manage the selling prices
    I would like “Conjured” items degrade in Quality twice as fast as normal items


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

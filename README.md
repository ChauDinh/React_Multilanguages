# React_Multilanguages

## What we will cover?

* What do we need to consider when building an app for customers
* Custom features asked by customers
* Separating features from our customers.

## Notes:

When dealing with international apps or even apps that will be a little different for each customers it is vital to have a good strategy for feature toggling.

The most common strategy is using `if condition` to toggle different components on and off at runtime.

However, the issue with this method is that it gets very messy when we have a lot of custom components and customers only want to get what they really need.

My solution in this case is build time. I mean that instead of having a bunch of `if/else conditions` when the code is running, we will create different bundles or even multiple applications simply include exactly what actually customers need while we only have a single code base. 

To achieve it, we will create an environments array contains different enviornments that we need to build our app. Then we use webpack to integrate (combine) all of those and then we simply create one bundle for each business - in this situation, it's just country or language. 


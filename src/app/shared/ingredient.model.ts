// This is a shorthand way of setting up a class instead of defining the members of the class at the top and then a constructor at the bottom where we are just passing the name to name and amoutn to amount in this example.
export class Ingredient{
  constructor(public name: string, public amount: number){}
}

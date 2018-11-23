import { Meteor } from "meteor/meteor";

Meteor.methods({
  congest: async () => {
    return new Promise((resolve, reject) => {
      console.dir("congesting...");
    });
  }
});

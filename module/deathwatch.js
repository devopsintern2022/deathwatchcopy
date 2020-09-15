// Import Modules
import { DeathwatchActor } from "./actor/actor.js";
import { DeathwatchActorSheet } from "./actor/actor-sheet.js";
import { DeathwatchItem } from "./item/item.js";
import { DeathwatchItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.deathwatch = {
    DeathwatchActor,
    DeathwatchItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d10 + @characteristics.ag.bonus",
    decimals: 0
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = DeathwatchActor;
  CONFIG.Item.entityClass = DeathwatchItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("deathwatch", DeathwatchActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("deathwatch", DeathwatchItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});

import { configHotbars } from "./configurator.js"
import { assignActors } from "./configurator.js"

Hooks.once('init', async function() {
    console.log("Player Configurator | Init");
});

Hooks.once('ready', async function() {
    //test ID array: ["GuMMVgoN63m6AgQj"]
    if(game.users.current.isGM) {
        //await configHotbars();
        await assignActors();
    }
});

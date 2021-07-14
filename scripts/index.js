import { configHotbars } from "./configurator.js"
import { assignActors } from "./configurator.js"

Hooks.once('init', async function() {
    console.log("Player Configurator | Init");
});

Hooks.once('ready', async function() {
    await assignActors();
});

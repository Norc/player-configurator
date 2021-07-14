import { configHotbars } from "./configurator.js"
import { assignActors } from "./configurator.js"

Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {
    assignActors();
});

import { configHotbars } from "./configurator.js"
import { assignActors } from "./configurator.js"

Hooks.once('init', async function() {
    console.log("Player Configurator | Init");
});

Hooks.once('ready', async function() {
    const playDivId = "players";

    //test ID array: ["GuMMVgoN63m6AgQj"]
    if(game.users.current.isGM) {
        /*  TO DO:
            1. Add right-click listener to Players row of PlayerList to Bulk Config Players and Bulk Config Macros
            2. Add right-click listener to own username row to "Load" or "Set" player's macro hotbar.
            3. As GM, add context menu option to own username row to "Stash" or "Restore" your own macro hotbar
            4. Add Custom Hotbar support?
        */
        let playDiv = document.getElementById(playDivId).children[0];
        playDiv.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            const bulkAssignMacros = new Dialog({
                title: "Please Confirm",
              content: `Give your macro hotbar to all players?`,
              buttons: {
                buttonOk: {
                  label: "Ok",
                  callback: () => {ui.notifications.info("You clicked OK!")},
                  icon: `<i class="fas fa-check"></i>`
                },
                buttonCancel: {
                  label: "Cancel",
                  callback: () => {ui.notifications.info("You clicked Cancel!")},
                  icon: `<i class="fas fa-times"></i>`
                }
              }
            }).render(true);
        });
        //await configHotbars();
        //await assignActors();
    }
});
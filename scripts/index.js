import { configHotbars } from "./configurator.js"
import { assignActors } from "./configurator.js"

//Hooks.once('init', async function() {
    //console.log("Player Configurator | Init");
//});

Hooks.on('renderPlayerList', async function() {

    //test ID array: ["GuMMVgoN63m6AgQj"]
    if(game.users.current.isGM) {
        /*  TO DO:
            1. As GM, add context menu to Players list
            2. Add current functionality, Assign per player, view/edit per player, and Assigned Character configuration to context menu
            3. As GM, add context menu option somewhere to "Stash" or "Restore" your own macro hotbar
            4. Add Custom Hotbar support?
            5. Add player hotbar locking?
        */

        const playerListDivId = "players";
        let playDiv = document.getElementById(playerListDivId).children[0];
        playDiv.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            const bulkAssignMacros = Dialog.confirm({
                title: game.i18n.localize("player-configurator.bulk-assign-macro.confirm"),
                content: game.i18n.localize("player-configurator.bulk-assign-macro.caution"),
                yes: async () => {
                    await configHotbars();
                    ui.notifications.info(game.i18n.localize("player-configurator.bulk-assign-macro.success"))
                    },
                defaultYes: true
            });
        });
    }
        /*
        WIP PLEASE IGNORE
        playDiv._contextMenu(html);
        playDiv.id = "play";

        playContextMenu(`${html}`);

        playDiv.addEventListener('contextmenu', (event) => {
            console.log("Player Configurator | this");
            console.log(event)
        });

    //await assignActors();
    }*/
});

/*
WIP PLEASE IGNORE
function playContextMenu(html) {
    const playDivContextMenu = new ContextMenu(html, "#play", [
        {
            name: "Bulk Assign Macros",
            icon: '<i class="fas fa-edit"></i>',
            condition: () => {},
            callback: li => {
                ui.notifications.info("Hi!");
            }
        }
    ]);
}
*/
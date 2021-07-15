export async function configHotbars(uList = game.users.contents) {
//copies the active player's macro hotbar to all players.
    let templateHotbar = duplicate(game.users.current.data.hotbar);
    console.log("Player Configurator | uList");
    console.log(uList);
    for (let u in uList) {
        console.log(u);
        //synch hotbar    
        let obj = {};            
        obj['hotbar'] = duplicate(templateHotbar);

        //update the player with the new properties
        await u.update(obj);
    }
}
 
/*
export async function configHotbars(uList = game.users.contents) {
    //copies the active player's macro hotbar to all players.
        let templateHotbar = duplicate(game.users.current.data.hotbar);
        for (let u in game.users.contents) {
            let player = game.users.contents[u];
            if( (u.id in uList) && (typeof player.data !== "undefined") ) {
                let obj = {};
                
                //synch hotbar
                obj['hotbar'] = duplicate(templateHotbar);
       
                //update the player with the new properties
                await player.update(obj);
            }
        }
    } 
*/
export async function assignActors(playerIds = getPlayerIds()) {
//Expects an array of playerIds. If none is provided, all player Ids will be used by default instead.
//If a player owns exactly one actor, assign that actor to the user.
    console.log("Player Configurator | Assigning actors");
    let newAssign = false;
    console.log(playerIds);
    for (let pId of playerIds) {
        let player = game.users.get(pId);
        console.log(player);
        let ownedActors = game.actors.filter( (actor) => actor.data.permission[player.id] == 3);
        let obj = {};
        switch (ownedActors.length) {
            case 0:
                ui.notifications.warn(`${player.name} does not own an actor. Please assign one manually.`);
            break;
            case 1:
                console.log(`Player Configurator | Assigning ${player} an actor.`);
                newAssign = true;
                obj['character'] = ownedActors[0].id;
                await player.update(obj);
            break;
            default:
                ui.notifications.warn(`More than one actor is owned by ${player.name}. Please pick one manually.`);
        }
    }

    //display appropriate message if all players have assigned actors
    let users = game.users.contents.filter( (u) => typeof u === "object");
    let unassignedPlayers = users.filter( (u) => ( (u.data.character === null) && ( !u.isGM ) ) );
    if ( unassignedPlayers.length == 0  ) {
        if (newAssign) {
            ui.notifications.info("Successfully assigned characters. All players now have an assigned character.");
        } else {
            ui.notifications.info("All players already had an assigned character. No changes made.");
        }
    }
}

export function getPlayerIds() {
    let players = game.users.contents.filter( (u) => (typeof u === "object") && ( !u.isGM ) )
    let playerIds = players.map(function(a) {return a.id;});
    return playerIds;
}
export async function configHotbars(fUserIds = getUserIds()) {
//Expects an array of userIds. If none is provided, all user Ids will be used by default instead.
//copies the active player's macro hotbar to all specified users.
    const newHb = foundry.utils.deepClone(game.users.current.data.hotbar);
    //console.log(`Player Configurator | Template hotbar:`);
    //console.log(newHb);
    for (const fUId of fUserIds) {
        let fUser = game.users.get(fUId); 

        //update the player with the new properties
        //console.log(`Player Configurator | Assigning following hotbar to ${fUser.name}:`);
        //console.log(newHb);
        await fUser.update({ hotbar: newHb }, { diff: false, recursive: false });
        //console.log(`Player Configurator | Result:`);
        //console.log(fUser.data.hotbar);
    }
}

//COMING SOON, NOT YET ACCESSIBLE
export async function assignActors(playerIds = getPlayerIds()) {
//Expects an array of playerIds. If none is provided, all player Ids will be used by default instead.
//If a player owns exactly one actor, assign that actor to the user.
    //console.log("Player Configurator | Assigning actors");
    let newAssign = false;
    for (let pId of playerIds) {
        let player = game.users.get(pId);
        if (player.data.character === null) {
            let ownedActors = game.actors.filter( (actor) => actor.data.permission[player.id] == 3);
            let obj = {};
            switch (ownedActors.length) {
                case 0:
                    console.log(`Player Configurator | ${player.name} does not own an actor. Please assign one manually.`);
                    ui.notifications.warn(`${player.name} does not own an actor. Please assign one manually.`);
                break;
                case 1:
                    //console.log(`Player Configurator | Assigning ${player} an actor.`);
                    newAssign = true;
                    obj['character'] = ownedActors[0].id;
                    await player.update(obj);
                break;
                default:
                    console.log(`Player Configurator | More than one actor is owned by ${player.name}. Please pick one manually.`);
                    ui.notifications.warn(`More than one actor is owned by ${player.name}. Please pick one manually.`);
            }
        }
    }

    //display appropriate message if all players now have assigned actors
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

function getPlayerIds() {
    let players = game.users.contents.filter( (u) => (typeof u === "object") && ( !u.isGM ) )
    let playerIds = players.map(function(a) {return a.id;});
    return playerIds;
}

function getUserIds() {
    let users = game.users.contents.filter( (u) => (typeof u === "object") )
    let userIds = users.map(function(a) {return a.id;});
    return userIds;
}
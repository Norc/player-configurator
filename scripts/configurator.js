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

export async function assignActors() {
//If a player owns exactly one actor, assign that actor to the user.
    console.log("Player Configurator | Assigning actors");
    for (let u in game.users.contents) {
        console.log(typeof (game.users.contents[u]));
        if ( typeof (game.users.contents[u]) == "object" ) {
            console.log("play");
            let player = game.users.contents[u];
            if ( ( !u.isGM ) && ( player.data.character === null ) ) {
                let ownedActors = game.actors.filter( (actor) => actor.data.permission[player.id] == 3);
                let obj = {};
                if ( ownedActors && ownedActors.length === 1 ) {
                    obj['character'] = ownedActors[0].id;
                } else {
                    if ( ownedActors.length > 1 ) {
                        ui.notifications.warn(`Please ensure that only one actor is assigned to ${player.name}`);
                    }
                }
                
                //update the player with the new properties
                console.log(`Player Configurator | Assigning ${player} an actor.`);
                await player.update(obj);
                console.log(player.data.character);
            }
        }
    }
}

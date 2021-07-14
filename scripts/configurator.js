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
    for (let u in game.users.contents) {
        if (!player.isGM ) {
            let ownedActors = game.actors.filter( (actor) => actor.data.permission[player.id] == 3);
            if (ownedActors && ownedActors.length == 1) obj['character'] = ownedActors[0].id;
        }

        //update the player with the new properties
        await player.update(obj);
    }
}

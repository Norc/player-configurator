![](https://img.shields.io/badge/Foundry-v0.8.6-informational)
<!--- Downloads @ Latest Badge -->
<!--- replace <user>/<repo> with your username/repository -->
<!--- ![Latest Release Download Count](https://img.shields.io/github/downloads/Norc/player-configurator/latest/module.zip) -->

<!--- Forge Bazaar Install % Badge -->
<!--- replace <your-module-name> with the `name` in your manifest -->
<!--- ![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fplayer-configurator&colorB=4aa94a) -->


# Player Macro Configurator

## The problem
Games go more smoothly when players have some commonly used macros on their hotbar, but actually getting the macros set up is a PITA:
* Logging in as each player and setting the same bar up many times is awful (particularly with passwords or many players)
* Asking players to set up their own macro hotbar is... no.

## The solution: Player Macro Configurator!
With PMC, just set your macro hotbar up the way you wish it was for all players. Then right-click the word "Players", click Yes, and you're done:

![image](https://user-images.githubusercontent.com/64667579/126040107-f4da9e9c-32d1-4c13-84c5-543ae304e1e6.png)

**Boom!** All your players (even offline ones) now have that sweet macro hotbar that you created for them.
**NOTE:** This currently sends all macro hotbar rows. Allowing sending just one at a time is planned soon.

## Roadmap:
1. Add ability to send just one hotbar at a time
2. Automatically assign characters to players if they own exactly one Actor (bonus feature!)
3. Assign the macro hotbar only to selected players
4. View and edit the macro hotbar of a particular player
5. Lock player macro hotbars
6. Saving and restoring your own macro hotbar
7. Custom hotbar compatibility (https://github.com/Norc/foundry-custom-hotbar).

## Changelog

v1.0.4 - Initial public release, inspired by The League of Extraordinary Developers July 2021 Package Jam but sadly entered too late.

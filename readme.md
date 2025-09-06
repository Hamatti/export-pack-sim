# Bookmarklet to export pulls from pokemoncard.io/pack-sim

https://pokemoncard.io/pack-sim/ is a handy service to open virtual Pokemon TCG packs.

It doesn't have a good way to export the pulls though so I wrote this bookmarklet.

You can inspect the full script in export-pack-sim.js and you can install it as bookmarklet by dragging the following link to your bookmarks toolbar:

[export pack-sim](javascript:(function()%7Bconst%20pattern%20%3D%20%2F(.*)%5C(.*%5C)%20x(%5Cd%2B)%2F%3B%0A%0Aasync%20function%20copy()%20%7B%0A%20%20const%20area%20%3D%20document.querySelector(%22%23pulled-card-rowparent%22)%3B%0A%20%20const%20pulls%20%3D%20area.querySelectorAll(%22div%22)%3B%0A%0A%20%20const%20cards%20%3D%20Object.values(pulls).map((div)%20%3D%3E%20%7B%0A%20%20%20%20const%20id%20%3D%20div.querySelector(%22a%22)%3F.dataset.name%3B%0A%20%20%20%20const%20content%20%3D%20div.textContent%3B%0A%0A%20%20%20%20const%20%5Bfull%2C%20name%2C%20amount%5D%20%3D%20content.match(pattern)%3B%0A%0A%20%20%20%20return%20%60%24%7Bamount%7D%20%24%7Bname%7D%20%24%7Bid%7D%60%3B%0A%20%20%7D)%3B%0A%0A%20%20await%20navigator.clipboard.writeText(cards.join(%22%5Cn%22))%3B%0A%7D%0A%0Acopy()%3B%7D)()%3B)

Running the bookmarklet will copy the pulls list into your clipboard with the following format.

```plain
1 Skiddo  sv1-11
1 Pawmi  sv1-74
1 Wattrel  sv1-77
1 Wiglett  sv1-56
2 Lechonk  sv1-155
3 Capsakid  sv1-28
2 Bisharp  sv1-133
1 Pineco  sv1-1
1 Floette  sv1-92
2 Flittle  sv1-100
1 Pawmo  sv1-75
1 Lechonk  sv1-154
1 Drifloon  sv1-89
```

You can then paste it into wherever you keep your notes.

## Acknowledgements

This project has been a recipient of Reaktor's [Juice Open Source Program](https://www.reaktor.com/articles/giving-back-to-open-source).

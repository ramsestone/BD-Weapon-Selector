// ==UserScript==
// @name         BD Weapon Selector
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Automatically selects weapons and abilities in BD page
// @author       Ramsestone
// @match        https://www.neopets.com/dome/arena.phtml
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @updateURL    https://github.com/ramsestone/BD-Weapon-Selector/releases/download/v1/bd-weapon-selector.js
// @downloadURL  https://github.com/ramsestone/BD-Weapon-Selector/releases/download/v1/bd-weapon-selector.js
// ==/UserScript==

// This correspond to the elements that displays images
const item_1 = document.querySelector("#p1e1m")
const item_2 = document.querySelector("#p1e2m")
const ability = document.querySelector("#p1am")

// This correspond to the form that is submited when "fight" button is pressed
const item_1_form = document.querySelector("#p1e1")
const item_2_form = document.querySelector("#p1e2")
const ability_form = document.querySelector("#p1a")

// Items follows next order in items table:
// [0,2,4,6]
// [1,3,5,7]
const select_item_1 = 0
const select_item_2 = 2

//Name: Static Cling        || ID: 1
//Name: An Icicle           || ID: 2
//Name: Healing Fire        || ID: 3
//Name: Halitosis           || ID: 10
//Name: Drizzle             || ID: 11
//Name: Bandage             || ID: 12
//Name: Meditate            || ID: 13
//Name: Shade               || ID: 14
//Name: Cranky              || ID: 15
//Name: Meh                 || ID: 16
//Name: Positive Thinking   || ID: 17
//Name: Sear                || ID: 18
//Name: Irritable Minions   || ID: 19
//Name: Throw Pillows       || ID: 20
//Name: Lens Flare          || ID: 21
//Name: Shhhhhhhhh...       || ID: 22
//Name: Shroud              || ID: 23
//Name: Float               || ID: 24
//Name: Burrow              || ID: 25
//Name: Tempest             || ID: 26
//Name: Snowager's Breath   || ID: 27
//Name: Warlock's Rage      || ID: 28
//Name: Rejuvenate          || ID: 29
//Name: Drain Life          || ID: 30
//Name: Reflect             || ID: 31
//Name: Rally Cry           || ID: 32
//Name: Adrenaline Rush     || ID: 33
//Name: Meepit Stampede     || ID: 34
//Name: Summon Monoceraptor || ID: 35
//Name: Esophagor Stench    || ID: 37
// Ability ID 21 is lens flare which is recomended for one shot enemies without getting damage.
const select_ability = 21

// Default items changes after page is loaded this will detect that change and then select correct weapon setup.
const observador = new MutationObserver(function(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {

            item_table = document.querySelector("#p1equipment > div.fsmid")
            const images = item_table.querySelectorAll("ul > li")
            var item_list = []
            
            for (const li of images){
                
                var item_data = []
                const src = li.lastChild.getAttribute("src")
                const id = li.lastChild.getAttribute("id")
                item_data.push(src)
                item_data.push(id)
                item_list.push(item_data)
                
            }
            item_1.setAttribute("class", "menu p1 selected")
            item_1.lastChild.setAttribute("style", `background-position: 0px 0px; opacity: 1; background-image: url(${item_list[select_item_1][0]}); background-size: 60px 60px;`)
            
            item_2.setAttribute("class", "menu p1 selected")
            item_2.lastChild.setAttribute("style", `background-position: 0px 0px; opacity: 1; background-image: url(${item_list[select_item_2][0]}); background-size: 60px 60px;`)
            
            ability.lastChild.setAttribute("style", "background-position: 0px 0px; opacity: 1; background-image: url(//images.neopets.com/bd2/abilities/0021_c4hje5rwjo_lensflare/thumb_21.png); background-size: 60px 60px;")
            item_1_form.setAttribute("value", item_list[select_item_1][1])
            item_2_form.setAttribute("value", item_list[select_item_2][1])
            ability_form.setAttribute("value", "21")
        }
    }
});

const opcionesDeObservacion = {attributes: true};
observador.observe(item_1, opcionesDeObservacion);
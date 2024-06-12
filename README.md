# BD-Weapon-Selector

**BD-Weapon-Selector** is a Tampermonkey userscript for Neopets. This script automatically selects weapons and abilities on the Battledome page, streamlining your battling experience.

![20240612-0655-24 9294269-ezgif com-video-to-gif-converter](https://github.com/ramsestone/BD-Weapon-Selector/assets/74755255/9cfa4fc2-59c8-4002-b886-fd3728c3f5c0)


## Disclaimer
This script is designed to be safe but I'm not responsible for any actions taken against your account as a result of using this script. Use at your own risk.

## Features
- Automatically selects pre-configured weapons and abilities for battles.

## Installation
### Step 1: Install Tampermonkey
If you haven't already, you'll need to install Tampermonkey. Follow the instructions for your browser:

- [Tampermonkey for Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
- [Tampermonkey for Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
- [Tampermonkey for Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
- [Tampermonkey for Microsoft Edge](https://tampermonkey.net/?ext=dhdg&browser=edge)

### Step 2: Install the Script
1. Copy the raw content of `bd-weapon-selector.js`.
2. Open the Tampermonkey dashboard by clicking on the Tampermonkey icon in your browser toolbar and selecting 'Dashboard'.
3. Click on the 'Add a new script' button (a '+' icon).
4. Delete any content in the editor and paste the copied script code.
5. Save the script by clicking on the 'File' menu and selecting 'Save' (or pressing `Ctrl+S`).

Alternatively, you can drag and drop [bd-weapon-selector.js](https://github.com/ramsestone/BD-Weapon-Selector/releases/tag/v1.0) directly into your Tampermonkey dashboard to install it.

### Step 3: Using the Script
1. Go to the Battledome page on Neopets.
2. Start a fight.
3. The script will automatically select your pre-configured weapons and abilities for battles.
4. Ensure your weapons and abilities are set up correctly in the script.

## Configuration
To configure which weapons and abilities the script will select, follow these steps:

1. Open the source code of your script clicking on it on your Tampermonkey dashboard.
2. Locate the section of the script where the weapons and abilities are defined.
3. Use the following image as a reference to set your preferred weapons and abilities:

![Weapon Index](https://github.com/ramsestone/BD-Weapon-Selector/assets/74755255/c91bd43b-d51b-4c58-897b-935b902a2a01)

The numbers in the image correspond to the indices used in the script. Modify the script to select the indices of your preferred weapons and abilities as shown below:

```javascript
const select_item_1 = 0; // Replace with your preferred weapon index
const select_item_2 = 1; // Replace with your preferred weapon index

const select_ability = 21; // Replace with your preferred ability ID
```

4. This configuration will use `Turned Tooth` and `Void Blade` as weapons and `Lens Flare` as ability.

## Notes
- The image is only for reference. You have to equip your own weapons and have your ability unlocked.
- This is a full list of abilities ID
```
Name: Static Cling        || ID: 1
Name: An Icicle           || ID: 2
Name: Healing Fire        || ID: 3
Name: Halitosis           || ID: 10
Name: Drizzle             || ID: 11
Name: Bandage             || ID: 12
Name: Meditate            || ID: 13
Name: Shade               || ID: 14
Name: Cranky              || ID: 15
Name: Meh                 || ID: 16
Name: Positive Thinking   || ID: 17
Name: Sear                || ID: 18
Name: Irritable Minions   || ID: 19
Name: Throw Pillows       || ID: 20
Name: Lens Flare          || ID: 21
Name: Shhhhhhhhh...       || ID: 22
Name: Shroud              || ID: 23
Name: Float               || ID: 24
Name: Burrow              || ID: 25
Name: Tempest             || ID: 26
Name: Snowager's Breath   || ID: 27
Name: Warlock's Rage      || ID: 28
Name: Rejuvenate          || ID: 29
Name: Drain Life          || ID: 30
Name: Reflect             || ID: 31
Name: Rally Cry           || ID: 32
Name: Adrenaline Rush     || ID: 33
Name: Meepit Stampede     || ID: 34
Name: Summon Monoceraptor || ID: 35
Name: Esophagor Stench    || ID: 37
```

## Contributing
Feel free to submit issues or pull requests to improve the script.

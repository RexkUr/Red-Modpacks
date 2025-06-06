// priority: 0

ItemEvents.tooltip(event => {
	event.addAdvanced('kubejs:aquatic_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Respiration').gray()])
			text.add([Text.of('Depth Strider').gray()])
		} else {
			text.add([Text.of('Respiration').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Helmet, Copper Backtank').gray()])
			text.add([Text.of('Increases underwater air time on helmets').darkGray()])
			text.add([Text.of('and increases backtanks\' maximum air capacity.').darkGray()])
			
			text.add([Text.of('Depth Strider').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Boots').gray()])
			text.add([Text.of('Increases underwater movement speed.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:beastly_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Cavalier').gray()])
			text.add([Text.of('Multi-Leap').gray()])
		} else {
			text.add([Text.of('Cavalier').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Melee Weapons').gray()])
			text.add([Text.of('Increases damage dealt while mounted.').darkGray()])
			
			text.add([Text.of('Multi-Leap').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Leggings').gray()])
			text.add([Text.of('Allows the wearer to perform').darkGray()])
			text.add([Text.of('an extra jump mid-air per level.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:cyclic_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Sweeping Edge').gray()])
			text.add([Text.of('Riptide').gray()])
			text.add([Text.of('Vengeance').gray()])
		} else {
			text.add([Text.of('Sweeping Edge').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Sword').gray()])
			text.add([Text.of('Sweep attack deals more damage.').darkGray()])
			
			text.add([Text.of('Riptide').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Trident').gray()])
			text.add([Text.of('Launches wielder in the direction they\'re').darkGray()])
			text.add([Text.of('facing when thrown while in contact with water.').darkGray()])
			
			text.add([Text.of('Vengeance').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Armor').gray()])
			text.add([Text.of('Stores a portion of damage taken').darkGray()])
			text.add([Text.of('and applies it to wearer\'s attacks.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:enduring_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Vitality').gray()])
		} else {
			text.add([Text.of('Vitality').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('II').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Armor').gray()])
			text.add([Text.of('Increases maximum health of the wearer').darkGray()])
			text.add([Text.of('by one heart per level.').darkGray()])
			text.add([Text.of('Increases durability damage taken by the armor.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:everlasting_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Unbreaking').gray()])
		} else {
			text.add([Text.of('Unbreaking').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Any Equipment').gray()])
			text.add([Text.of('Grants a chance to negate durability damage.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:flinging_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Launch').gray()])
			text.add([Text.of('Volley').gray()])
		} else {
			text.add([Text.of('Launch').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('II').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Melee Weapons').gray()])
			text.add([Text.of('Launches target upwards upon strike.').darkGray()])
			
			text.add([Text.of('Volley').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('I - III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Bow, Crossbow').gray()])
			text.add([Text.of('Increases amount of arrows shot.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:frost_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Frost Walker').gray()])
		} else {
			text.add([Text.of('Frost Walker').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('IV').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Boots, Horse Armor').gray()])
			text.add([Text.of('Freezes the surface of water').darkGray()])
			text.add([Text.of('the wearer walks over.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:hallowed_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Smite').gray()])
			text.add([Text.of('Channeling').gray()])
			text.add([Text.of('Silver Eye').gray()])
		} else {
			text.add([Text.of('Smite').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('V').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Melee Weapons').gray()])
			text.add([Text.of('Increases damage dealt to undead mobs.').darkGray()])
			
			text.add([Text.of('Channeling').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('I').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Trident').gray()])
			text.add([Text.of('Strikes lightning on a foe').darkGray()])
			text.add([Text.of('during a thunderstorm.').darkGray()])
			
			text.add([Text.of('Silver Eye').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Spyglass').gray()])
			text.add([Text.of('Marks anyone viewed through the').darkGray()])
			text.add([Text.of('spyglass with a glowing outline.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:haunted_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Soul Chaser').gray()])
			text.add([Text.of('Soul Speed').gray()])
		} else {
			text.add([Text.of('Soul Chaser').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('I').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Ranged Weapons').gray()])
			text.add([Text.of('Allows projectiles to home in on targets.').darkGray()])
			
			text.add([Text.of('Soul Speed').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Boots').gray()])
			text.add([Text.of('Increases movement speed on soul infused blocks.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:heavy_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Guard Break').gray()])
			text.add([Text.of('Bracewalk').gray()])
			text.add([Text.of('Shockwave').gray()])
		} else {
			text.add([Text.of('Guard Break').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Melee Weapons').gray()])
			text.add([Text.of('Shortens targets\' invulnerability timer.').darkGray()])
			
			text.add([Text.of('Bracewalk').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Leggings').gray()])
			text.add([Text.of('Increases knockback resistance.').darkGray()])
			text.add([Text.of('Allows wearer to walk through blocks like').darkGray()])
			text.add([Text.of('cobwebs, destroying them in the process.').darkGray()])
			
			text.add([Text.of('Shockwave').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('IV').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Boots').gray()])
			text.add([Text.of('Creates a shockwave around the wearer').darkGray()])
			text.add([Text.of('when they take fall damage.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:infested_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Bane of Arthropods').gray()])
			text.add([Text.of('Spread of Ailments').gray()])
		} else {
			text.add([Text.of('Bane of Arthropods').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('V').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Melee Weapons').gray()])
			text.add([Text.of('Increases damage dealt to arthropods').darkGray()])
			text.add([Text.of('and cobweb mining speed.').darkGray()])
			
			text.add([Text.of('Spread of Ailments').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Crossbow').gray()])
			text.add([Text.of('Applies wielder\'s status effects to shot arrows.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:otherworldly_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Stasis').gray()])
			text.add([Text.of('Displacement').gray()])
		} else {
			text.add([Text.of('Stasis').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('I').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Ranged Weapons, Bubble Blower').gray()])
			text.add([Text.of('Allows projectiles to ignore gravity.').darkGray()])
			text.add([Text.of('Allows bubble blowers to create').darkGray()])
			text.add([Text.of('temporary bubble blocks anywhere.').darkGray()])
			
			text.add([Text.of('Displacement').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Chestplate').gray()])
			text.add([Text.of('Causes attackers to randomly teleport around.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:piercing_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Trueshot').gray()])
			text.add([Text.of('Impaling').gray()])
		} else {
			text.add([Text.of('Trueshot').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('II - IV').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Bow, Crossbow').gray()])
			text.add([Text.of('Allows arrows to pierce targets.').darkGray()])
			
			text.add([Text.of('Impaling').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('V').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Trident').gray()])
			text.add([Text.of('Increases damage dealt to aquatic mobs').darkGray()])
			text.add([Text.of('or ones in contact with water.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:pulling_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Reeling').gray()])
			text.add([Text.of('Reach').gray()])
		} else {
			text.add([Text.of('Reeling').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('II - III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Crossbow').gray()])
			text.add([Text.of('Allows crossbow projectiles to').darkGray()])
			text.add([Text.of('pull struck targets closer.').darkGray()])
			
			text.add([Text.of('Reach').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Chestplates').gray()])
			text.add([Text.of('Allows the wearer to reach further.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:silent_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Backstabbing').gray()])
			text.add([Text.of('Swift Sneak').gray()])
		} else {
			text.add([Text.of('Backstabbing').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Knife').gray()])
			text.add([Text.of('Increases damage dealt when target').darkGray()])
			text.add([Text.of('is struck from behind.').darkGray()])
			
			text.add([Text.of('Swift Sneak').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Leggings').gray()])
			text.add([Text.of('Increases movement speed while sneaking.').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:swift_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.of('Swiftstrike').gray()])
			text.add([Text.of('Quick Draw').gray()])
		} else {
			text.add([Text.of('Swiftstrike').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Melee Weapons').gray()])
			text.add([Text.of('Increases attack speed.').darkGray()])
			
			text.add([Text.of('Quick Draw').gray().underlined()])
			text.add([Text.of('Max. Level: ').darkGray(), Text.of('I - III').gray()])
			text.add([Text.of('Applied to: ').darkGray(), Text.of('Ranged Weapons').gray()])
			text.add([Text.of('Increases draw speed.').darkGray()])
		}
	})
})
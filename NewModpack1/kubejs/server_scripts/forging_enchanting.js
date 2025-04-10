// priority: 0

ServerEvents.recipes(event => {
    // ==================== Forging Functions ====================
    function modifyingWeapon(material, catalystItem, resultItem) {
        event.custom({
            type: 'miningmaster:forging_recipe', 
            gems: [
                {item: material}, 
                {item: material}, 
                {item: 'architects_palette:withered_bone'}, 
                {item: 'architects_palette:withered_bone'}, 
                {item: 'minecraft:quartz'}, 
                {item: 'minecraft:quartz'}
            ], 
            catalyst: {item: catalystItem}, 
            result: {item: resultItem}
        })
    }

    function smithEnchanting(templateItem, [enchantment]) {
        event.custom({
            type: 'miningmaster:gem_smithing_recipe', 
            blacklist: {tag: 'miningmaster:gem_enchanting_blacklist'}, 
            gem: {item: templateItem}, 
            enchantments: [enchantment]
        })
    }

    // ==================== Constants ====================
    const allColours = [
        'white', 'orange', 'magenta', 'light_blue', 
        'yellow', 'lime', 'pink', 'gray', 
        'light_gray', 'cyan', 'purple', 'blue', 
        'brown', 'green', 'red', 'black'
    ]

    // ==================== Runes Recipes ====================
    allColours.forEach(colour => {
        event.custom({
            type: 'miningmaster:forging_recipe', 
            gems: [
                {item: 'minecraft:amethyst_shard'}, 
                {item: 'minecraft:amethyst_shard'}, 
                {item: 'supplementaries:antique_ink'}, 
                {item: 'minecraft:'+colour+'_dye'}
            ], 
            catalyst: {item: 'quark:blank_rune'}, 
            result: {item: 'quark:'+colour+'_rune'}
        })
    })

    // Blank Rune Recipe
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'twigs:pebble'}, {item: 'twigs:pebble'}, {item: 'twigs:pebble'},
            {item: 'architects_palette:withered_bone'}, {item: 'architects_palette:withered_bone'}, {item: 'architects_palette:withered_bone'},
            {item: 'minecraft:quartz'}, {item: 'minecraft:quartz'}, {item: 'minecraft:quartz'}
        ], 
        catalyst: {tag: 'forge:stone'}, 
        result: {item: 'quark:blank_rune', count: 2}
    })

    // Rainbow Rune Recipe
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'quark:red_rune'}, {item: 'quark:orange_rune'}, {item: 'quark:yellow_rune'},
            {item: 'quark:lime_rune'}, {item: 'quark:light_blue_rune'}, {item: 'quark:blue_rune'},
            {item: 'quark:magenta_rune'}, {item: 'quark:pink_rune'}, {item: 'quark:white_rune'}
        ], 
        catalyst: {item: 'quark:blank_rune'}, 
        result: {item: 'quark:rainbow_rune', count: 3}
    })

    // ==================== Enchanting tablets ====================
    // Blank
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, 
            {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, 
            {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}
        ], 
        catalyst: {tag: 'forge:stone'}, 
        result: {item: 'kubejs:blank_tablet', count: 2}
    })
    // Aquatic
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:nautilus_shell'}, {item: 'minecraft:nautilus_shell'}, {item: 'minecraft:nautilus_shell'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:aquatic_tablet'}
    })
    // Beastly
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:goat_horn'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:beastly_tablet'}
    })
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'caverns_and_chasms:lost_goat_horn'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:beastly_tablet'}
    }).id('kubejs:beastly_tablet_special')
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:rabbit_foot'}, {item: 'minecraft:rabbit_foot'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:beastly_tablet'}
    })
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, 
            {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:beastly_tablet'}
    })
    // Cyclic
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:cyclic_tablet'}
    })
    // Enduring
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {tag: 'raspberry_flavoured:golden_healers'}, {tag: 'raspberry_flavoured:golden_healers'}, 
            {tag: 'raspberry_flavoured:golden_healers'}, {tag: 'raspberry_flavoured:golden_healers'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:enduring_tablet'}
    })
    // Everlasting
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'kubejs:stardust'}, {item: 'create:powdered_obsidian'}, {item: 'create:powdered_obsidian'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:everlasting_tablet'}
    })
    // Flinging
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, 
            {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:flinging_tablet'}
    })
    // Frost
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, 
            {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:frost_tablet'}
    })
    // Hallowed
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'oreganized:silver_ingot'}, {item: 'oreganized:silver_ingot'}, {item: 'oreganized:silver_ingot'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:hallowed_tablet'}
    })
    // Haunted
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'quark:soul_bead'}, {item: 'quark:soul_bead'}, {item: 'quark:soul_bead'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:haunted_tablet'}
    })
    // Heavy
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, 
            {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, 
            {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:heavy_tablet'}
    })
    // Infested
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:spider_eye'}, {item: 'minecraft:spider_eye'}, {item: 'minecraft:spider_eye'}, 
            {item: 'minecraft:spider_eye'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:infested_tablet'}
    })
    // Otherworldly
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:otherworldly_tablet'}
    })
    // Piercing
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:piercing_tablet'}
    })
    // Pulling
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:pulling_tablet'}
    })
    // Silent
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:silent_tablet'}
    })
    // Swift
    event.custom({
        type: 'miningmaster:forging_recipe', 
        gems: [
            {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, 
            {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}
        ], 
        catalyst: {item: 'kubejs:blank_tablet'}, 
        result: {item: 'kubejs:swift_tablet'}
    })

    // ==================== Weapon Modifications ====================
    modifyingWeapon('minecraft:netherite_ingot', 'minecraft:netherite_axe', 'clash:swept_axe')
    modifyingWeapon('oreganized:electrum_ingot', 'oreganized:electrum_sword', 'clash:spear')
    modifyingWeapon('caverns_and_chasms:necromium_ingot', 'abnormals_delight:necromium_knife', 'clash:greatblade')
    modifyingWeapon('alloyed:steel_ingot', 'alloyed:steel_axe', 'mace_backport:mace')
    modifyingWeapon('additionaladditions:rose_gold_alloy', 'additionaladditions:rose_gold_sword', 'kubejs:rose_gold_rapier')

    // ==================== Enchanting Tablets ====================
    // Aquatic Enchantments
    smithEnchanting('kubejs:aquatic_tablet', ['ensorcellation:angler'])
    smithEnchanting('kubejs:aquatic_tablet', ['minecraft:respiration'])
    smithEnchanting('kubejs:aquatic_tablet', ['create:capacity'])
    smithEnchanting('kubejs:aquatic_tablet', ['minecraft:depth_strider'])

    // Beastly Enchantments
    smithEnchanting('kubejs:beastly_tablet', ['ensorcellation:cavalier'])
    smithEnchanting('kubejs:beastly_tablet', ['miningmaster:knight_jump'])

    // Cyclic Enchantments
    smithEnchanting('kubejs:cyclic_tablet', ['minecraft:sweeping'])
    smithEnchanting('kubejs:cyclic_tablet', ['minecraft:riptide'])
    smithEnchanting('kubejs:cyclic_tablet', ['allurement:vengeance'])

    // Enduring Enchantments
    smithEnchanting('kubejs:enduring_tablet', ['miningmaster:heartfelt'])

    // Everlasting Enchantments
    smithEnchanting('kubejs:everlasting_tablet', ['minecraft:unbreaking'])

    // Flinging Enchantments
    smithEnchanting('kubejs:flinging_tablet', ['allurement:launch'])
    smithEnchanting('kubejs:flinging_tablet', ['minecraft:multishot'])
    smithEnchanting('kubejs:flinging_tablet', ['ensorcellation:volley'])

    // Frost Enchantments
    smithEnchanting('kubejs:frost_tablet', ['minecraft:frost_walker'])

    // Hallowed Enchantments
    smithEnchanting('kubejs:hallowed_tablet', ['minecraft:smite'])
    smithEnchanting('kubejs:hallowed_tablet', ['minecraft:channeling'])
    smithEnchanting('kubejs:hallowed_tablet', ['usefulspyglass:marking'])

    // Haunted Enchantments
    smithEnchanting('kubejs:haunted_tablet', ['additional_enchantments:homing'])
    smithEnchanting('kubejs:haunted_tablet', ['minecraft:soul_speed'])

    // Heavy Enchantments
    smithEnchanting('kubejs:heavy_tablet', ['kubejs:guard_break'])
    smithEnchanting('kubejs:heavy_tablet', ['additional_enchantments:bracewalk'])
    smithEnchanting('kubejs:heavy_tablet', ['allurement:shockwave'])

    // Infested Enchantments
    smithEnchanting('kubejs:infested_tablet', ['minecraft:bane_of_arthropods'])
    smithEnchanting('kubejs:infested_tablet', ['allurement:spread_of_ailments'])

    // Otherworldly Enchantments
    smithEnchanting('kubejs:otherworldly_tablet', ['supplementaries:stasis'])
    smithEnchanting('kubejs:otherworldly_tablet', ['additional_enchantments:straight_shot'])
    smithEnchanting('kubejs:otherworldly_tablet', ['ensorcellation:displacement'])

    // Piercing Enchantments
    smithEnchanting('kubejs:piercing_tablet', ['minecraft:piercing'])
    smithEnchanting('kubejs:piercing_tablet', ['ensorcellation:trueshot'])
    smithEnchanting('kubejs:piercing_tablet', ['minecraft:impaling'])

    // Pulling Enchantments
    smithEnchanting('kubejs:pulling_tablet', ['allurement:reeling'])
    smithEnchanting('kubejs:pulling_tablet', ['ensorcellation:reach'])

    // Silent Enchantments
    smithEnchanting('kubejs:silent_tablet', ['farmersdelight:backstabbing'])
    smithEnchanting('kubejs:silent_tablet', ['minecraft:swift_sneak'])

    // Swift Enchantments
    smithEnchanting('kubejs:swift_tablet', ['additional_enchantments:faster_attacks'])
    smithEnchanting('kubejs:swift_tablet', ['ensorcellation:quick_draw'])
    smithEnchanting('kubejs:swift_tablet', ['minecraft:quick_charge'])
})

// ==================== Enchantment Filtering ====================

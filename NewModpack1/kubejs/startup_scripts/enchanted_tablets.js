// priority: 0

// Define rarity constants
const RARITY_EPIC = 'EPIC'
const RARITY_RARE = 'RARE'

StartupEvents.registry('item', event => {
    // Register blank and everlasting tablets
    event.create('kubejs:blank_tablet')
        .displayName('Blank Tablet')
        .texture('kubejs:item/enchanted_tablets/blank_tablet')

    event.create('kubejs:everlasting_tablet')
        .displayName('Everlasting Tablet')
        .texture('kubejs:item/enchanted_tablets/everlasting_tablet')
        .glow(true)
        .rarity(RARITY_EPIC)

    // Register other enchanted tablets
    const enchantedTablets = [
        'aquatic_tablet',
        'beastly_tablet',
        'cyclic_tablet',
        'enduring_tablet',
        'flinging_tablet',
        'frost_tablet',
        'hallowed_tablet',
        'haunted_tablet',
        'heavy_tablet',
        'infested_tablet',
        'otherworldly_tablet',
        'piercing_tablet',
        'pulling_tablet',
        'silent_tablet',
        'swift_tablet'
    ]

    enchantedTablets.forEach(tablet => {
        event.create(`kubejs:${tablet}`)
            .displayName(tablet.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
            .texture(`kubejs:item/enchanted_tablets/${tablet}`)
            .glow(true)
            .rarity(RARITY_RARE)
    })
})

// Add items to creative tab
StartupEvents.modifyCreativeTab('kubejs.brewing', event => {
    event.add('kubejs:blank_tablet')
    event.add('kubejs:everlasting_tablet')
    enchantedTablets.forEach(tablet => {
        event.add(`kubejs:${tablet}`)
    })
})
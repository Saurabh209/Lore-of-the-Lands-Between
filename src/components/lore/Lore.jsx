import React from 'react';

const Lore = () => {


    const AllLore = [

        // FUNDAMENTAL COSMOLOGY & OUTER GODS
        {
            title: "The Greater Will",
            icon: "Eye",
            description: "The supreme Outer God that commands the Golden Order",
            content: `The Greater Will is the most dominant Outer God, responsible for establishing the Golden Order through Queen Marika. It sent the Elden Beast to the Lands Between as its vassal, which became the Elden Ring itself. The Greater Will seeks absolute order and control, using the Two Fingers as its intermediaries to communicate with mortals.
Its influence permeates every aspect of the Golden Order - from the Erdtree's dominance to the systematic suppression of other faiths and powers. The Greater Will's ultimate goal appears to be the creation of a perfect, unchanging world under its divine authority.`
        },
        {
            title: "The Elden Ring",
            icon: "Circle",
            description: "The metaphysical representation of the world's fundamental laws",
            content: `The Elden Ring is both a physical object and a metaphysical concept - the source of all power and the foundation of reality in the Lands Between. Composed of Great Runes that govern different aspects of existence, it was shattered by Queen Marika in her grief over Godwyn's death.
Each fragment, or Great Rune, grants immense power to its bearer but also corrupts them. The Shattering of the Ring plunged the world into chaos, with demigods warring endlessly for supremacy while the very laws of nature became unstable.`
        },
        {
            title: "The Elden Beast",
            icon: "Star",
            description: "The living vassal of the Greater Will",
            content: `The Elden Beast is a cosmic entity sent by the Greater Will to become the Elden Ring. It exists as both the source of the Golden Order's power and its ultimate enforcer. When challenged, the Beast reveals its true form - a massive, ethereal creature of stars and divine light.
As the embodiment of Order itself, the Elden Beast represents the Greater Will's direct intervention in the world. Its defeat marks the end of one age and the potential beginning of another, depending on the Tarnished's choice.`
        },
        {
            title: "The Rune of Death",
            icon: "Skull",
            description: "The forbidden law removed from the Elden Ring",
            content: `The Rune of Death, or Destined Death, was one of the core principles of the natural order. When Queen Marika entrusted it to Maliketh, the Black Blade, she severed mortality from the world. From then on, true death no longer existed – souls returned to the Erdtree instead of passing on.
This act granted immortality to the Golden Order, but also twisted fate itself. When Ranni the Witch stole a fragment of the Rune, she set in motion the Night of Black Knives – an event that slew Godwyn the Golden and shattered the illusion of eternal life.`
        },
        {
            title: "Ranni the Witch",
            icon: "Moon",
            description: "The Lunar Princess who defied fate",
            content: `Ranni, daughter of Radagon and Rennala, rejected both her divine birthright and the will of the Greater Will. She orchestrated the Night of Black Knives to free herself from the control of the Two Fingers, casting aside her flesh to inhabit a doll body.
Unlike Marika, Ranni did not seek to repair the Golden Order. Instead, she championed the Age of Stars – a cold, distant future guided by the Moon and the Dark. Her path offers freedom from the meddling of Outer Gods, but at the cost of warmth, life, and familiarity.`
        },
        {
            title: "The Frenzied Flame",
            icon: "Flame",
            description: "The maddening Outer God of chaos",
            content: `Beneath the Lands Between festers the Frenzied Flame, an Outer God embodying chaos, madness, and suffering. Its influence spreads through yellow flame and the cries of those who cannot bear the order imposed by the Erdtree.
The Frenzied Flame offers a path of total destruction – to burn away not just the Erdtree, but the very laws of existence. To embrace it is to embrace utter annihilation, though some see it as the only true freedom from the endless cycle of oppression and control.`
        },
        {
            title: "The Dragons",
            icon: "Dragon",
            description: "The ancient rulers before the Erdtree",
            content: `Before the rise of the Erdtree and the Golden Order, dragons reigned supreme over the Lands Between. Led by the ancient Dragonlord Placidusax, they communed with their own Outer God and wielded the power of storms and fire.
The coming of the Erdtree and the Greater Will marked their downfall. Many dragons were slain or corrupted, their glory fading into memory. Yet remnants endure – some clinging to hatred, others preserving the legacy of a forgotten age of fire and scale.`
        },
        {
            title: "The Night of Black Knives",
            icon: "Dagger",
            description: "The assassination that doomed the Golden Lineage",
            content: `On a night shrouded in mystery, a group of assassins wielding blades imbued with stolen fragments of the Rune of Death struck down Godwyn the Golden. Though his body lived, his soul perished, marking the first true death since Marika's removal of the Rune.
This tragedy broke Marika, spurring her to shatter the Elden Ring in defiance of the Greater Will. The Shattering War that followed tore apart the Lands Between, as demigods and lords vied for the fragments of order.`
        },

        // QUEEN MARIKA & THE GOLDEN LINEAGE
        {
            title: "Queen Marika the Eternal",
            icon: "Crown",
            description: "The God-Queen who established the Golden Order",
            content: `Marika ascended from the Numen race to become a goddess, establishing the Golden Order under the Greater Will's authority. She bore children with multiple consorts - first with Godfrey, producing Godwyn, Morgott, and Mohg, then secretly with herself as Radagon, creating Malenia and Miquella.
Her rule brought prosperity but also oppression of other faiths and peoples. When Godwyn was slain, her grief and rage led her to shatter the Elden Ring, an act of rebellion that saw her imprisoned within the Erdtree as punishment by the Greater Will.`
        },
        {
            title: "Radagon of the Golden Order",
            icon: "Hammer",
            description: "The other half of Marika's divine nature",
            content: `Radagon is both Marika's consort and her other self - the masculine aspect of the same divine being. Initially appearing as a separate entity who married Rennala of the Academy, he was later recalled to become Marika's husband and the second Elden Lord.
Where Marika represented change and rebellion, Radagon embodied order and loyalty to the Greater Will. His attempts to repair the shattered Elden Ring ultimately failed, leaving him fused with Marika as a broken vessel for the Elden Beast.`
        },
        {
            title: "Godfrey, First Elden Lord",
            icon: "Axe",
            description: "The warrior king who conquered for the Golden Order",
            content: `Hoarah Loux was a barbaric warrior chieftain who became Godfrey when he wed Queen Marika. As the First Elden Lord, he led the Golden Order's armies in brutal campaigns against the Giants, Dragons, and Storm Lord, expanding Marika's domain through conquest.
When his battles ended and his warrior spirit was no longer needed, Marika stripped him of grace and banished him from the Lands Between. He became the first Tarnished, destined to return when the Golden Order faced its darkest hour.`
        },
        {
            title: "Godwyn the Golden",
            icon: "Sun",
            description: "The Prince of Death and first casualty of the Shattering",
            content: `Godwyn was the firstborn son of Marika and Godfrey, beloved by all as the perfect golden prince. He befriended dragons, ending the ancient war and ushering in an age of peace. His nobility and strength made him the pride of the Golden Lineage.
His death on the Night of Black Knives was incomplete - while his soul perished, his body lived on, becoming the Prince of Death. His corruption spread through the roots of the Erdtree, spawning Those Who Live in Death and fundamentally challenging the Golden Order's promise of eternal life.`
        },
        {
            title: "Morgott, the Omen King",
            icon: "Throne",
            description: "The cursed demigod who defended Leyndell",
            content: `Born an Omen - cursed beings despised by the Golden Order - Morgott was hidden away in shame despite his royal blood. Unlike his twin Mohg, Morgott remained loyal to the Golden Order, becoming the secret protector of Leyndell as Margit the Fell Omen.
His devotion to an order that rejected him is both tragic and admirable. Even as other demigods warred for power, Morgott stood as the last guardian of the capital, defending the Erdtree that symbolized everything he could never be part of.`
        },
        {
            title: "Mohg, Lord of Blood",
            icon: "Blood",
            description: "The Omen who serves the Formless Mother",
            content: `Mohg, Morgott's twin, embraced his curse and sought power through forbidden means. He serves the Formless Mother, an Outer God of blood and wounds, establishing the Mohgwyn Dynasty in opposition to the Golden Order.
His obsession with Miquella led him to cocoon the young Empyrean, believing he could elevate him to godhood as his consort. This kidnapping represents Mohg's attempt to create his own age, built on blood sacrifice and the corruption of innocence.`
        },
        {
            title: "Malenia, Blade of Miquella",
            icon: "Flower",
            description: "The Empyrean cursed with the Scarlet Rot",
            content: `Born cursed with the Scarlet Rot, Malenia became the most feared warrior in the Lands Between. Her devotion to her twin brother Miquella is absolute - she has never known defeat because she fights not for glory, but for love.
Her battle with Radahn brought mutual destruction, with Malenia blooming into the Goddess of Rot to survive. This transformation represents the tragic cost of her curse - to save those she loves, she must embrace the very force that destroys everything around her.`
        },
        {
            title: "Miquella, the Unalloyed",
            icon: "Tree",
            description: "The Empyrean who sought to cure all curses",
            content: `Born cursed with eternal youth, Miquella possessed incredible power and compassion. He sought to create Unalloyed Gold - a perfect metal free from the influence of Outer Gods that could cure any curse, including his sister's Scarlet Rot.
His creation of the Haligtree represents hope for the rejected and cursed. Even in his enforced slumber in Mohg's cocoon, his influence draws the dispossessed - Albinaurics, Omens, and others rejected by the Golden Order find sanctuary in his shadow.`
        },

        // THE DEMIGODS & GREAT RUNE BEARERS
        {
            title: "Radahn, the Starscourge",
            icon: "Meteor",
            description: "The gravity-controlling general who held back fate itself",
            content: `Radahn learned gravity magic to continue riding his beloved horse Leonard despite his massive size. As a general, he was unmatched, and his mastery over gravitational forces allowed him to hold the very stars in place, preventing fate from moving forward.
His battle with Malenia ended in mutual destruction - her Scarlet Rot consuming his mind while his gravitational prison held the stars fixed. Even in madness, he continued his cosmic vigil, becoming both guardian and prisoner of the stagnant heavens.`
        },
        {
            title: "Rykard, Lord of Blasphemy",
            icon: "Serpent",
            description: "The demigod who fed himself to the God-Devouring Serpent",
            content: `Once a prosecutor of heretics for the Golden Order, Rykard came to despise the very system he served. He fed himself to the God-Devouring Serpent, believing that only by becoming a blasphemous god-eater could he challenge the Greater Will's tyranny.
His transformation represents the ultimate corruption of justice - the prosecutor becoming the very heresy he once hunted. His promise to "devour the gods together" appeals to those who have suffered under divine rule, making blasphemy itself a form of desperate hope.`
        },
        {
            title: "Rennala, Queen of the Full Moon",
            icon: "FullMoon",
            description: "The sorceress queen broken by love and loss",
            content: `Rennala ruled the Academy of Raya Lucaria as a master of glintstone sorcery and lunar magic. Her marriage to Radagon brought a golden age of cooperation between faith and sorcery, but his departure to become Marika's consort shattered her mind and spirit.
Now she sits in her library, obsessively rebirthing her students with the Great Rune of the Unborn, seeking to perfect what can never be. Her tragedy represents the cost of divine politics - mortals broken by the whims of gods they trusted.`
        },

        // ANCIENT CIVILIZATIONS & PEOPLES
        {
            title: "The Giants",
            icon: "Mountain",
            description: "The fire-worshipping race exterminated by the Golden Order",
            content: `The Giants of the Mountaintops were the keepers of the Flame of Ruin, the one fire that could burn the Erdtree. Their faith in fire directly opposed the Golden Order's authority, making their destruction inevitable in Marika's campaign for dominance.
Godfrey led the war that exterminated the Giants, with only their chieftain surviving, cursed to tend the flame for eternity. The Giants' genocide represents the Golden Order's intolerance for any power that could threaten its supremacy.`
        },
        {
            title: "The Crucible",
            icon: "Spiral",
            description: "The primordial essence of life before the Erdtree",
            content: `The Crucible was the source of all life before the Erdtree's dominance. It represented chaotic, primal vitality - where all life was one, blessed with horns, wings, tails, and other bestial aspects that were seen as divine.
The Golden Order came to view Crucible aspects as ominous, relegating those blessed by them to the margins of society. This represents the Order's rejection of natural chaos in favor of artificial perfection, turning blessings into curses through prejudice.`
        },
        {
            title: "The Nox and the Eternal Cities",
            icon: "Stars",
            description: "The underground civilization that defied the Greater Will",
            content: `The Nox dwelt in the Eternal Cities of Nokron and Nokstella, masters of silver tears and artificial life. Their greatest sin was attempting to create a Lord of Night - an artificial god to challenge the Greater Will's supremacy.
For this blasphemy, they were cast underground by meteors, their cities buried beneath the earth. Yet they persisted, creating silver tears and Mimic Tears, proving that life and consciousness could exist independent of divine will.`
        },
        {
            title: "The Albinaurics",
            icon: "Drop",
            description: "The artificial race seeking their origins",
            content: `The Albinaurics are an artificial race created by human hands, born from primordial silver tears. They age and lose the use of their legs, eventually dying and returning to silver liquid, cycling through existence in search of their true purpose.
Their persecution by the Golden Order stems from their artificial nature - they represent life created without divine blessing, challenging the notion that only gods can create true life. Many found sanctuary under Miquella's Haligtree, away from persecution.`
        },
        {
            title: "The Misbegotten",
            icon: "Wing",
            description: "The hybrid beings marked by the Crucible's influence",
            content: `The Misbegotten are humanoids marked by Crucible aspects - wings, tails, and bestial features that were once considered blessed but became omens under the Golden Order. They serve as laborers and warriors, often treated as little better than beasts.
Their existence represents the Golden Order's transformation of natural diversity into social hierarchy. What was once sacred became shameful, turning divine blessing into a mark of servitude and rejection.`
        },
        {
            title: "The Omens",
            icon: "Horn",
            description: "Those cursed with the Crucible's horns and hatred",
            content: `Omens are humans born with horns and other Crucible aspects, considered cursed by the Golden Order. Noble Omens like Morgott and Mohg are confined, while common Omens have their horns brutally cut off, often dying from the procedure.
The persecution of Omens reveals the Golden Order's cruelty - these beings possess no inherent evil, yet are treated as monsters for their appearance. Their curse lies not in their nature, but in society's rejection of them.`
        },

        // LOCATIONS & DOMAINS
        {
            title: "The Erdtree",
            icon: "Tree",
            description: "The golden tree that dominates the Lands Between",
            content: `The Erdtree is both a physical tree and a metaphysical symbol of the Golden Order's power. Its golden light bathes the Lands Between, and its roots extend throughout the realm, connecting all life to the Greater Will's authority.
Souls return to the Erdtree upon death, rather than passing on to whatever lies beyond. This eternal recycling serves the Greater Will's purpose of maintaining control, but also represents a form of spiritual imprisonment for all who live under its light.`
        },
        {
            title: "Leyndell, the Royal Capital",
            icon: "Castle",
            description: "The seat of power for the Golden Order",
            content: `Leyndell stands as the greatest city in the Lands Between, built around the base of the Erdtree. Its golden walls and spires represent the pinnacle of the Golden Order's architectural achievement, while its sewers hide the shameful reality of Omen persecution.
The capital's defenses held throughout the Shattering War, protected by Morgott's vigilance. Yet even this bastion of order shows cracks - the thorns blocking the Erdtree's base reveal that even the gods' home is not immune to corruption.`
        },
        {
            title: "Caelid, the Scarlet Rot Wasteland",
            icon: "Rot",
            description: "The continent consumed by Malenia's curse",
            content: `Once a thriving land ruled by Radahn, Caelid became a nightmare realm when Malenia bloomed into the Goddess of Rot during their battle. The entire continent festers with Scarlet Rot, its inhabitants transformed into monstrous aberrations.
Caelid represents the cost of the Shattering War - entire regions sacrificed to the ambitions of demigods. The rot spreads ever outward, threatening to consume the entire world if left unchecked.`
        },
        {
            title: "Raya Lucaria Academy",
            icon: "Book",
            description: "The center of glintstone sorcery and learning",
            content: `The Academy stands as the premier institution of magical learning, where scholars study the mysteries of the cosmos through glintstone sorcery. Under Rennala's rule, it reached heights of knowledge that rivaled even the Golden Order's understanding.
The Academy's seal protects it from outside interference, but also isolates it from the world's changes. This represents the danger of pure scholarship divorced from reality - knowledge that serves no purpose but its own accumulation.`
        },
        {
            title: "The Haligtree",
            icon: "GoldenTree",
            description: "Miquella's sanctuary for the rejected and cursed",
            content: `The Haligtree was Miquella's attempt to create an alternative to the Erdtree - a place where those rejected by the Golden Order could find acceptance. Watered with Miquella's own blood, it grew as a beacon of hope for Albinaurics, Omens, and other outcasts.
Though Miquella's kidnapping left it slowly dying, the Haligtree represents the possibility of divine compassion - a god who chooses to embrace the rejected rather than cast them out.`
        },
        {
            title: "Volcano Manor",
            icon: "Volcano",
            description: "Rykard's blasphemous stronghold of heretics",
            content: `Volcano Manor serves as a gathering place for those who oppose the Golden Order through violence and blasphemy. Under Rykard's influence, it became a haven for assassins, heretics, and rebels united by their hatred of the gods.
The Manor represents organized resistance to divine authority - not through noble ideals, but through embracing the very evils the Golden Order claims to oppose. It offers power to those willing to abandon morality for revenge.`
        },

        // DEATH & THE UNDEAD
        {
            title: "Those Who Live in Death",
            icon: "Skeleton",
            description: "The undead spawned by Godwyn's corruption",
            content: `When Godwyn's soulless body began to corrupt, it spawned a new form of undeath throughout the Lands Between. Those Who Live in Death are neither truly alive nor properly dead - they exist in a liminal state that defies the Golden Order's cosmic structure.
Their existence proves that the removal of Death from the Elden Ring created fundamental instabilities. They represent the return of true mortality to a world that tried to deny it, spreading like a plague of inevitability.`
        },
        {
            title: "Deathroot",
            icon: "Root",
            description: "The corruption that spreads from Godwyn's remains",
            content: `Deathroot grows from the Prince of Death's corrupted body, spreading through the Erdtree's root system like a cancer. Wherever it appears, it brings undeath and decay, creating Those Who Live in Death and other abominations.
The root represents the fundamental corruption of the Golden Order's promise - eternal life becomes eternal suffering, and paradise becomes purgatory. Even the Erdtree itself is not immune to this spreading taint.`
        },
        {
            title: "Maliketh, the Black Blade",
            icon: "BlackSword",
            description: "The Shadowbound guardian of Death itself",
            content: `Maliketh is Marika's shadowbound beast, tasked with guarding the Rune of Death after its removal from the Elden Ring. His weapon, the Black Blade, is the only thing capable of truly killing immortal beings.
His failure to prevent the theft of Death's fragment led to Godwyn's assassination and his own exile. Now he hungers for Deathroot, consuming it in a futile attempt to gather back what was stolen, driven mad by his failure to protect his mistress's most precious secret.`
        },

        // FAITH & HERESY
        {
            title: "The Two Fingers",
            icon: "Fingers",
            description: "The Greater Will's divine messengers",
            content: `The Two Fingers serve as intermediaries between the Greater Will and mortals, interpreting divine will and guiding the faithful. They select Empyreans who might become gods and Tarnished who might become Elden Lords.
Despite their divine authority, the Two Fingers are fallible interpreters, sometimes misunderstanding their master's will or clinging to outdated guidance. Their rigid adherence to order makes them obstacles when change becomes necessary.`
        },
        {
            title: "The Three Fingers",
            icon: "ThreeFingers",
            description: "The maddening herald of the Frenzied Flame",
            content: `Deep beneath Leyndell, the Three Fingers wait to bestow the Frenzied Flame upon those driven to despair by the Golden Order's failures. They represent chaos incarnate - the antithesis of the Two Fingers' ordered doctrine.
To touch the Three Fingers is to embrace madness and destruction, becoming the Lord of Chaos destined to burn away all of creation. Yet for some, this total annihilation seems preferable to continued suffering under divine tyranny.`
        },
        {
            title: "The Golden Order Fundamentalism",
            icon: "Seal",
            description: "The scholarly approach to divine law",
            content: `Fundamentalism treats the Golden Order as a subject for academic study, seeking to understand divine law through reason and scholarship. Practitioners like Brother Corhyn and Goldmask attempt to perfect the Order through intellectual inquiry.
This approach represents the attempt to improve divine rule through mortal understanding - yet it often leads to the realization that the gods themselves are flawed, requiring corrections that challenge the very foundations of faith.`
        },
        {
            title: "The Dragon Cult",
            icon: "Lightning",
            description: "The faith that honors the ancient dragons",
            content: `The Dragon Cult emerged from Godwyn's friendship with the ancient dragons, transforming enemies into allies through mutual respect. Dragon knights wield lightning incantations, channeling the power of their draconic companions.
This faith represents successful integration rather than conquest - showing that the Golden Order could accommodate other powers when it chose cooperation over domination. It remains one of the few pre-Erdtree traditions that survived absorption.`
        },
        {
            title: "The Blood Star",
            icon: "RedStar",
            description: "The celestial body sacred to Mohg's dynasty",
            content: `The Blood Star is the celestial patron of Mohg's Mohgwyn Dynasty, associated with blood sacrifice and the Formless Mother. Its red light competes with the Erdtree's golden radiance, representing an alternative cosmic order built on pain and dedication.
The star's influence grows stronger as more blood is spilled in its name, suggesting that divine power can be cultivated through devotion and sacrifice, even when that devotion takes forms the Golden Order would consider abhorrent.`
        },

        // THE TARNISHED & GRACE
        {
            title: "The Tarnished",
            icon: "Sword",
            description: "The graceless warriors called back to restore order",
            content: `The Tarnished are descendants of those stripped of grace and exiled from the Lands Between. Led by Godfrey, they wandered foreign lands until the Shattering, when grace called them back to claim the throne of Elden Lord.
Their exile gave them strength through suffering, making them capable of what the demigods could not achieve - the will to change rather than merely preserve. As outsiders, they can see solutions that those bound by tradition cannot.`
        },
        {
            title: "The Guidance of Grace",
            icon: "Light",
            description: "The golden light that guides the worthy",
            content: `Grace manifests as golden light that guides those chosen by the Greater Will toward their destiny. It points the way forward, reveals hidden paths, and marks Sites of Grace where the faithful can rest and recover.
Yet grace is fickle - it can be lost through transgression or gained through deed. The Tarnished's unique relationship with grace makes them both blessed and cursed, forever dependent on divine approval for their power.`
        },
        {
            title: "Roundtable Hold",
            icon: "Table",
            description: "The gathering place of Tarnished champions",
            content: `The Roundtable Hold exists in a space between worlds, serving as a sanctuary where Tarnished can gather, trade, and plan their approach to claiming the Elden Ring. It mirrors the great hall in Leyndell, but remains accessible to the graceless.
This liminal space represents community among outcasts - those rejected by the established order finding fellowship with each other. Yet even here, tensions arise as different Tarnished pursue conflicting visions of what the new order should become.`
        },

        // MAGIC & POWER SYSTEMS
        {
            title: "Glintstone Sorcery",
            icon: "Crystal",
            description: "The academic magic of stellar observation",
            content: `Glintstone sorcery draws power from the stars and cosmic forces, studied at Raya Lucaria Academy by scholars who map the heavens and decode celestial mysteries. Each school focuses on different aspects - from gravitational manipulation to lunar illusions.
This magic represents the pursuit of knowledge for its own sake, seeking to understand the universe through empirical study. Yet it also reveals the cosmos's indifference to mortal concerns - the stars care nothing for human suffering or joy.`
        },
        {
            title: "Incantations of Faith",
            icon: "Prayer",
            description: "Divine magic channeled through belief",
            content: `Incantations draw power from faith in various divine entities - the Erdtree, ancient dragons, the Frenzied Flame, or other Outer Gods. The strength of the magic depends not on academic understanding but on the depth of the caster's devotion.
This represents the power of belief itself - faith can literally reshape reality when it burns bright enough. Yet it also shows faith's danger - absolute devotion can justify any atrocity when performed in service to divine will.`
        },
        {
            title: "Spirit Summoning",
            icon: "Ghost",
            description: "The art of calling forth spectral allies",
            content: `Spirit Summoning allows practitioners to call forth the souls of the dead to aid in battle. These spirits retain some memory of their living selves, fighting with their original skills and equipment until their essence is exhausted.
This magic challenges the Golden Order's control over death - it suggests that souls can be called back without the Erdtree's permission, existing in a state between life and death that the current cosmic order cannot fully explain or control.`
        },
        {
            title: "Bloodflame Incantations",
            icon: "BloodFlame",
            description: "The forbidden magic of blood and fire",
            content: `Bloodflame magic combines the life force within blood with the destructive power of flame, creating incantations that grow stronger as they cause bleeding. This magic is associated with the Mohgwyn Dynasty and the Formless Mother's worship.
These incantations represent power drawn from suffering - both the caster's willingness to shed their own blood and their ability to inflict bleeding upon others. It embodies a divine order built on sacrifice rather than grace.`
        },

        // ENDINGS & COSMIC CONSEQUENCES  
        {
            title: "Age of Order",
            icon: "Balance",
            description: "The perfect order sought by Goldmask",
            content: `The Age of Order represents Goldmask's vision of a perfected Golden Order, stripped of the gods' capricious whims and governed by pure, immutable law. This ending removes divine personality from cosmic governance, creating a system based solely on logical principles.
While this eliminates the gods' capacity for favoritism and cruelty, it also removes their capacity for mercy and growth. Perfect order may mean perfect justice, but it also means perfect stagnation - a cosmos that can never adapt or change.`
        },
        {
            title: "Age of Stars",
            icon: "Night",
            description: "Ranni's cold cosmos free from divine meddling",
            content: `The Age of Stars banishes the influence of all Outer Gods, leaving mortals to determine their own fate under the distant guidance of moon and stars. Ranni and her Elden Lord rule from afar, ensuring that divine will never again directly shapes mortal destiny.
This ending offers freedom at the cost of comfort - mortals gain self-determination but lose divine protection and guidance. It represents growing up as a species, accepting both the responsibility and the terror of true independence.`
        },
        {
            title: "Lord of Chaos",
            icon: "Madness",
            description: "The ending that burns away all existence",
            content: `The Lord of Chaos embraces the Frenzied Flame completely, choosing to burn away not just the current cosmic order but the very concept of existence itself. This ending represents ultimate nihilism - the belief that non-existence is preferable to the suffering inherent in being.
While this choice destroys all pain and injustice, it also destroys all joy and possibility. It's the ending chosen by those who have lost all hope that existence can ever be made worthwhile, preferring annihilation to continued struggle.`
        },
        {
            title: "Blessing of Despair",
            icon: "Curse",
            description: "The cursed rule of the Dung Eater",
            content: `The Blessing of Despair transforms the Golden Order into a system that ensures every soul born will be cursed and reviled. The Dung Eater's vision creates a world where suffering is guaranteed, where hope itself becomes impossible.
This represents spite taken to cosmic proportions - if the world will not accept the outcasts and the cursed, then all shall be outcasts and cursed. It's an ending born from pain so deep that it seeks to universalize suffering rather than eliminate it.`
        },

        // ADDITIONAL LORE ELEMENTS
        {
            title: "The Flame of Ruin",
            icon: "Fire",
            description: "The one flame that can burn the Erdtree",
            content: `The Flame of Ruin was the sacred fire of the Giants, the only force capable of burning the Erdtree and ending the Golden Order's dominance. After exterminating the Giant race, the Golden Order could not destroy this flame, only contain it.
The last Giant was cursed to tend this flame for eternity, keeping it alive against his will. The flame represents both the power of the oppressed and the persistence of resistance - even total genocide cannot eliminate the possibility of rebellion when injustice remains.`
        },
        {
            title: "The Black Knives Assassins",
            icon: "Knife",
            description: "The Numen women who killed a god",
            content: `The Black Knife Assassins were Numen women, possibly related to Queen Marika herself, who wielded daggers imbued with fragments of the Rune of Death. Their coordinated strike on the Night of Black Knives represented the first successful challenge to the Golden Order's promise of immortality.
Their identity as Numen suggests the assassination was not merely Ranni's plot, but possibly involved Marika herself - a god arranging the death of her own son to justify shattering the cosmic order she had grown to despise.`
        },
        {
            title: "The Outer Gods",
            icon: "Tentacle",
            description: "Cosmic entities that vie for control over reality",
            content: `Beyond the Greater Will exist other Outer Gods - the Frenzied Flame, the Formless Mother, the God of Rot, and others that seek to impose their own vision upon the Lands Between. Each offers a different cosmic order based on their fundamental nature.
These entities represent competing philosophies of existence - order versus chaos, growth versus decay, connection versus isolation. The struggle between them plays out through mortal champions, making the Lands Between a battlefield between cosmic concepts.`
        },
        {
            title: "The Mimic Tear",
            icon: "Mirror",
            description: "The artificial life that perfectly mirrors its creator",
            content: `Created by the Nox from primordial silver, the Mimic Tear can perfectly replicate any living being, copying not just their appearance but their abilities, memories, and even their soul's essence. This artificial life challenges the notion that only gods can create consciousness.
The Mimic Tear represents the ultimate question of identity - if something can perfectly replicate you in every way, what makes you unique? It suggests that consciousness and soul might be patterns that can be copied rather than unique divine sparks.`
        },
        {
            title: "The Rot Goddess",
            icon: "Butterfly",
            description: "The Outer God that blessed Malenia with decay",
            content: `The Scarlet Rot is not merely a disease but the blessing of an Outer God that seeks to transform all life into its own image. Through Malenia, this entity spreads its influence, turning the world into a garden of beautiful decay where rot and rebirth cycle eternally.
This god represents change through destruction - the belief that only by breaking down existing structures can new life emerge. It offers transformation at the cost of everything currently alive, promising evolution through apocalypse.`
        },
        {
            title: "The Formless Mother",
            icon: "Wound",
            description: "The Outer God of blood and wounds",
            content: `The Formless Mother is an Outer God that delights in wounds and bloodshed, seeing pain and sacrifice as forms of worship. Through Mohg, she seeks to establish a dynasty built on blood ritual and the sanctification of suffering.
This entity represents the darker aspects of devotion - the idea that love and faith must be proven through pain, that dedication without sacrifice is meaningless. It appeals to those who believe that only through bleeding can one demonstrate true commitment.`
        },
        {
            title: "The God of the Deathbirds",
            icon: "Bird",
            description: "The ancient deity of death before the Golden Order",
            content: `Before the Golden Order removed death from the natural cycle, the Deathbirds served an ancient god of death that governed the proper passage of souls. These spectral birds guided the dead to their final rest, maintaining the cosmic balance between life and death.
The suppression of this god and its servants represents the Golden Order's fundamental disruption of natural law. By removing death, the Greater Will didn't eliminate suffering - it made it eternal, trapping souls in an endless cycle of rebirth.`
        },
        {
            title: "The Ancient Dragons",
            icon: "Scale",
            description: "The immortal rulers of the primordial age",
            content: `The Ancient Dragons ruled the Lands Between in an age before the Erdtree, when red lightning split the sky and the laws of reality were different. Led by Dragonlord Placidusax, they possessed their own connection to cosmic power independent of the Greater Will.
These beings represent a previous cosmic order that was displaced but not destroyed. Their continued existence proves that the Greater Will's dominance is not inevitable - other forms of divine rule have existed and could exist again.`
        },
        {
            title: "The Storm Lord",
            icon: "Wind",
            description: "The ancient ruler of Stormveil Castle",
            content: `Before Godrick claimed Stormveil, it was ruled by the Storm Lord, a powerful entity connected to the winds and tempests. This ancient ruler was defeated during the Golden Order's expansion, but its influence lingers in the castle's storm-touched hawks and winds.
The Storm Lord represents the wild, untamed forces of nature that existed before divine order imposed structure upon the world. Its defeat symbolizes the triumph of civilization over the primal chaos of the natural world.`
        },
        {
            title: "The Gloam-Eyed Queen",
            icon: "Eye",
            description: "The Empyrean who once wielded Destined Death",
            content: `Before Maliketh became the keeper of the Rune of Death, the Gloam-Eyed Queen was an Empyrean chosen by the Fingers who commanded the Godskin Apostles and wielded Destined Death through black flame. Her defeat marked the Greater Will's complete control over mortality.
She represents a previous attempt at godhood that was violently suppressed. Her apostles continue to hunt gods, suggesting that the power to challenge divine authority, once awakened, can never be completely destroyed.`
        },
        {
            title: "The Godskin Apostles",
            icon: "Skin",
            description: "The hunters who flay gods and wear their flesh",
            content: `The Godskin Apostles served the Gloam-Eyed Queen, wielding black flame that could kill gods permanently. They crafted robes from the skin of their divine victims, believing that wearing a god's flesh granted them divine power and authority.
These beings represent the ultimate rejection of divine hierarchy - the belief that gods are merely powerful beings whose strength can be claimed through violence. They embody the terrifying possibility that divinity is not inherent but transferable.`
        },
        {
            title: "The Sealed God",
            icon: "Chain",
            description: "The divine entity imprisoned beneath the capital",
            content: `Deep beneath Leyndell lies a god bound in chains, imprisoned by the Golden Order for unknown transgressions. This sealed entity represents the fate awaiting any divine being that opposes the Greater Will's authority - not death, but eternal captivity.
The existence of this prisoner reveals the Golden Order's cruelty extends even to other gods. It suggests that the current cosmic hierarchy was established through violence and oppression, not natural order or divine right.`
        },
        {
            title: "The Ancestral Spirits",
            icon: "Antler",
            description: "The ancient guardians of the eternal cities",
            content: `The Ancestral Spirits are massive, ethereal beasts that guard the deepest parts of the underground realms. These creatures seem to embody the memory of a more primal time, when the boundary between life and death was less rigid.
They represent continuity with the past - ancient wisdom and power that predates the current cosmic order. Their peaceful nature suggests that not all pre-Golden Order entities were hostile, offering glimpses of what was lost when the new order was imposed.`
        },
        {
            title: "The Jar Saints",
            icon: "Jar",
            description: "The communion of warriors fused in ceramic vessels",
            content: `The Living Jars contain the remains of countless warriors, their essence mixed together to create new forms of life. This process represents a different approach to death and rebirth - communal rather than individual, horizontal rather than hierarchical.
These beings embody the possibility of unity through shared sacrifice, where individual identity dissolves into collective strength. They offer an alternative to both the Erdtree's recycling and the traditional passage to whatever lies beyond death.`
        },
        {
            title: "The Cleanrot Knights",
            icon: "Knight",
            description: "The loyal servants who embraced their lady's curse",
            content: `The Cleanrot Knights served Malenia with such devotion that they willingly contracted her Scarlet Rot, believing that sharing her burden was the highest form of loyalty. Their golden prosthetics and elegant combat style represent nobility maintained even in decay.
They embody the paradox of noble service - their greatest act of loyalty was to embrace corruption. This represents love that transcends physical form, devotion that finds beauty even in destruction.`
        },
        {
            title: "The Crucible Knights",
            icon: "Crucible",
            description: "The champions blessed by primordial power",
            content: `The Crucible Knights were the original champions of the Erdtree, blessed with aspects of the primordial Crucible - horns, wings, tails, and other bestial features. As the Golden Order grew more refined, these once-honored knights were gradually marginalized.
They represent the Golden Order's evolution from accepting natural chaos to demanding artificial perfection. Their fall from grace shows how societies can turn their backs on their own foundations in pursuit of impossible ideals.`
        },
        {
            title: "The Fire Monks",
            icon: "FireMonk",
            description: "The clergy who turned from Erdtree to flame",
            content: `The Fire Monks once served the Erdtree but turned to worship the Flame of Ruin after witnessing the Golden Order's cruelty. They tend fires in the ruins of their former temples, keeping alive the possibility of the Erdtree's destruction.
Their transformation represents disillusionment with divine authority - when gods fail their followers, some seek new powers to serve. They embody the painful process of abandoning everything you once believed sacred.`
        },
        {
            title: "The Perfumers",
            icon: "Bottle",
            description: "The healers who blend medicine and magic",
            content: `The Perfumers are scholars and healers who create magical aromatics to cure disease, enhance abilities, and manipulate the battlefield. Their art represents the intersection of science and sorcery, practical medicine elevated to magical potency.
They embody hope through knowledge - the belief that understanding the world's mechanisms can lead to solutions for its problems. In a land filled with curses and corruption, they represent the possibility of healing through wisdom.`
        },
        {
            title: "The Envoys of Gold",
            icon: "Bubble",
            description: "The heralds of the Golden Order's music",
            content: `The Oracle Envoys and their smaller kin serve as musicians and messengers of the Golden Order, their haunting melodies carrying divine will across the Lands Between. Their bubble attacks represent the power of harmony made manifest.
These beings show the Golden Order's softer face - beauty, art, and music as tools of divine influence. Yet their presence in areas of conflict suggests that even the most beautiful aspects of the Order serve its expansionist agenda.`
        },
        {
            title: "The Zamor Warriors",
            icon: "IceSword",
            description: "The ice-cursed survivors of a forgotten war",
            content: `The Zamor Warriors are the last remnants of a civilization that once opposed the Golden Order. Their bodies are cursed with eternal cold, and their weapons channel freezing winds that can slow and weaken their enemies.
They represent the long memory of the oppressed - survivors who carry their hatred across generations, maintaining their identity through opposition. Their curse serves as both punishment and reminder of the Golden Order's capacity for cruelty.`
        },
        {
            title: "The Claymen",
            icon: "Clay",
            description: "The artificial guardians of the eternal cities",
            content: `Created by the Nox to serve as eternal guardians, the Claymen are artificial beings molded from clay and given life through ancient arts. They lack true consciousness but possess an imitation of life sufficient for their purpose.
These constructs represent the eternal cities' mastery over artificial life - the ability to create servants that never tire, never question, and never die. They embody the appeal and horror of perfect obedience.`
        },
        {
            title: "The Land Octopi",
            icon: "Octopus",
            description: "The displaced sea creatures seeking lost waters",
            content: `The Land Octopi are massive cephalopods that somehow survive on dry land, their presence suggesting that the Lands Between was once covered by seas that have since vanished. They guard ancient ruins and treasures with territorial fury.
These creatures represent the deep history of the world - evidence of geological and cosmic changes so vast that entire ecosystems have been displaced. They embody the mystery of what the world was like before the current age.`
        },
        {
            title: "The Crystalians",
            icon: "Crystal",
            description: "The living embodiments of glintstone power",
            content: `The Crystalians are beings of living crystal, their bodies formed from the same glintstone that fuels sorcery. They seem to be products of magical experimentation, artificial life given form through cosmic forces.
These entities represent magic made manifest - the possibility that studying cosmic forces deeply enough can give them physical form. They embody both the potential and danger of pushing magical research to its absolute limits.`
        },
        {
            title: "The Revenants",
            icon: "MultiArm",
            description: "The grafted horrors spawned by forbidden experimentation",
            content: `Revenants are nightmarish creatures formed from multiple corpses grafted together, their many arms and twisted forms suggesting the influence of the same power that created Godrick's grotesque transformations.
These abominations represent the corruption of the grafting arts - what begins as a quest for power and perfection becomes a descent into horror. They embody the price of trying to transcend natural limitations through unnatural means.`
        },
        {
            title: "The Fingercreeper",
            icon: "Hand",
            description: "The grotesque servants of divine will",
            content: `These massive, spider-like hands serve the Two Fingers, their appearance suggesting that divine messengers can take forms both beautiful and horrifying. Their presence marks areas of particular importance to the Greater Will's plans.
They represent the alien nature of divine authority - beings so removed from human understanding that their very form induces revulsion. They embody the uncomfortable truth that cosmic forces care nothing for human comfort or comprehension.`
        }


    ]


    return (
        <div className="lore-container">
            <h1>Lore of the Lands Between</h1>
        </div>
    );
};

export default Lore;
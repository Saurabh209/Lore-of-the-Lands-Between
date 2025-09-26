import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllArsenal.css'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon } from "lucide-react";

const weapons = [

    {
        "daggers": [
            {
                "name": "Fire Knight's Shortsword",
                "attack": {
                    "Physical": "75",
                    "Magic": "0",
                    "Fire": "22",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "32",
                    "Magic": "18",
                    "Fire": "31",
                    "Lightning": "18",
                    "Holy": "18",
                    "Critical": "15"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "13",
                    "Faith": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479919/fire_knights_shortsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_w21syg.png",
                    "description": "Fire Knight's Shortsword is a Dagger in Elden Ring. It is a brand new Dagger in the Shadow of the Erdtree DLC. The Fire Knight's Shortsword scales primarily with Strength, Dexterity and Faith and is a good Weapon for Fire-based builds. This can be dropped by the Fire Knights and comes with the Quickstep skill.",
                    "location": [
                        "Has a 4.0% chance to drop by Fire Knights wielding this weapon in Shadow Keep",
                        "Can be farmed by dropping down and killing the Fire Knight below the Storehouse, Loft site of Grace and the Fire Knight just east of the Storehouse, Seventh Floor site of grace"
                    ],
                    "fp": "3",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Main gauche",
                "attack": {
                    "Physical": "79",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "22",
                    "Fire": "22",
                    "Lightning": "22",
                    "Holy": "22",
                    "Critical": "16"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479973/main-gauche_dagger_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_ku4dyi.png",
                    "description": "Main-gauche is a Dagger in Elden Ring. It is found in the Shadow of the Erdtree DLC. The Main-gauche scales primarily with Strength and Dexterity and is a good Weapon for performing quick slashes. This weapon comes in left-handed and allows you to stagger and land heavy hits to enemies with the Parry skill.",
                    "location": [
                        "Shadow Keep: From the Main Gate Plaza site of grace go west and up the stairs until the soldier ambushes you, then enter that room and on the right there is another doorway. The item is in there protected by two soldiers and a blacksteel knight."
                    ],
                    "fp": "",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "Parry",
                            "description": "Parry Skill is a Skill in Elden Ring. Parry Skill is a regular skill that can be found in Ashes of War and applied to compatible shields. Parry Skill has standard affinity and uses daggers, curved swords, thrusting swords, fists, claws, and small and medium shields.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dagger",
                "attack": {
                    "Physical": "74",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "130"
                },
                "guard": {
                    "Physical": "35",
                    "Magic": "20",
                    "Fire": "20",
                    "Lightning": "20",
                    "Holy": "20",
                    "Critical": "15"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "5",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479979/dagger_dagger_weapon_elden_ring_wiki_guide_200px_zn1kqf.png",
                    "description": "Dagger is the basic Dagger in Elden Ring. The Dagger scales primarily with Strength and Dexterity and is a good Weapon for short-ranged melee combat, and for when you need an extra lightweight utility weapon on hand.",
                    "location": [
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold for runes currency elden ring wiki guide 18 400 Runes.",
                        "Can be dropped by Highwaymen and different types of Foot Soldiers"
                    ],
                    "fp": "3",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Parrying Dagger",
                "attack": {
                    "Physical": "75",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "35",
                    "Magic": "20",
                    "Fire": "20",
                    "Lightning": "20",
                    "Holy": "20",
                    "Critical": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "4",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479983/parrying_dagger_dagger_weapon_elden_ring_wiki_guide_200px_vm9tlr.png",
                    "description": "Parrying Dagger is a Dagger in Elden Ring. The Parrying Dagger scales primarily with Dexterity and Strength and is a good Weapon for parrying enemies as its name states. It is accommodated with the Parry skill and can deflect enemy attacks while potentially providing an opening for your next attack. ",
                    "location": [
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold for runes currency elden ring wiki guide 18 400 Runes.",
                        "Can be dropped by Highwaymen and different types of Foot Soldiers"
                    ],
                    "fp": "",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "Parry",
                            "description": "Parry Skill is a Skill in Elden Ring. Parry Skill is a regular skill that can be found in Ashes of War and applied to compatible shields. Parry Skill has standard affinity and uses daggers, curved swords, thrusting swords, fists, claws, and small and medium shields.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Miséricorde",
                "attack": {
                    "Physical": "92",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "140"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "21",
                    "Fire": "21",
                    "Lightning": "21",
                    "Holy": "21",
                    "Critical": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479990/misericorde_dagger_weapon_elden_ring_wiki_guide_200px_gcayhh.png",
                    "description": "Miséricorde is a Dagger in Elden Ring. The Miséricorde scales primarily with Strength and Dexterity and is a good Weapon for short range melee combat. This dagger is paired with the Quickstep skill to help gain an advantage in position. This potentially can avoid damage while provide an opening to follow up with a combo of attacks. ",
                    "location": [
                        "Can be looted off a corpse that can be found in the large armory room, next to the fortress of the Grafted Scion.",
                        "You will need to use the Stonesword Key on the imp statue to dispel the white fog that's blocking the doorway."
                    ],
                    "fp": "3",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Great Knife",
                "attack": {
                    "Physical": "75",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "35",
                    "Magic": "20",
                    "Fire": "20",
                    "Lightning": "20",
                    "Holy": "20",
                    "Critical": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "6",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479988/great_knife_dagger_weapon_elden_ring_wiki_guide_200px_exr7cz.png",
                    "description": "Miséricorde is a Dagger in Elden Ring. The Miséricorde scales primarily with Strength and Dexterity and is a good Weapon for short range melee combat. This dagger is paired with the Quickstep skill to help gain an advantage in position. This potentially can avoid damage while provide an opening to follow up with a combo of attacks. ",
                    "location": [
                        "Can be looted off a corpse that can be found in the large armory room, next to the fortress of the Grafted Scion.",
                        "You will need to use the Stonesword Key on the imp statue to dispel the white fog that's blocking the doorway."
                    ],
                    "fp": "3",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bloodstained Dagger",
                "attack": {
                    "Physical": "81",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "21",
                    "Fire": "21",
                    "Lightning": "21",
                    "Holy": "21",
                    "Critical": "15"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479996/bloodstained_dagger_dagger_weapon_elden_ring_wiki_guide_200px_lmtlaw.png",
                    "description": "Bloodstained Dagger is a Dagger in Elden Ring. The Bloodstained Dagger scales primarily with Strength and is a good Weapon for short range melee combat. This dagger is paired with the ´Quickstep' skill to help gain an advantage in position. This potentially can avoid damage while provide an opening to follow up with a combo of attacks. Furthermore this particular dagger passively builds bleed.",
                    "location": [
                        "There is a Demi-Human Chief sleeping before the wooden bridge leading to the Minor Erdtree in the weeping peninsula.",
                        "Rare drop from Demi-Human Chiefs"
                    ],
                    "fp": "3",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Erdsteel Dagger",
                "attack": {
                    "Physical": "67",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "21",
                    "Fire": "21",
                    "Lightning": "21",
                    "Holy": "21",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "12",
                    "Faith": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479994/erdsteel_dagger_dagger_weapon_elden_ring_wiki_guide_200px_gvmn9n.png",
                    "description": "Erdsteel Dagger is a Dagger in Elden Ring. The Erdsteel Dagger scales primarily with Strength and Dexterity and is a good Weapon for short range melee combat.",
                    "location": [
                        "Given by Kenneth Haight as a reward for clearing out Fort Haight. ",
                        "Found NW of the Avenue Balcony site of Leyndell, Royal Capital. Drop down a pit with a Broken Statue and it will be on a corpse."
                    ],
                    "fp": "3",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Wakizashi",
                "attack": {
                    "Physical": "94",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "24",
                    "Fire": "24",
                    "Lightning": "24",
                    "Holy": "24",
                    "Boost": "18"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479999/wakizashi_dagger_weapon_elden_ring_wiki_guide_200px_chjctf.png",
                    "description": "Wakizashi is a Dagger in Elden Ring. The Wakizashi scales primarily with Strength and Dexterity and is a good Weapon for short range melee combat. It initially starts with the Quickstep skill, which excels at both evasion, and providing openings for follow up attacks. ",
                    "location": [
                        "Inside Gaol Cave, found inside one of the locked cells. The player must unlock the cells first. "
                    ],
                    "fp": "3",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Celebrant's Sickle",
                "attack": {
                    "Physical": "79",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "35",
                    "Magic": "20",
                    "Fire": "20",
                    "Lightning": "20",
                    "Holy": "20",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "6",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "",
                    "description": "Celebrant's Sickle is a Dagger in Elden Ring. The Celebrant's Sickle scales primarily with Dexterity and is a good Weapon for rune farming.  ",
                    "location": [
                        "Rare drop from the Celebrants wielding it at the Windmill Village "
                    ],
                    "fp": "3",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ivory Sickle",
                "attack": {
                    "Physical": "60",
                    "Magic": "60",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "26",
                    "Magic": "42",
                    "Fire": "15",
                    "Lightning": "15",
                    "Holy": "15",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "6",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480010/celebrants-sickle_dagger_weapon_elden_ring_wiki_guide_200px_s1med1.png",
                    "description": "Celebrant's Sickle is a Dagger in Elden Ring. The Celebrant's Sickle scales primarily with Dexterity and is a good Weapon for rune farming.  ",
                    "location": [
                        "Rare drop from the Celebrants wielding it at the Windmill Village "
                    ],
                    "fp": "3",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Crystal Knife",
                "attack": {
                    "Physical": "82",
                    "Magic": "53",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "32",
                    "Magic": "31",
                    "Fire": "18",
                    "Lightning": "18",
                    "Holy": "18",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "12",
                    "Intelligence": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480016/crystal_knife_dagger_weapon_elden_ring_wiki_guide_200px_zso4d9.png",
                    "description": "Crystal Knife is a Dagger in Elden Ring. The Crystal Knife scales primarily with Intelligence, Strength, and Dexterity, and is a good Weapon for short-range melee combat enhanced with extra Magic Damage.",
                    "location": [
                        "Found in a chest inside the Raya Lucaria Crystal Tunnel, in a storage area three levels down, guarded by Marionettes."
                    ],
                    "fp": "3",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Scorpion's Stinger",
                "attack": {
                    "Physical": "79",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "22",
                    "Fire": "22",
                    "Lightning": "22",
                    "Holy": "22",
                    "Boost": "16"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "6",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480007/scorpions_stinger_dagger_weapon_elden_ring_wiki_guide_200px_gljpdv.png",
                    "description": "Scorpion's Stinger is a Dagger in Elden Ring. The Scorpion's Stinger scales primarily with Strength and Dexterity. It is a good Weapon for quickly applying the rot effect and dealing powerful damage-over-time. Particularly great for defeating dragons. ",
                    "location": [
                        "Found in the Lake of Rot. Cross the swamp and go through the entrance with large statues on either side to reach the Grand Cloister Site of Grace. Use the ledges to drop down to the bottom, and head straight ahead (westward) and you'll find the dagger in a chest."
                    ],
                    "fp": "7",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Repeating Thrust",
                            "description": "Repeating Thrust is a Skill in Elden Ring. Repeating Thrust is a regular skill that can be found in Ashes of War and applied to weapons that perform thrusting. It also has a Keen Affinity.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Cinquedea",
                "attack": {
                    "Physical": "98",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "43",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "18"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480019/cinquedea_dagger_weapon_elden_ring_wiki_guide_200px_wpbxlu.png",
                    "description": "Cinquedea is a Dagger in Elden Ring. The Cinquedea scales primarily with Strength and is a good Weapon for short range melee combat. This dagger is paired with the Quickstep skill to help gain an advantage in position and avoid damage, granting an opening to follow up with a combo of attacks. This dagger also has the unique ability to boost the damage of Bestial Incantations when held. The Cinquedea has extremely high base damage for a dagger while also having good Strength scaling ",
                    "location": [
                        "Cinquedea can be found at the bottom of the exterior structure of the Bestial Sanctum, near a broken rat corpse statue."
                    ],
                    "fp": "3",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "QuickStep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Glintstone Kris",
                "attack": {
                    "Physical": "57",
                    "Magic": "68",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "23",
                    "Magic": "45",
                    "Fire": "14",
                    "Lightning": "14",
                    "Holy": "14",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "5",
                    "Dexterity": "12",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480022/glintstone_kris_dagger_weapon_elden_ring_wiki_guide_200px_zrfap3.png",
                    "description": "Glintstone Kris is a Dagger in Elden Ring. The Glintstone Kris scales primarily with Dexterity and Intelligence, with minor scaling in Strength. It is a versatile Weapon that allows its wielder to engage and apply pressure on targets both at short and medium range. ",
                    "location": [
                        "Rewarded to players for progressing through the Sorceress Sellen questline and siding with her."
                    ],
                    "fp": "10",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "Glintstone Dart",
                            "description": "Glintstone Dart is a Skill in Elden Ring. Glintstone Dart is a unique skill to the Glintstone Kris dagger, it allows the player to cast Glintstone Pebble and Glintstone Dart as well as a follow-up thrust attack.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Reduvia",
                "attack": {
                    "Physical": "79",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "22",
                    "Fire": "22",
                    "Lightning": "22",
                    "Holy": "22",
                    "Boost": "16"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "5",
                    "Dexterity": "13",
                    "Arcane": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480013/reduvia_dagger_weapon_elden_ring_wiki_guide_200px_e87qr8.png",
                    "description": "Reduvia is a Dagger in Elden Ring. The Reduvia scales with Strength, Dexterity, and Arcane. It is wielded by dynastic servants of the Lord of Blood. It is one of the first weapons the player can acquire that scales with Arcane and is exceptional at inflicting Blood Loss on targets.",
                    "location": [
                        "Dropped by Bloody Finger Nerijus.",
                        "Players can encounter Bloody Finger Nerijus Invades on the ravine leading north-east from Agheel Lake, toward Murkwater Catacombs"
                    ],
                    "fp": "6",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Glintstone Dart",
                            "description": "Glintstone Dart is a Skill in Elden Ring. Glintstone Dart is a unique skill to the Glintstone Kris dagger, it allows the player to cast Glintstone Pebble and Glintstone Dart as well as a follow-up thrust attack.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Blade of Calling",
                "attack": {
                    "Physical": "71",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "43",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "31",
                    "Magic": "18",
                    "Fire": "18",
                    "Lightning": "18",
                    "Holy": "30",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "C"
                },
                "requiredStats": {
                    "Strength": "6",
                    "Dexterity": "13",
                    "Faith": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480025/blade_of_calling_dagger_weapon_elden_ring_wiki_guide_200px_wpsqzt.png",
                    "description": "Blade of Calling is a Dagger in Elden Ring. The Blade of Calling scales with Faith, Strength and Dexterity and is a good Weapon for short range melee combat with additional holy damage. ",
                    "location": [
                        "From the Forbidden Lands site of grace, turn back and head towards the elevator. Face west-southwest, then activate the elevator and watch for an opening to jump off into. The Blade of Calling is on the table in the room at the end of this hall."
                    ],
                    "fp": "17",
                    "weight": "1.5",
                    "skill": [
                        {
                            "name": "Blade of Gold",
                            "description": "Blade of Gold is a Skill in Elden Ring. Blade of Gold is the unique skill for the Blade of Calling that allows the user to jump and fire a golden projectile that deals Holy Damage. It shares an animation with Blade of Death, the unique skill for the Black Knife.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Black Knife",
                "attack": {
                    "Physical": "66",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "65",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "26",
                    "Magic": "15",
                    "Fire": "15",
                    "Lightning": "15",
                    "Holy": "42",
                    "Boost": "15"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "12",
                    "Faith": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480028/black_knife_dagger_weapon_elden_ring_wiki_guide_200px_csbdkp.png",
                    "description": "Black Knife is a Dagger in Elden Ring. The Black Knife scales primarily with Faith and Dexterity and is a good Weapon for dealing additional Holy Damage and for its Unique Skill, Blade of Death, that allows the user to fire an additional projectile.",
                    "location": [
                        "This is a drop from defeating the Black Knife Assassin at the entrance of Sainted Hero's Grave, in Altus Plateau. This boss is directly west of the Rampartside Path site."
                    ],
                    "fp": "25",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "Blade of Death",
                            "description": "Blade of Death is a Unique skill for the Black Knife. It shares an animation with Blade of Gold, the unique skill for the Blade of Calling. It allows the user to fire a projectile and apply a powerful DOT effect. This also has a unique feature that reduces enemy max HP for a limited time",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "straightSwords": [
            {
                "name": "Velvet Sword of St. Trina",
                "attack": {
                    "Physical": "95",
                    "Magic": "61",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "37",
                    "Magic": "37",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "12",
                    "Faith": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480149/velvet_sword_of_st_trina_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_wojy6m.png",
                    "description": "It is a brand new Straight Sword in the Shadow of the Erdtree DLC. The Velvet Sword of St Trina scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for players looking for magic damage straight sword. This also has a strong base of physical damage of 95. It produces eternal sleep build-up and a skill named Mists of Eternal Sleep that releases a cloud of purple mist when you perform a slash.",
                    "location": [
                        "From the Fissure Cross site of grace, walk immediately north-west to the closest giant coffin that's tilted nearly vertical. Climb down to a ledge that passes underneath the brick platform nearest the site of grace. The sword is in a small cave network there and guarded by several putrescent oozes."
                    ],
                    "fp": "23",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Mist of Eternal Sleep",
                            "description": "Mists of Eternal Sleep is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Mists of Eternal Sleep releases a mist in the frontal area of the caster.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Stone-Sheathed Sword",
                "attack": {
                    "Physical": "119",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "54",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "32"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480171/stone-sheathed_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_v2wsaw.png",
                    "description": " It is a brand new Straight Sword in the Shadow of the Erdtree DLC. The Stone-Sheathed Sword scales primarily with Strength and Dexterity and can be transformed into the Sword of Darkness or the Sword of Light. It's skill, the Square off, lets you slash upwards or thrust when attacking.",
                    "location": [
                        " It is a brand new Straight Sword in the Shadow of the Erdtree DLC. The Stone-Sheathed Sword scales primarily with Strength and Dexterity and can be transformed into the Sword of Darkness or the Sword of Light. It's skill, the Square off, lets you slash upwards or thrust when attacking.",
                        "Ruins of Unte (behind the inactive Furnace Golem, to the right from the chest that holds Giant Golden Arc)"
                    ],
                    "fp": "",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sword of Light",
                "attack": {
                    "Physical": "119",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "54",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "32"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480153/sword_of_light_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_tz4ecx.png",
                    "description": " It is a brand new Straight Sword in the Shadow of the Erdtree DLC. The Stone-Sheathed Sword scales primarily with Strength and Dexterity and can be transformed into the Sword of Darkness or the Sword of Light. It's skill, the Square off, lets you slash upwards or thrust when attacking.",
                    "location": [
                        " It is a brand new Straight Sword in the Shadow of the Erdtree DLC. The Stone-Sheathed Sword scales primarily with Strength and Dexterity and can be transformed into the Sword of Darkness or the Sword of Light. It's skill, the Square off, lets you slash upwards or thrust when attacking.",
                        "Ruins of Unte (behind the inactive Furnace Golem, to the right from the chest that holds Giant Golden Arc)"
                    ],
                    "fp": "",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sword of Darkness",
                "attack": {
                    "Physical": "93",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "93",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "26",
                    "Magic": "15",
                    "Fire": "15",
                    "Lightning": "15",
                    "Holy": "42",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "11",
                    "Faith": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480177/sword_of_darkness_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_d2kp1u.png",
                    "description": " Sword of Darkness is a Straight Sword in Elden Ring. It is found in the Shadow of the Erdtree DLC. The Sword of Darkness scales primarily with Strength, Dexterity, and Faith and has a counterpart called Sword of Light. This is similar to the sword of light since it also gives 93 holy damage",
                    "location": [
                        "Obtained by raising Stone-Sheathed Sword or Sword of Light"
                    ],
                    "fp": "30",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Darkness",
                            "description": "Darkness is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Darkness raises the sword, cleaving the surroundings with Darkness, dealing Holy Damage in the process and temporarily reducing enemy's Holy Damage negation.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Short Sword",
                "attack": {
                    "Physical": "102",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "42",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480161/short_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_ugkvx5.png",
                    "description": " Short Sword is a Straight Sword in Elden Ring. The Short Sword scales primarily with Strength and Dexterity and is a good Weapon for having a variety of Pierce and standard attacks. ",
                    "location": [
                        "Starting Equipment for the Astrologer Class.",
                        "Can be purchased from the Nomadic Merchant in North Limgrave for er runes 600 Runes",
                        "Dropped by Highwaymen in Murkwater Cave."
                    ],
                    "fp": "",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat. Updated to Patch 1.07. Kick has Heavy Affinity and is usable with all melee weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Long Sword",
                "attack": {
                    "Physical": "110",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480184/longsword_straight_sword_weapon_elden_ring_wiki_guide_200px_xbmhqt.png",
                    "description": " Longsword is a Straight Sword in Elden Ring. The Longsword scales primarily with Strength and is a good Weapon for melee users who want to remain mobile during combat.",
                    "location": [
                        "Starting equipment for the Vagabond class.",
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold for runes currency elden ring wiki guide 18 1,000 Runes."
                    ],
                    "fp": "-",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Broadsword",
                "attack": {
                    "Physical": "117",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480186/broadsword_straight_sword_weapon_elden_ring_wiki_guide_200px_ne5fx4.png",
                    "description": "Broadsword is a Straight Sword in Elden Ring. The Broadsword scales primarily with Strength and Dexterity and is a good Weapon for dealing slashing attacks to enemies. ",
                    "location": [
                        "Starting Equipment for the Confessor Class.",
                        "Can be bought from the Nomadic Merchant for runes currency elden ring wiki guide 1800 Runes. He is located south-east of Coastal Cave."
                    ],
                    "fp": "-",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Weathered Straight Sword",
                "attack": {
                    "Physical": "103",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "43",
                    "Magic": "29",
                    "Fire": "29",
                    "Lightning": "29",
                    "Holy": "29",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480165/weathered_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_ay184d.png",
                    "description": "Weathered Straight Sword is a Straight Sword in Elden Ring. The Weathered Straight Sword scales primarily with Strength and Dexterity and is a good starting Weapon.  ",
                    "location": [
                        "Dropped from Commoner enemies in any area.",
                        "Can be farmed very early on in the Ailing Village in the Weeping Peninsula."
                    ],
                    "fp": "-",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Lordsworn's Straight Sword",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480169/lordsworns_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_tbvotj.png",
                    "description": "Lordsworn's Straight Sword is a Straight Sword in Elden Ring. The Lordsworn's Straight Sword scales primarily with Strength and Dexterity and is a good Weapon for strong melee combat. With Square Off, characters with this sword will have the ability to deal an upwards slash through enemy guards. ",
                    "location": [
                        "May be dropped by Godrick Soldier in Gatefront Ruins",
                        "Can be dropped by the headless, undead Soldier at Fourth Church of Marika. ",
                        "The earliest and easiest grinding spot for this is the Gatefront Ruins, not just for this sword, but all of the weapons that the soldiers use excluding their spear."
                    ],
                    "fp": "-",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Noble's Slender Sword",
                "attack": {
                    "Physical": "101",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "43",
                    "Magic": "29",
                    "Fire": "29",
                    "Lightning": "29",
                    "Holy": "29",
                    "Boost": "29"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480193/nobles_slender_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_otgpjf.png",
                    "description": "Noble's Slender Sword is a Straight Sword in Elden Ring. Noble's Slender Sword scales primarily with Strength and Dexterity, and is a good Weapon for Dexterity builds. It is one of the longest Straight Swords in Elden Ring.",
                    "location": [
                        "Dropped by Wandering Nobles around Limgrave and Raya Lucaria Academy.",
                        "Can be farmed from the group of Wandering Nobles among the Troll-pulled Carriage's caravan to the west of Waypoint Ruins, north of Agheel Lake South Site of Grace."
                    ],
                    "fp": "-",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Cane Sword",
                "attack": {
                    "Physical": "96",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "41",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480196/cane_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_dlequn.png",
                    "description": "Cane Sword is a Straight Sword in Elden Ring. The Cane Sword scales primarily with Strength and Dexterity, and is a sword that has an odd design, resembling a cane. ",
                    "location": [
                        "Leyndell, Royal Capital, West Capital Rampart Site of Grace: Go south out of the room with the site of grace and down the flight of stairs to the floor underneath, make a complete U-turn in the room with the stairs to find a corpse with the sword."
                    ],
                    "fp": "-",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Square Off",
                            "description": "Square Off is a Skill in Elden Ring. Square Off is a regular skill that can be found in Ashes of War and applied to compatible weapons. Square Off has a Quality Affinity and uses straight swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Warhawk's Talon",
                "attack": {
                    "Physical": "101",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480175/warhawks_talon_straight_sword_weapon_elden_ring_wiki_guide_200px_cfaagm.png",
                    "description": "Warhawk's Talon is a Straight Sword in Elden Ring. The Warhawk's Talon scales primarily with Strength and Dexterity and is a good Weapon for Dexterity builds.  ",
                    "location": [
                        "Can be found in Stormveil Castle as drop by defeating Warhawks. There are four immediately out the door from the Rampart Tower site of grace."
                    ],
                    "fp": "6",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. Updated to Patch 1.12. Spinning Slash has Keen Affinity and is usable on swords, axes, and polearms. Excluding colossal weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Lazuli Glintstone Sword",
                "attack": {
                    "Physical": "79",
                    "Magic": "94",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "30",
                    "Magic": "55",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "9",
                    "Intelligence": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480199/lazuli_glintstone_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_hvnzqi.png",
                    "description": "Lazuli Glintstone Sword is a Straight Sword in Elden Ring.  The Lazuli Glintstone Sword scales primarily with Strength and Intelligence and is a good Weapon for Intelligence- based builds. ",
                    "location": [
                        "Can be found in Stormveil Castle as drop by defeating Warhawks. There are four immediately out the door from the Rampart Tower site of grace."
                    ],
                    "fp": "8",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Glintstone Pebble",
                            "description": "Glintstone Pebble is a Skill in Elden Ring. Glintstone Pebble is a regular skill that can be found in Ashes of War and can be applied to Swords and Spears capable of thrusting. The skill uses the Glintstone Pebble sorcery, firing projectiles at the enemy with a follow up lunging thrus",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Carian Knight's Sword",
                "attack": {
                    "Physical": "88",
                    "Magic": "88",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "52",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "10",
                    "Intelligence": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480203/carian_knights_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_ftkbuj.png",
                    "description": "Carian Knight's Sword is a Straight Sword in Elden Ring. The Carian Knight's Sword scales primarily with Intelligence, Strength and Dexterity and is a good Weapon for dealing Magic Damage from the sorcerous battle skills that it wields. ",
                    "location": [
                        "Found in a chest in the back of a Carriage being pulled by two Trolls. Go to the Foot of the Four Belfries site of grace and ride north to encounter the Trolls."
                    ],
                    "fp": "26",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Carian Grandeur",
                            "description": "Carian Grandeur is a Skill in Elden Ring. Carian Grandeur is a chargeable skill found on the Carian Knight's Sword. The Carian Knight's Sword with already existing Magic Damage stats is enhanced with this skill that also involved magic by turning this blade into a magical greatsword before the swing. Carian Grandeur has Magic Affinity and is usable on swords",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Crystal Sword",
                "attack": {
                    "Physical": "106",
                    "Magic": "68",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "44",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "10",
                    "Intelligence": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480181/crystal_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_hefpql.png",
                    "description": "Crystal Sword is a Straight Sword in Elden Ring. The Crystal Sword scales primarily with Intelligence, Strength and Dexterity and is a good Weapon for dealing additional Magic Damage complemented by the Spinning Slash Skill that allows the user to spin and deal a follow up attack.",
                    "location": [
                        "Can be found at Village of the Albinaurics. Past the well and across the wooden bridge, on a body near the edge."
                    ],
                    "fp": "6",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. Updated to Patch 1.12. Spinning Slash has Keen Affinity and is usable on swords, axes, and polearms. Excluding colossal weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rotten Crystal Sword",
                "attack": {
                    "Physical": "102",
                    "Magic": "66",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "38",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "10",
                    "Intelligence": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480206/rotten_crystal_sword_elden_ring_wiki_guide_200px_x0xmyb.png",
                    "description": "Rotten Crystal Sword is a Straight Sword in Elden Ring. The Rotten Crystal Sword scales primarily with strength and intelligence, with a secondary scaling in dexterity.",
                    "location": [
                        "Elphael, Brace of the Haligtree: Found in a chest by the inner wall guarded by 3 Lesser Crystallians. From the Elphael Inner Wall site of grace, head down the steps and jump up on the rubble to your left. You can engage the Lesser Crystallians one by one by luring them over the rubble and into the hallway. "
                    ],
                    "fp": "6",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. Updated to Patch 1.12. Spinning Slash has Keen Affinity and is usable on swords, axes, and polearms. Excluding colossal weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Miquellan Knight's Sword",
                "attack": {
                    "Physical": "105",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "40",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "11",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480216/miquellan_knights_sword_elden_ring_wiki_guide_200px_qw0upl.png",
                    "description": "Miquellan Knight's Sword is a Straight Sword in Elden Ring. The Miquellan Knight's Sword scales primarily with Strength, Faith, and Dexterity and is a good Weapon for dealing Physical Damage, but also can deal Holy Damage during combat.",
                    "location": [
                        " Found atop a bell tower. From the Prayer Room site of grace, walk forward into the Haligtree. Not far from the Prayer Room, you will see a Haligtree Soldier sitting down. Before the soldier is a ledge to the right you can walk out on, attached to a tower. Walk on this connector all the way to the tower. Drop down on the tower's ledge, and walk this outer rim to the opposite side. There will be a ladder that takes you up to the sword."
                    ],
                    "fp": "19",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Sacred Blade",
                            "description": "Sacred Blade is a Skill in Elden Ring. Sacred Blade is a regular skill that can be found in Ashes of War that can be used on many melee armaments. Using this skill grants holy essence to the weapon and fires off a golden blade projectile, great to use against Those Who Live in Death.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ornamental Straight Sword",
                "attack": {
                    "Physical": "101",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480219/ornamental_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_tl5l2o.png",
                    "description": "Ornamental Straight Sword is a Straight Sword in Elden Ring. The Ornamental Straight Sword scales primarily with Strength and Dexterity and is a good Weapon for melee combat, especially when accompanied with the skill, Golden Tempering, which allows users to deal dual-wielding combo with a strong attack while in effect.  The Ornamental Straight Sword is one of a few non-Claw/Fist Paired Weapons.",
                    "location": [
                        "Dropped by the Grafted Scion at the Chapel of Anticipation. Players can return to this area after tutorial by using the waygate at The Four Belfries."
                    ],
                    "fp": "24",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Golden Tempering",
                            "description": "Golden Tempering is a Skill in Elden Ring. Golden Tempering allows the user to transform the strong attack into a combo attack, while the effect of Golden Tempering remains.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Golden Epitaph",
                "attack": {
                    "Physical": "85",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "85",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "25",
                    "Magic": "15",
                    "Fire": "15",
                    "Lightning": "15",
                    "Holy": "40",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "10",
                    "Faith": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480190/golden_epitaph_straight_sword_weapon_elden_ring_wiki_guide_200px_yqowcz.png",
                    "description": "Golden Epitaph is a Straight Sword in Elden Ring. The Golden Epitaph scales primarily with Strength, Dexterity and Faith. It is a good Weapon for dealing Holy Damage, especially when wielded against Undead",
                    "location": [
                        "Auriza Hero's Grave: Found on a corpse in a room locked behind an Imp Statue Seal just past the Site of Grace near the entrance. Use a Stonesword Key to unlock the seal and beware the Basilisk guarding the treasure."
                    ],
                    "fp": "25",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Last Rits",
                            "description": "Last Rites is a Skill in Elden Ring. Last Rites grants the user and the allies in the vicinity the effect of the Sacred Order.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sword of St Trina",
                "attack": {
                    "Physical": "107",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "39",
                    "Magic": "33",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "12",
                    "Intelligence": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480222/sword_of_st_trina_straight_sword_weapon_elden_ring_wiki_guide_200px_htwcd0.png",
                    "description": "The Sword of St Trina scales primarily with Intelligence, Strength and Dexterity and is a good Weapon for its Unique Skill Mists of Slumber that releases a faint purple mist that spreads across a wide frontwards area. This mist inflicts the sleep ailment upon foes.",
                    "location": [
                        "In the Forsaken Ruins, near the Rotview Balcony Site of Grace, behind an Imp Seal requiring one Stonesword Key."
                    ],
                    "fp": "20",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Mist of Slumber",
                            "description": "Mists of Slumber is a Skill in Elden Ring. Mists of Slumber is a special skill only available for an individual weapon, and cannot be applied to other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Regalia of Eochaid",
                "attack": {
                    "Physical": "89",
                    "Magic": "57",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "40",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "18",
                    "Arcane": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480225/regalia_of_eochaid_straight_sword_weapon_elden_ring_wiki_guide_200px_etbuv1.png",
                    "description": "Regalia of Eochaid is a Straight Sword in Elden Ring. The Regalia of Eochaid scales primarily with Dexterity and Arcane and is a good Weapon for Arcane Builds.",
                    "location": [
                        "Going through the Gaol Cave and reaching the end of the dungeon."
                    ],
                    "fp": "15",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Eochaid's Dancing Blade",
                            "description": " Eochaid's Dancing Blade is the unique Skill of the Marais Executioner's Sword and Regalia of Eochaid in Elden Ring. Eochaid's Dancing Blade is a special skill available for certain weapons, it infuses the sword with energy, then allows the player to manipulate the sword and fling it forwards in a corkscrew attack",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Coded Sword",
                "attack": {
                    "Physical": "0",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "85",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "13",
                    "Magic": "22",
                    "Fire": "22",
                    "Lightning": "22",
                    "Holy": "58",
                    "Boost": "27"
                },
                "scaling": {
                    "Faith": "B"
                },
                "requiredStats": {
                    "Faith": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480228/coded_sword_straight_sword_weapon_elden_ring_wiki_guide_200px_l5xtrc.png",
                    "description": "Regalia of Eochaid is a Straight Sword in Elden Ring. The Regalia of Eochaid scales primarily with Dexterity and Arcane and is a good Weapon for Arcane Builds.",
                    "location": [
                        "Going through the Gaol Cave and reaching the end of the dungeon."
                    ],
                    "fp": "15",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Unblockable Blade",
                            "description": " Unblockable Blade (Coded Sword) is a Skill in Elden Ring. Unblockable Blade (Coded Sword) is a unique skill that cannot be applied to other weapons via Ashes of War. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sword of Night and Flame",
                "attack": {
                    "Physical": "87",
                    "Magic": "56",
                    "Fire": "56",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "42",
                    "Fire": "42",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "E",
                    "Intelligence": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "12",
                    "Intelligence": "24",
                    "Faith": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480231/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px_slsmwp.png",
                    "description": "Sword of Night and Flame is a Straight Sword in Elden Ring. The Sword of Night and Flame scales primarily with Strength, Dexterity, Intelligence, and Faith and has a powerful Unique Skill, Night-and-Flame Stance, which allows the user to hold the sword level and follow up with a normal attack to cast the Comet Azur sorcery or a strong attack to sweep forward with a burst of flame causing Fire Damage.",
                    "location": [
                        "Found in Caria Manor, east side, in a locked room behind the gardens.",
                        "From Manor Lower Level Site of Grace, cross the rooftops east, then drop down onto a platform with a ladder.",
                        "Descend to the room with a chest near a chair — the sword is inside."
                    ],
                    "fp": "26-32",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Night-and-Flame Stance",
                            "description": " Night-and-Flame Stance is a Skill in Elden Ring. Night-and-Flame Stance is a unique skill on the Sword of Night and Flame that allows the user to hold the sword level and then have the option to follow up with a normal attack to cast the Comet Azur sorcery or follow up with a sweep flame attack causing Fire Damage",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "greatSwords": [
            {
                "name": "Lizard Greatsword",
                "attack": {
                    "Physical": "140",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "43"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480292/lizard_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_ti2vpq.png",
                    "description": "Lizard Greatsword is a Greatsword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Lizard Greatsword scales primarily with Strength and Dexterity and is a good Weapon for balanced builds that look to have an impish look. This weapon can launch a projectile when you use its heavy attack and has the Stamp Skill that can shortly prevent you from being staggered.",
                    "location": [
                        "Lizard Greatsword is a Greatsword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Lizard Greatsword scales primarily with Strength and Dexterity and is a good Weapon for balanced builds that look to have an impish look. This weapon can launch a projectile when you use its heavy attack and has the Stamp Skill that can shortly prevent you from being staggered.",
                        "Dropped by the imps in the Fog Rift Catacombs "
                    ],
                    "fp": "5",
                    "weight": "9.5",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": " Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greatsword of Damnation",
                "attack": {
                    "Physical": "123",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "79",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "58",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "42",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "15",
                    "Faith": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480321/greatsword_of_damnation_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_x6vjfr.png",
                    "description": "Greatsword of Damnation is a Greatsword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Greatsword of Damnation scales primarily with Strength, Dexterity and Faith and is a good Weapon for for Faith players that are looking for a Greatsword. This weapon has high physical and holy damage and comes with the Golden Crux that allows you to do a leaping attack.",
                    "location": [
                        "Trade Midra, Lord Of Frenzied Flame's Remembrance with Enia at Roundtable Hold"
                    ],
                    "fp": "21",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Golden Crux",
                            "description": "Golden Crux is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Golden Crux is an excruciatingly violent attack that skewers foes from overhead, and if it managed to land successfully, painful barbs unfold from within.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greatsword of Solitude",
                "attack": {
                    "Physical": "120",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "89",
                    "Magic": "40",
                    "Fire": "40",
                    "Lightning": "40",
                    "Holy": "40",
                    "Boost": "53"
                },
                "scaling": {
                    "Strength": "B",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "27",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480296/greatsword_of_solitude_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_prhfta.png",
                    "description": "Greatsword of Solitude is a Greatsword in Elden Ring. It is a brand new Greatsword in the Shadow of the Erdtree DLC. The Greatsword of Solitude scales primarily with Strength and Dexterity and is a good Weapon for pure Strength Builds. It's weapon skill, the Solitary Moon Slash, lets you summon light that can damage your enemies.",
                    "location": [
                        "This item is obtained after defeating the Blackgaol Knight. This boss is located inside the Western Nameless Mausoleum."
                    ],
                    "fp": "12",
                    "weight": "15.5",
                    "skill": [
                        {
                            "name": "Solitary Moon Slash",
                            "description": "Solitary Moon Slash is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Solitary Moon Slash performs a downward slash and then shooting an arc of light. A strong attack can be used for a follow-up attack.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bastard Sword",
                "attack": {
                    "Physical": "138",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480330/bastard_sword_weapon_elden_ring_wiki_guide_200px_dfgutz.png",
                    "description": "Bastard Sword is a Greatsword in Elden Ring. The Bastard Sword scales primarily with Strength and Dexterity is a good Weapon for melee users who want to perform longer-reaching heavier hits. ",
                    "location": [
                        "Purchased from the Nomadic Merchant at the Castle Morne Rampart Site of Grace, on the eastern side of Weeping Peninsula, for 3,000 Runes"
                    ],
                    "fp": "5",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Claymore",
                "attack": {
                    "Physical": "138",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480301/claymore_weapon_elden_ring_wiki_guide_200px_oryijl.png",
                    "description": "Claymore is a Greatsword in Elden Ring. The Claymore scales primarily with Dexterity and Strength  and is a good Weapon for high-strength wielders or for strong characters that are confident to go into battle with this usually two-handed weapon. It is a versatile option.",
                    "location": [
                        "Castle Morne: From the main courtyard entrance, hug the right wall and go past the burning corpses with Misbegotten surrounding them. You may aggro one or two along the way. This path leads to the entrance to the building in the north. The sword can be found in a chest to the left just as you enter this building."
                    ],
                    "fp": "20",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Lion's Claw",
                            "description": "Lion's Claw is a Skill in Elden Ring. Lion's Claw is a skill found on the Claymore which allows players to somersault towards enemies while dealing damage. Lion's Claw has heavy affinity and is Usable on swords, axes, and hammers",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Iron Greatsword",
                "attack": {
                    "Physical": "149",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "73",
                    "Magic": "39",
                    "Fire": "39",
                    "Lightning": "39",
                    "Holy": "39",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480338/iron_greatsword_greatswords_elden_ring_wiki_guide_200px_vvswsq.png",
                    "description": "Iron Greatsword is a Greatsword in Elden Ring. The Iron Greatsword scales primarily with Strength and Dexterity, but it is a rare drop from a relatively tough and seldom-encountered enemy.",
                    "location": [
                        "The Misbegotten Warrior in Miquella's Haligtree, north of the Haligtree Town Plaza Site of Grace. This is the most ideal farming spot as there is a nearby grace and the enemy can be lured toward you with a ranged attack."
                    ],
                    "fp": "20",
                    "weight": "12",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Lordsworn's Greatsword",
                "attack": {
                    "Physical": "136",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480305/lordsworns_greatsword_weapon_elden_ring_wiki_guide_200px_rqsagg.png",
                    "description": "Lordsworn's Greatsword is a Greatsword in Elden Ring. The Lordsworn's Greatsword scales primarily with Strength and Dexterity is a good Weapon for melee users who want to perform longer-reaching heavier hits",
                    "location": [
                        "The Lordsworn's Greatsword can be looted from a chest in the back of a Carriage, located along the western road leading out of Gatefront Ruins."
                    ],
                    "fp": "5",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Knight's Greatsword",
                "attack": {
                    "Physical": "141",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480341/knights_greatsword_weapon_elden_ring_wiki_guide_200px_mcfpwi.png",
                    "description": "Knight's Greatsword is a Greatsword in Elden Ring. The Knight's Greatsword scales primarily with Strength and Dexterity and is a good Weapon for melee combat. Its skill, Stamp (Upward Cut) also allows the user to prevent recoil from enemy attacks and follow up with another strong attack.",
                    "location": [
                        "Dropped by most enemies in the knight archetype such as Godrick Knights (throughout Limgrave), Cuckoo Knights (throughout Liurnia of the Lakes), Mausoleum Knight "
                    ],
                    "fp": "5",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Banished Knight's Greatsword ",
                "attack": {
                    "Physical": "142",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "17",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480330/bastard_sword_weapon_elden_ring_wiki_guide_200px_dfgutz.png",
                    "description": "Banished Knight's Greatsword is a Greatsword in Elden Ring. The Banished Knight's Greatsword scales primarily with Dexterity and Strength, and is a good Weapon for most players. But, since it requires no Dexterity investment, it's better as a pure strength weapon.",
                    "location": [
                        "Chance for it to be looted off the Banished Knight enemies that you've killed. Can be farmed from the Banished Knight enemies near the Cathedral of Dragon Communion site of grace in Caelid."
                    ],
                    "fp": "5",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Forked Greatsword",
                "attack": {
                    "Physical": "124",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "61",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480344/forked_greatsword_weapon_elden_ring_wiki_guide_200px_oxkw0u.png",
                    "description": "Forked Greatsword is a Greatsword in Elden Ring. The Forked Greatsword scales primarily with Strength and Dexterity and has one of the most distinctive looks in the game. ",
                    "location": [
                        "Dropped by the imps using this weapon. The best place to farm it is Road's End Catacombs, as the very first imp there, a few yards from the grace, has this sword."
                    ],
                    "fp": "5",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Flamberge",
                "attack": {
                    "Physical": "129",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480314/flamberge_weapon_elden_ring_wiki_guide_200px_cphcwi.png",
                    "description": "Flamberge is a Greatsword in Elden Ring. The Flamberge scales primarily with Strength and Dexterity and is a good Weapon for Standard and Pierce damage. Its accompanying unique skill can also allow the user to brace armament and step into a low stance that prevents recoil from most enemy attacks, which will be followed up with a strong upward strike.  ",
                    "location": [
                        "Redmane Castle: up on the rampart, guarded by a Pumpkin Head. Cannot be obtained while Radahn Festival is ongoing. Either get it before the festival starts or after defeating Starscourge Radahn."
                    ],
                    "fp": "5",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gargoyle's Greatsword",
                "attack": {
                    "Physical": "133",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "71",
                    "Magic": "38",
                    "Fire": "38",
                    "Lightning": "38",
                    "Holy": "38",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480348/gargoyles_greatsword_weapon_elden_ring_wiki_guide_200px_il9ygp.png",
                    "description": "Gargoyle's Greatsword is a Greatsword in Elden Ring. The Gargoyle's Greatsword scales primarily with Strength and Dexterity and is a good Weapon for using the weapon as a projectile with the skill, Vacuum Slice that allows its user to hold the armament aloft to surround it with a shearing vacuum, then launch it forwards.  ",
                    "location": [
                        "Dropped by the Valiant Gargoyle in Siofra Aqueduct when both bosses are defeated. "
                    ],
                    "fp": "12",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Vacuum Slice",
                            "description": "Vacuum Slice is a Skill in Elden Ring. Vacuum Slice is a skill that allows users to turn their wielded weapon into a projectile.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gargoyle's Blackblade",
                "attack": {
                    "Physical": "102",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "122",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "60",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "66",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "10",
                    "Faith": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480589/gargoyles_blackblade_weapon_elden_ring_wiki_guide_200px.png",
                    "description": "Gargoyle's Blackblade is a Greatsword in Elden Ring. The Gargoyle's Blackblade scales primarily with Faith, Strength and Dexterity and is a good Weapon for dealing Holy Damage and the ability to launch the weapon as a projectile due to it's unique skill, Corpse Wax Cutter.",
                    "location": [
                        "Drops from the Black Blade Kindred, who stands in front of the Bestial Sanctum."
                    ],
                    "fp": "16",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Corpse Wax Cutter",
                            "description": "Corpse Wax Cutter is a Skill in Elden Ring. Corpse Wax Cutter is a unique skill on the Gargoyle's Blackblade and grants the user the ability to launch the attached weapon as a projectile to damage foes at a further range.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Inseparable Sword",
                "attack": {
                    "Physical": "98",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "98",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "59",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "52",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "C"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "18",
                    "Faith": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480318/inseparable_sword_elden_ring_wiki_guide_200px_ehsq7z.png",
                    "description": "Inseparable Sword is a Greatsword in Elden Ring. It is the choice weapon of D, Hunter of the Dead and staunch believer in Golden Order Fundamentalism. The Inseparable Sword scales primarily with Strength, Dexterity and Faith and is a good Weapon for Faith Builds.",
                    "location": [
                        "Prince of Death's Throne, after giving D's brother D's Twinned Armour. You must have killed Lichdragon Fortissax in Fia's Dream and received the Mending Rune of Death."
                    ],
                    "fp": "19",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Sacred Blade",
                            "description": "Sacred Blade is a Skill in Elden Ring. Sacred Blade is a regular skill that can be found in Ashes of War that can be used on many melee armaments. Using this skill grants holy essence to the weapon and fires off a golden blade projectile, great to use against Those Who Live in Death.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sword of Milos",
                "attack": {
                    "Physical": "141",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "19"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480351/sword_of_milos_weapon_elden_ring_wiki_guide_200px_owqvbc.png",
                    "description": "Sword of Milos is a Greatsword in Elden Ring. The Sword of Milos scales primarily with Strength and Dexterity and is a good Weapon for casters because of its ability to restore FP. ",
                    "location": [
                        "Dropped by killing Dung Eater in the Subterranean Shunning-Grounds if you choose to kill him here."
                    ],
                    "fp": "30",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Shriek of Milos",
                            "description": "Shriek of Milos is a Skill in Elden Ring. Shriek of Milos is a special skill that is only available for the Sword of Milos, and cannot be applied to other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Marais Executioner's Sword",
                "attack": {
                    "Physical": "94",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "49",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "14",
                    "Arcane": "23"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480354/marais_executioners_sword_weapon_elden_ring_wiki_guide_200px_t5uttz.png",
                    "description": "Marais Executioner's Sword is a Greatsword in Elden Ring. The Marais Executioner's Sword scales primarily with Strength and Arcane and is a good Weapon for melee users who want to output high damage. Infuse the sword with energy, then fling it forwards in a corkscrew attack. The sword continuously deals damage while violently spinning. Charge the attack to increase reach and duration of the spin. ",
                    "location": [
                        "Dropped by Elemer of the Briar at The Shaded Castle."
                    ],
                    "fp": "15",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Eochaid's Dancing Blade",
                            "description": "Eochaid's Dancing Blade is the unique Skill of the Marais Executioner's Sword and Regalia of Eochaid in Elden Ring. Eochaid's Dancing Blade is a special skill available for certain weapons, it infuses the sword with energy, then allows the player to manipulate the sword and fling it forwards in a corkscrew attack. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ordovis's Greatsword",
                "attack": {
                    "Physical": "107",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "69",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "69",
                    "Magic": "37",
                    "Fire": "37",
                    "Lightning": "37",
                    "Holy": "50",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "25",
                    "Dexterity": "13",
                    "Faith": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480357/ordoviss_greatsword_weapon_elden_ring_wiki_guide_200px_j8eez7.png",
                    "description": "Ordovis's Greatsword is a Greatsword in Elden Ring. The Ordovis's Greatsword scales primarily with Strength, Dexterity and Faith. It is a good Weapon for STR/FTH builds. It draws from the power of the Crucible.",
                    "location": [
                        "Dropped by Crucible Knight Ordovis, located at Auriza Hero's Grave."
                    ],
                    "fp": "15",
                    "weight": "12",
                    "skill": [
                        {
                            "name": "Ordovis's Vortex",
                            "description": "Ordovis's Vortex is a Skill in Elden Ring. Ordovis's Vortex allows the user to spin the blade before slamming it down, it can be charged to increase its power.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Alabaster Lord's Sword",
                "attack": {
                    "Physical": "128",
                    "Magic": "38",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "69",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "56",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "12",
                    "Intelligence": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480327/alabaster_lords_sword_weapon_elden_ring_wiki_guide_200px_fvgufz.png",
                    "description": "Alabaster Lord's Sword is a Greatsword in Elden Ring. The Alabaster Lord's Sword scales primarily with Strength and secondarily with Dexterity and Intelligence.",
                    "location": [
                        "Awarded upon killing Alabaster Lord in the Lake of Rot."
                    ],
                    "fp": "15",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Alabaster Lord's Pull",
                            "description": "Alabaster Lord's Pull is a Skill in Elden Ring. Alabaster Lord's Pull creates a powerful gravity well, that pulls enemies in while inflicting damage.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Death's Poker",
                "attack": {
                    "Physical": "123",
                    "Magic": "36",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "60",
                    "Magic": "39",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "17",
                    "Intelligence": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480360/deaths_poker_weapon_elden_ring_wiki_guide_200px_wz3ev8.png",
                    "description": "Death's Poker is a Greatsword in Elden Ring. Death's Poker scales primarily with strength, dexterity, and intelligence. It does piercing damage and causes frostbite.",
                    "location": [
                        "Southeast of the Southern Aeonia Swamp Bank Site of Grace. A Death Rite Bird boss can be encountered there at night time."
                    ],
                    "fp": "15",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Ghostflame Ignition",
                            "description": "Ghostflame Ignition is a Skill in Elden Ring. Ghostflame Ignition is a unique skill that can be used on Death's Poker. It allows the player to thrust out the barbed rod and set its tip alight with ghostflame.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Helphen's Steeple",
                "attack": {
                    "Physical": "101",
                    "Magic": "101",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "19",
                    "Dexterity": "10",
                    "Intelligence": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480364/helphens_steeple_dby9bj.png",
                    "description": "Helphen's Steeple is a Greatsword in Elden Ring. The Helphen's Steeple scales primarily with Strength, Intelligence and Dexterity and is a good Weapon for its additional magic damage. ",
                    "location": [
                        "Dropped by a Tibia Mariner on a ledge South of Castle Sol and North West of Snow Valley Ruins Overlook. "
                    ],
                    "fp": "20",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Ruinous Ghostflame",
                            "description": "Ruinous Ghostflame is a Skill in Elden Ring. Ruinous Ghostflame is a unique skill to the Helphen's Steeple.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Blasphemous Blade",
                "attack": {
                    "Physical": "121",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "72",
                    "Magic": "39",
                    "Fire": "54",
                    "Lightning": "39",
                    "Holy": "39",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "22",
                    "Dexterity": "15",
                    "Faith": "21"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480367/blasphemous_blade_weapon_elden_ring_wiki_guide_200px_ei42mn.png",
                    "description": "Blasphemous Blade is a Greatsword in Elden Ring. The Blasphemous Blade scales primarily with Strength, Dexterity and Faith and is a Weapon that deals additional fire damage. ",
                    "location": [
                        "Trade Remembrance of the Blasphemous with Enia at Roundtable Hold."
                    ],
                    "fp": "30",
                    "weight": "13.5",
                    "skill": [
                        {
                            "name": "Taker's Flames",
                            "description": "Taker's Flames is a Skill in Elden Ring. Taker's Flames allows the user to engulf the blade with blasphemous flames, stealing HP from those it touches.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Golden Order Greatsword",
                "attack": {
                    "Physical": "86",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "103",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "55",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "60",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Faith": "C"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "21",
                    "Faith": "28"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480335/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px_xixboj.png",
                    "description": "Golden Order Greatsword is a Greatsword in Elden Ring. The Golden Order Greatsword scales primarily with Dexterity and Faith, with minor scaling in Strength. It is a versatile Weapon that can deal considerable amount of Holy damage both in melee and at medium range.",
                    "location": [
                        "Dropped by Misbegotten Crusader in the Cave of the Forlorn."
                    ],
                    "fp": "20",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Establish Order",
                            "description": "Establish Order is a Skill in Elden Ring. Establish Order is a unique skill that can be used on the Golden Order Greatsword. It allows the player to release a golden explosion upon raising the armament, and launch forward a devastating arc of Holy light on consequent ability casts.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dark Moon Greatsword",
                "attack": {
                    "Physical": "82",
                    "Magic": "98",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "57",
                    "Magic": "63",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "C"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "11",
                    "Intelligence": "38"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480370/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px_d7emql.png",
                    "description": "Dark Moon Greatsword is a Greatsword in Elden Ring. The Dark Moon Greatsword scales primarily with Intelligence, Dexterity and Strength and is a staple weapon, in one way or another, in all From Software games. ",
                    "location": [
                        "Found below the Cathedral of Manus Celes after giving Ranni the Dark Moon Ring."
                    ],
                    "fp": "32",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Moonlight Greatsword",
                            "description": "Moonlight Greatsword is a Skill in Elden Ring. Moonlight Greatsword is a the unique skill found on the Dark Moon Greatsword.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sacred Relic Sword",
                "attack": {
                    "Physical": "118",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "76",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "62",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "45",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "24",
                    "Faith": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480420/sacred_relic_sword_klsfmq.png",
                    "description": "Sacred Relic Sword is a Greatsword in Elden Ring. The Sacred Relic Sword scales primarily with Strength, Faith, and Dexterity and is a good Weapon for its additional holy damage. ",
                    "location": [
                        "Trade Elden Remembrance with Enia at Roundtable Hold."
                    ],
                    "fp": "42",
                    "weight": "11",
                    "skill": [
                        {
                            "name": "Wave of Gold",
                            "description": "Wave of Gold is a Skill in Elden Ring. Wave of Gold is a special skill that is only available for the Sacred Relic Sword, and it cannot be applied on other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "colossalSwords ": [
            {
                "name": "Fire Knight's Greatsword",
                "attack": {
                    "Physical": "147",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "69",
                    "Magic": "42",
                    "Fire": "47",
                    "Lightning": "42",
                    "Holy": "45",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "22",
                    "Dexterity": "18",
                    "Faith": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480629/fire_knights_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
                    "description": "Fire Knight's Greatsword is a Colossal Sword in Elden Ring. It is a Colossal Sword introduced in the Shadow of the Erdtree DLC. The Fire Knight's Greatsword scales primarily with Strength, Dexterity and Faith and is a good Weapon for fire builds. This weapon has the Stamp Skill, which prevents you in a short time from being staggered",
                    "location": [
                        "4.0% Chance to be dropped by Fire Knights that wield it in the Shadow Keep.",
                        "Easiest way to farm this is by taking the elevator southwest from the 'Storehouse, First Floor' site of grace down and defeating the one enemy that wields it."
                    ],
                    "fp": "5",
                    "weight": "16",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ancient Meteoric Ore Greatsword",
                "attack": {
                    "Physical": "154",
                    "Magic": "46",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "80",
                    "Magic": "55",
                    "Fire": "49",
                    "Lightning": "49",
                    "Holy": "49",
                    "Boost": "55"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "35",
                    "Dexterity": "10",
                    "Arcane": "19"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480631/ancient_meteoric_ore_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
                    "description": "Ancient Meteoric Ore Greatsword is a Colossal Sword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Ancient Meteoric Ore Greatsword scales primarily with Strength, Dexterity and Arcane and is a good Weapon for Arcane players that want to use a humongous weapon.",
                    "location": [
                        "The weapon is acquired after examining the altar of the Ruined Forge of Starfall Past. The altar is found on the second level. To reach the altar, you must pull the lever to make the iron door rise, and use it as a platform to jump across to the second level where the altar is."
                    ],
                    "fp": "10",
                    "weight": "22",
                    "skill": [
                        {
                            "name": "White Light Charge",
                            "description": "White Light Charge is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. White Light Charge creates a powerful white light that is employed for a charging attack that pierces enemies and ends with a light explosion.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greatsword of Radahn (Lord)",
                "attack": {
                    "Physical": "129",
                    "Magic": "83",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "69",
                    "Magic": "42",
                    "Fire": "47",
                    "Lightning": "42",
                    "Holy": "42",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Arcane": "E"
                },
                "requiredStats": {
                    "Strength": "32",
                    "Dexterity": "24",
                    "Arcane": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480634/greatsword_of_radahn__lord__elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
                    "description": "Greatsword of Radahn (Lord) is a Colossal Sword in Elden Ring. It is a brand new Colossal Sword in the Shadow of the Erdtree DLC. The Greatsword of Radahn (Lord) scales primarily with Strength, Dexterity, and Intelligence and is one of the options players can select when trading the Remembrance of a God and a Lord. ",
                    "location": [
                        "Trade Remembrance of a God and a Lord with Enia at Roundtable Hold. The two other options are Greatsword of Radahn (Light) and Light of Miquella."
                    ],
                    "fp": "20",
                    "weight": "19",
                    "skill": [
                        {
                            "name": "Promised Consort",
                            "description": "Promised Consort is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Promised Consort imbues both greatswords with the light of Miquella and subsequently delivers an attack accompanied by columns of blinding light.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Moonrithyll's Knight Sword",
                "attack": {
                    "Physical": "124",
                    "Magic": "80",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "70",
                    "Magic": "55",
                    "Fire": "43",
                    "Lightning": "43",
                    "Holy": "43",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "14",
                    "Arcane": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480640/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Moonrithyll's Knight Sword is a Colossal Sword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Moonrithyll's Knight Sword scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for Strength/Intelligence Builds. This comes with the Tremendous Phalanx skill, which lets you summon magic blades that head towards enemies around you.",
                    "location": [
                        "The weapon drops from defeating the hostile NPC Moonrithyll, Carian Knight. [See Shadow of the Erdtree Map] "
                    ],
                    "fp": "16",
                    "weight": "18",
                    "skill": [
                        {
                            "name": "Tremendous Phalanx",
                            "description": "Tremendous Phalanx is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Tremendous Phalanx is the skill used by enchanted troll knights, which creates enormous magic glintblades overhead, which react to any foe that gets nearby.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greatsword of Radahn (Light)",
                "attack": {
                    "Physical": "129",
                    "Magic": "83",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "47",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "52"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "32",
                    "Dexterity": "24",
                    "Arcane": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480641/greatsword_of_radahn__light__elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
                    "description": "Greatsword of Radahn (Light) is a Colossal Sword in Elden Ring. It is a brand new Colossal Sword in the Shadow of the Erdtree DLC. The Greatsword of Radahn (Light) scales primarily with Strength, Dexterity and Intelligence and can be obtained by trading the Remembrance of a God and a Lord at the Roundtable Hold. ",
                    "location": [
                        "Trade Remembrance of a God and a Lord with Enia at Roundtable Hold. The two other options are Greatsword of Radahn (Lord) and Light of Miquella."
                    ],
                    "fp": "26",
                    "weight": "19",
                    "skill": [
                        {
                            "name": "Lightspeed Slash",
                            "description": "Lightspeed Slash is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Lightspeed Slash allows the user to assume a luminous form and unleash slashes at the speed of light.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Zweihander",
                "attack": {
                    "Physical": "141",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "67",
                    "Magic": "40",
                    "Fire": "40",
                    "Lightning": "40",
                    "Holy": "40",
                    "Boost": "45"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "19",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480643/zweihander_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Zweihander is a Colossal Sword in Elden Ring. The Zweihander scales primarily with Strength and Dexterity, and is a versatile Weapon for heavy-weight combat. This weapon, the lightest and least stat demanding of all colossal swords, is able to set a devastating tempo for an encounter through its flexible moveset.  ",
                    "location": [
                        "Can be purchased from the Isolated Merchant for 3,500 Runes. He can be found in his shack at the very west of the Weeping Peninsula."
                    ],
                    "fp": "5",
                    "weight": "15.5",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greatsword",
                "attack": {
                    "Physical": "164",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "84",
                    "Magic": "50",
                    "Fire": "50",
                    "Lightning": "50",
                    "Holy": "50",
                    "Boost": "55"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "31",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480648/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Greatsword is a Colossal Sword in Elden Ring. The Greatsword scales primarily with Strength and is a good Weapon for cleaving many foes at once with its wide swings. ",
                    "location": [
                        "Found in Caelid. North-west to the Caelem Ruins Site of Grace, inside the chest in the back of the Carriage guarded by Giant Dogs."
                    ],
                    "fp": "5",
                    "weight": "23",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Watchdog's Greatsword",
                "attack": {
                    "Physical": "142",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "82",
                    "Magic": "49",
                    "Fire": "49",
                    "Lightning": "49",
                    "Holy": "49",
                    "Boost": "55"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "30",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480646/watchdogs_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Watchdog's Greatsword is a Colossal Sword in Elden Ring. The Watchdog's Greatsword scales primarily with Strength and is a good Weapon for cleaving many enemies at once.  ",
                    "location": [
                        "Dropped by the sword wielding Watchdogs in the Mountaintops of the Giants."
                    ],
                    "fp": "5",
                    "weight": "22",
                    "skill": [
                        {
                            "name": "Stamp (Upward Cut)",
                            "description": "Stamp (Upward Cut) is a Skill in Elden Ring. Stamp (Upward Cut) is a skill to help with your stance and positioning. Use this skill when going against larger enemies with higher chances of recoil to reduce it.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Troll's Golden Sword",
                "attack": {
                    "Physical": "155",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "76",
                    "Magic": "46",
                    "Fire": "46",
                    "Lightning": "46",
                    "Holy": "46",
                    "Boost": "51"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "29",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480649/trolls_golden_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Troll's Golden Sword is a Colossal Sword in Elden Ring. The Troll's Golden Sword scales primarily with Dexterity and Strength and is a good Weapon for dire battles. With its heavy-set stats and unique skill, this weapon was built to destroy any large beasts and foes it comes into contact with. This greatsword can only be wielded by a worthy warrior and will require high Strength stats before it can be used. ",
                    "location": [
                        "In a chest on a Carriage, which can be found east of the Erdtree-Gazing-Hill Site of Grace."
                    ],
                    "fp": "5",
                    "weight": "19",
                    "skill": [
                        {
                            "name": "Troll's Roar",
                            "description": "Troll's Roar is a Skill in Elden Ring. Troll's Roar is a skill found on the Troll's Hammer, Troll's Golden Sword, and Troll Knight's Sword. This allows the user to distance himself from nearby enemies by generating a shockwave that blows them back. Updated to Patch 1.07. Troll's Roar has Heavy Affinity and is usable on large and colossal swords, axes, and hammers.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Troll Knight's Sword",
                "attack": {
                    "Physical": "124",
                    "Magic": "80",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "70",
                    "Magic": "55",
                    "Fire": "43",
                    "Lightning": "43",
                    "Holy": "43",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "29",
                    "Dexterity": "10",
                    "Intelligence": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480640/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Troll Knight's Sword is a Colossal Sword in Elden Ring. The Troll Knight's Sword scales primarily with Strength, Dexterity, and Intellect and is a good Weapon for Int/Str Builds.",
                    "location": [
                        "Guaranteed drop from the Troll Knight in Caria Manor. ",
                        "The two Spectral Troll Knights leading up to The Four Belfries can also drop this item"
                    ],
                    "fp": "22",
                    "weight": "18",
                    "skill": [
                        {
                            "name": "Troll's Roar",
                            "description": "Troll's Roar is a Skill in Elden Ring. Troll's Roar is a skill found on the Troll's Hammer, Troll's Golden Sword, and Troll Knight's Sword. This allows the user to distance himself from nearby enemies by generating a shockwave that blows them back. Updated to Patch 1.07. Troll's Roar has Heavy Affinity and is usable on large and colossal swords, axes, and hammers.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Grafted Blade Greatsword",
                "attack": {
                    "Physical": "162",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "80",
                    "Magic": "48",
                    "Fire": "48",
                    "Lightning": "48",
                    "Holy": "48",
                    "Boost": "53"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "40",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480655/grafted_blade_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Grafted Blade Greatsword is a Colossal Sword in Elden Ring. The Grafted Blade Greatsword scales primarily with Strength, with minor scaling in Dexterity. With its heavy set stats and unique skill, this weapon was built to overcome larger beasts and foes it comes into contact with. This Greatsword can only be wielded by a worthy warrior and will require high Strength stats before it can be used. ",
                    "location": [
                        "Obtained by defeating the Leonine Misbegotten boss in Castle Morne at the Weeping Peninsula."
                    ],
                    "fp": "20",
                    "weight": "21",
                    "skill": [
                        {
                            "name": "Oath of Vengeance",
                            "description": "Oath of Vengeance is a Skill in Elden Ring. Oath of Vengeance is a unique skill directly equipped with the Grafted Blade Greatsword, which can be obtained from Castle Morne.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ruins Greatsword",
                "attack": {
                    "Physical": "124",
                    "Magic": "37",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "82",
                    "Magic": "56",
                    "Fire": "50",
                    "Lightning": "50",
                    "Holy": "50",
                    "Boost": "56"
                },
                "scaling": {
                    "Strength": "B",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "50",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480657/ruins_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Ruins Greatsword is a Colossal Sword in Elden Ring. The Ruins Greatsword scales primarily with Strength and Intelligence and is a good Weapon for its additional magic damage. ",
                    "location": [
                        "Ruins Greatsword can be acquried by defeating Misbegotten Warrior + Crucible Knight at Redmane Castle Plaza. "
                    ],
                    "fp": "25",
                    "weight": "23",
                    "skill": [
                        {
                            "name": "Wave of Destruction",
                            "description": "Wave of Destruction is a Skill in Elden Ring. Wave of Destruction is a unique skill that is only available for the Ruins Greatsword, and it cannot be applied to other weapons via Ashes of War",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Starscourge Greatsword",
                "attack": {
                    "Physical": "129",
                    "Magic": "83",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "47",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "52"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "38",
                    "Dexterity": "12",
                    "Intelligence": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480660/starscourge_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Starscourge Greatsword is a Colossal Sword in Elden Ring. The Starscourge Greatsword scales primarily with Intelligence, Strength, and Dexterity and is a good Weapon for pulling in enemies using its unique skill, Starcaller Cry. The Starscourge Greatsword is one of a few non-Claw/Fist Paired Weapons.",
                    "location": [
                        "Trade Remembrance of the Starscourge with Enia at Roundtable Hold."
                    ],
                    "fp": "20",
                    "weight": "20",
                    "skill": [
                        {
                            "name": "Starcaller Cry",
                            "description": "Starcaller Cry is a Skill in Elden Ring. Starcaller Cry is a unique skill for the Starscourge Greatsword. It pulls in enemies with a gravitational wave and additionally allows the user of the skill to follow up with a slam down the swords. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Godslayer's Greatsword",
                "attack": {
                    "Physical": "119",
                    "Magic": "0",
                    "Fire": "77",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "63",
                    "Magic": "38",
                    "Fire": "49",
                    "Lightning": "38",
                    "Holy": "38",
                    "Boost": "45"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "22",
                    "Intelligence": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480665/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Godslayer's Greatsword is a Colossal Sword in Elden Ring. The Godslayer's Greatsword scales primarily with Dexterity and Faith, with mediocre scaling in Strength, and is a good Weapon for inflicting fire-based damage. It is a sacred armament once wielded by the Gloam-Eyed Queen.",
                    "location": [
                        "Divine Tower of Caelid: Found in a chest behind the Godskin Apostle boss arena after defeating him."
                    ],
                    "fp": "15",
                    "weight": "17.5",
                    "skill": [
                        {
                            "name": "The Queen's Black Flame",
                            "description": "The Queen's Black Flame is a Skill in Elden Ring. The Queen's Black Flame is a unique skill directly equipped with the Godslayer's Greatsword, which can be obtained from the Divine Tower of Caelid. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Maliketh's Black Blade",
                "attack": {
                    "Physical": "127",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "83",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "49",
                    "Boost": "55"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "12",
                    "Intelligence": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Maliketh's Black Blade is a Colossal Sword in Elden Ring. The Maliketh's Black Blade scales primarily with Strength, Dexterity and Faith. A good Weapon for inflicting holy-based damage. ",
                    "location": [
                        "Trade Remembrance of the Black Blade with Enia at Roundtable Hold."
                    ],
                    "fp": "40",
                    "weight": "22",
                    "skill": [
                        {
                            "name": "Destined Death",
                            "description": "Destined Death is a Skill in Elden Ring. Destined Death allows the user to create a myriad of ethereal blade attacks to deal damage and inflicts a penalizing debuff onto enemies.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "thrustingSwords": [
            {
                "name": "Carian Sorcery Sword",
                "attack": {
                    "Physical": "69",
                    "Magic": "69",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "34",
                    "Magic": "48",
                    "Fire": "24",
                    "Lightning": "24",
                    "Holy": "24",
                    "Boost": "19"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "19",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1757782809/carian_sorcery_sword_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px_abildk.png",
                    "description": "Carian Sorcery Sword is a Thrusting Sword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Carian Sorcery Sword scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for players looking for a weapon that can also serve as a catalyst for spells.",
                    "location": [
                        "In a chest that can be found after dropping down into Castle Ensis from the cliff just west of the waterfall to the west of the Highroad Cross Site of Grace in Scadu Altus."
                    ],
                    "fp": "9",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rapier",
                "attack": {
                    "Physical": "96",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "130"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "20"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1757782811/rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px_obfv1w.png",
                    "description": "Rapier is a Thrusting Sword in Elden Ring. The Rapier scales primarily with Strength and Dexterity, and is a good Weapon for mobility during combat. This sword is lightweight, but sharp.",
                    "location": [
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold"
                    ],
                    "fp": "14",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Estoc",
                "attack": {
                    "Physical": "107",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "54",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "24"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Estoc is a Thrusting Sword in Elden Ring. The Estoc scales primarily with Strength and Dexterity is a good Weapon for dealing melee piercing damage and slashing attacks.",
                    "location": [
                        "Starting Equipment for the Prisoner Class.",
                        "Can be purchased from the Nomadic Merchant in Liurnia of the Lakes"
                    ],
                    "fp": "14",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Noble's Estoc",
                "attack": {
                    "Physical": "104",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "22"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Noble's Estoc is a Thrusting Sword in Elden Ring. The Noble's Estoc scales primarily with Strength and Dexterity and is a good Weapon for easy use or for selling. It comes with the skill, Impaling Thrust that allows its pierce to overcome enemy shields.",
                    "location": [
                        "Dropped by Wandering Nobles in Limgrave, Raya Lucaria Academy and Altus Plateau, who wear feathered caps and coats."
                    ],
                    "fp": "9",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Cleanrot Knight's Sword",
                "attack": {
                    "Physical": "109",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "51",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "23"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Cleanrot Knight's Sword is the longest Thrusting Sword in Elden Ring despite appearing shorter than the Estoc. Cleanrot Knight's Sword scales primarily with Strength and Dexterity, but in the long run scales higher with Strength rather than Dexterity. Overall, it is a good Weapon for those who want to wield it. ",
                    "location": [
                        "Drops from most Lesser Cleanrot Knights."
                    ],
                    "fp": "9",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Antspur Rapier",
                "attack": {
                    "Physical": "98",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "21"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Antspur Rapier is a Thrusting Sword in Elden Ring. The Antspur Rapier scales primarily with Strength and Dexterity and is a good Weapon for inflicting addition scarlet rot buildup in addition to Physical Damage. With Impaling Thrust, users can also pierce through enemy's guards, giving the user an advantage in combat.",
                    "location": [
                        "Dropped by Maleigh Marais, Shaded Castle Castellan, a hostile NPC found in the fields west of The Shaded Castle."
                    ],
                    "fp": "14",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Frozen Needle",
                "attack": {
                    "Physical": "99",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "40",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "20"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Frozen Needle is a Thrusting Sword in Elden Ring. The Frozen Needle scales primarily with Strength and Dexterity and is a good Weapon for inflicting frost on enemies. ",
                    "location": [
                        "Kingsrealm Ruins: Found in a chest inside a small room at the end of the underground area in the northeast. Requires defeating of the Royal Revenant boss in order to access the room."
                    ],
                    "fp": "14",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "heavythrustingSwords": [
            {
                "name": "Sword Lance",
                "attack": {
                    "Physical": "132",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "73",
                    "Magic": "39",
                    "Fire": "39",
                    "Lightning": "39",
                    "Holy": "39",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "21",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Sword Lance is a Heavy Thrusting Sword in Elden Ring. The Sword Lance scales primarily with Strength and Dexterity and is available after trading  the Remembrance of the Wild Boar Rider with Enia at the Roundtable Hold. This weapon comes with the Spinning Gravity Thrust which lets you levitate and thrust towards an enemy while spinning",
                    "location": [
                        "Can be selected as one of the possible rewards when trading Remembrance of the Wild Boar Rider with Enia at the Roundtable Hold."
                    ],
                    "fp": "9",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Queelign's Greatsword",
                "attack": {
                    "Physical": "117",
                    "Magic": "0",
                    "Fire": "35",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "50",
                    "Magic": "34",
                    "Fire": "45",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "18",
                    "Faith": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Queelign's Greatsword is a Heavy Thrusting Sword in Elden Ring. It is a brand new Heavy Thrusting Sword in the Shadow of the Erdtree DLC. The Queelign's Greatsword scales primarily with Strength, Dexterity and Faith and is the Weapon wielded by Fire Knight Queelign. ",
                    "location": [
                        "Shadow Keep: Use the Iris of Occultation on Queelign in the Prayer Room to receive Queelign's Greatsword."
                    ],
                    "fp": "9",
                    "weight": "7.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Great Épée",
                "attack": {
                    "Physical": "124",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "52",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Great Épée is a Heavy Thrusting Sword in Elden Ring. The Great Épée scales primarily with Strength and Dexterity and is a good Weapon for combat where thrusting will benefit the fighter. Its extra weight packs some extra physical attack power and still allows players to use this weapon with a shield. ",
                    "location": [
                        "Go due east from the Agheel Lake South site of grace, and up the hill with gravestones. It's in a chest near two Kaiden Sellswords. It's next to the green and yellow banner, in front of the right most yellow canopy tent."
                    ],
                    "fp": "9",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Godskin Stitcher",
                "attack": {
                    "Physical": "127",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "55",
                    "Magic": "38",
                    "Fire": "38",
                    "Lightning": "38",
                    "Holy": "38",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "17"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Godskin Stitcher is a Heavy Thrusting Sword in Elden Ring. The Godskin Stitcher scales primarily with Strength and Dexterity and is a potent Weapon for combat situations where Pierce damage and thrusting moveset will benefit the player.",
                    "location": [
                        "Dropped by Godskin Noble at Volcano Manor."
                    ],
                    "fp": "9",
                    "weight": "7",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bloody Helice",
                "attack": {
                    "Physical": "121",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "57",
                    "Magic": "40",
                    "Fire": "40",
                    "Lightning": "40",
                    "Holy": "40",
                    "Boost": "34"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "19",
                    "Arcane": "17"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bloody Helice is a Heavy Thrusting Sword in Elden Ring. It is wielded by dynastic servants of the Lord of Blood. The Bloody Helice scales primarily with Arcane and Dexterity and is a good Weapon for Piercing Damage and additional blood loss along with a complementing Unique Skill, Dynast's Finesse which allows the user to avoid an attack and follow up with a strong attack. ",
                    "location": [
                        "In the Writheblood Ruins in Altus Plateau, found in a chest after the boss."
                    ],
                    "fp": "5",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Dynast's Finesse",
                            "description": "Dynast's Finesse is a Skill in Elden Ring. Dynast's Finesse is a Unique skill found on the Bloody Helice which can add extra damage to foes.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dragon King's Cragblade",
                "attack": {
                    "Physical": "92",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "59",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "46",
                    "Magic": "32",
                    "Fire": "32",
                    "Lightning": "46",
                    "Holy": "32",
                    "Boost": "34"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "37"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Dragon King's Cragblade is a Heavy Thrusting Sword in Elden Ring. The Dragon King's Cragblade scales primarily with Dexterity, with reduced scaling on Strength, and is a potent Weapon to oppose dragon-like creatures or enemies that are susceptible to Lightning damage. ",
                    "location": [
                        "Trade Remembrance of the Dragonlord with Enia at Roundtable Hold."
                    ],
                    "fp": "28",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Thundercloud Form",
                            "description": "Thundercloud Form is a Skill in Elden Ring. Thundercloud Form is a special skill that is only available for the Dragon King's Cragblade, and cannot be applied to other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "curveSwords": [
            {
                "name": "Spirit Sword",
                "attack": {
                    "Physical": "92",
                    "Magic": "59",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "38",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "19"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "16",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Spirit Sword is a Curved Sword in Elden Ring. It is a brand new Curved Sword in the Shadow of the Erdtree DLC. The Spirit Sword scales primarily with Strength, Dexterity, and Intelligence and is a good Weapon for INT characters in the look for a sword. ",
                    "location": [
                        "You can find this weapon in the Cerulean Coast. Northeast from the Cerulean Coast West site of grace, the entrance to a triangular ravine can be accessed. It's in the right corner in that lower area, near some demi-humans."
                    ],
                    "fp": "12",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Rancor Slash",
                            "description": "Rancor Slash is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Rancor Slash performs a spin that slashes enemies while also summoning vengeful spirits which chase down foes and deal damage. Can be followed-up by an additional attack.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Falx",
                "attack": {
                    "Physical": "107",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "23"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Falx is a Curved Sword in Elden Ring. It is found in the Shadow of the Erdtree DLC. The Falx scales with Strength and Dexterity. This comes with the Revenger's Blade skill which lets you dash up to an enemy and slash them open with the blades held in each hand and has tremendous bleed build-up.",
                    "location": [
                        "If you summoned him to fight Messmer the Impaler, he will drop the Falx after invading you near the Church of the Bud site of grace ",
                        "If you choose to assist Leda and invade Hornsent in Shadow Keep, he will drop the Falx once defeated"
                    ],
                    "fp": "15",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Revenger's Blade",
                            "description": "Revenger's Blade is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Revenger's Blade performs a dash towards and enemy and uses both blades to slash it open.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dancing Blade of Ranah",
                "attack": {
                    "Physical": "88",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "37",
                    "Magic": "28",
                    "Fire": "29",
                    "Lightning": "29",
                    "Holy": "27",
                    "Boost": "20"
                },
                "scaling": {
                    "Strength": "",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Dancing Blade of Ranah is a paired Curved Sword in Elden Ring. It is a brand new Curved Sword in the Shadow of the Erdtree DLC. The Dancing Blade of Ranah scales primarily with Dexterity and is a good Weapon for Dexterity Builds that attack rapidly. This weapon comes with the Unending Dance Skill which lets you slash repeatedly until you drain your stamina.",
                    "location": [
                        "Dropped by defeating Dancer of Ranah at the Southern Nameless Mausoleum"
                    ],
                    "fp": "2",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Unending Dance",
                            "description": "Unending Dance is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Unending Dance allows the user to perform a dance that a succession of slashing attacks in a furious dance.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Horned Warrior's Sword",
                "attack": {
                    "Physical": "108",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "20",
                    "Faith": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "It is a brand new Curved Sword in the Shadow of the Erdtree DLC. The Horned Warrior's Sword scales primarily with Strength and Dexterity and is a good Weapon for players who like paired weapons or Curved Swords but don't want to farm two. This comes with the Horn Calling skill which lets you do a ground slam with the weapon, letting multiple horns come out of the ground under an enemy.",
                    "location": [
                        "This can be obtained by eliminating the Horned Warrior in the Belurat Tower Settlement Swamp.",
                        "Drops from a Horned Warrior who wields them, located just by Ravine north Site of Grace"
                    ],
                    "fp": "17",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Horn Calling",
                            "description": "Horn Calling is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Horn Calling covers the weapon's blade with horns and then strikes the ground, making piercing horns protude below the enemy.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Scimitar",
                "attack": {
                    "Physical": "106",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "25"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Scimitar is a Curved Sword in Elden Ring. The Scimitar scales primarily with Strength and Dexterity is a good Weapon for Melee-Based Strength and Dexterity characters. Scimitars are a fantastic weapon for damage output when status is applied to them due to their swift slashing moveset. The decreased range may be an issue for some players, but it is a powerful weapon regardless, especially when given a Blood infusion.",
                    "location": [
                        "Starting Equipment for the Warrior Class",
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold"
                    ],
                    "fp": "6",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Falchion",
                "attack": {
                    "Physical": "109",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "26"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Falchion is a Curved Sword in Elden Ring. The Falchion scales primarily with Dexterity and Strength and is a good Weapon for Slashing less heavy enemies. This weapon is ideal for clearing smaller enemies in numbers but can be deemed ineffective against foes with thicker armor.  ",
                    "location": [
                        "Potential drop from falchion-wielding Demi-Humans."
                    ],
                    "fp": "6",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Shamshir",
                "attack": {
                    "Physical": "108",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "26"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "7",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Shamshir is a Curved Sword in Elden Ring. The Shamshir scales primarily with Strength and Dexterity and is a good Weapon for high dexterity characters who can excel at slashing attacks while spinning. ",
                    "location": [
                        "On a body located at the bottom of Highroad Cave, on a platform after the waterfall section, being feasted on by Giant Bats."
                    ],
                    "fp": "6",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Grossmesser",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "46",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Grossmesser is a Curved Sword in Elden Ring. The Grossmesser scales primarily with Dexterity and Strength. Its Spinning Slash skill allows the player to spin and deal Slash damage to foes in range. The skill is particularly good against groups of enemies.",
                    "location": [
                        "A possible drop from Skeletons that wield the weapon. For example, this weapon can be dropped by Skeletons in Tombsward Catacombs. The Skeletons that may drop a Grossmesser do not use a shield or a bow, and can be recognized by their rolling move."
                    ],
                    "fp": "6",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bandit's Curved Sword",
                "attack": {
                    "Physical": "118",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bandit's Curved Sword is a Curved Sword in Elden Ring. The Bandit's Curved Sword scales primarily with Strength and Dexterity and is a good Weapon for high dexterity characters who can excel at slashing attacks while spinning.",
                    "location": [
                        "Bandit's Curved Sword can be dropped by the Skeletal Bandits in Limgrave & Altus Plateau"
                    ],
                    "fp": "6",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Shotel",
                "attack": {
                    "Physical": "96",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "37",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "22"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "19"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Shotel is a Curved Sword in Elden Ring. The Shotel scales primarily with Strength and Dexterity and is a good Weapon for melee attacks and dealing damage with body spins by using the Spinning Slash skill.  ",
                    "location": [
                        "Can be purchased from the Nomadic Merchant in Siofra River"
                    ],
                    "fp": "6",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Scavenger's Curved Sword",
                "attack": {
                    "Physical": "105",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "25"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "The Scavenger's Curved Sword is a Curved Sword in Elden Ring. The Scavenger's Curved Sword scales primarily with Strength and Dexterity and is a good Weapon for melee users who want to perform short-reaching heavier hits.",
                    "location": [
                        "Found in Mt. Gelmir, on a corpse near a Grafted Scion across a stone pillar-bridge north west of the First Mt. Gelmir Campsite site of grace. The corpse closest to the ladder has the blade. "
                    ],
                    "fp": "6",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Scavenger's Curved Sword",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Mantis Blade is a Curved Sword in Elden Ring. The Mantis Blade scales primarily with Strength and Dexterity and is a good Weapon for melee combat and Physical Damage. ",
                    "location": [
                        "Dropped by Lesser Cemetery Shade in Gelmir Hero's Grave.",
                        "The shade is in the alcove at the same spot you drop down to ride the chariot. This is easily missed.",
                        "It is likely a guaranteed drop on the first kill, then it may not drop again."
                    ],
                    "fp": "6",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Beastman's Curved Sword",
                "attack": {
                    "Physical": "113",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Beastman's Curved Sword is a Curved Sword in Elden Ring. The Beastman's Curved Sword scales primarily with Strength and with its wild shape and design represents the primal nature of their wielders.",
                    "location": [
                        "7 beastmen carrying this weapon can be found near the Crumbling Beast Grave Site of Grace in Crumbling Farum Azula."
                    ],
                    "fp": "6",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Flowing Curved Sword",
                "attack": {
                    "Physical": "109",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "26"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "17"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Flowing Curved Sword is a Curved Sword in Elden Ring. The Flowing Curved Sword scales primarily with Strength and Dexterity and is a good Weapon for high dexterity characters who can excel at slashing attacks while spinning.",
                    "location": [
                        "Consecrated Snowfield: Southwest of the Inner Consecrated Snowfield site of grace two Trolls are pulling a Carriage with a chest containing the Flowing Curved Sword. The Carriage is protected at night by two Night Cavalry."
                    ],
                    "fp": "6",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Serpent-God's Curved Sword",
                "attack": {
                    "Physical": "113",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Serpent-God's Curved Sword is a Curved Sword in Elden Ring. The Serpent-God's Curved Sword scales primarily with Strength and Dexterity and is a good Weapon for leeching health builds. ",
                    "location": [
                        "Can be found at Ruin-Strewn Precipice. From the Ruin-Strewn Precipice Overlook Grace, take the elevator down and continue forward. Go down the steps, then up the ladder that leads to a roof area. The sword is behind the Land Octopus."
                    ],
                    "fp": "6",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Magma Blade",
                "attack": {
                    "Physical": "96",
                    "Magic": "0",
                    "Fire": "62",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "30",
                    "Fire": "44",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "15",
                    "Faith": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Magma Blade is a Curved Sword in Elden Ring. The Magma Blade scales primarily with Strength and Faith, with reduced scaling in Dexterity, and is a good Weapon for characters who prioritise strength and want to deal additional Fire damage while benefitting from the swift curved sword move set. ",
                    "location": [
                        "Possible drop from Man-Serpent enemies wielding the orange glowing Magma Blade at Volcano Manor."
                    ],
                    "fp": "12",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Magma Shower",
                            "description": "Magma Shower is a Skill in Elden Ring. Magma Shower is a unique skill that can be used on the Magma Blade. It allows the players to slash foes while scattering magma all around the area.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Nox Flowing Sword",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "25"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Nox Flowing Sword is a Curved Sword in Elden Ring. The Nox Flowing Sword scales primarily with Dexterity and Strength and is a good Weapon for players who want a versatile Sword, that can also behave like a Whip",
                    "location": [
                        "Sellia, Town of Sorcery: Dropped by the Nox Swordstress & Nox Priest boss duo upon defeat."
                    ],
                    "fp": "12",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Flowing Form",
                            "description": "Flowing Form is a Skill in Elden Ring. Flowing Form is a skill that allows the sword to behave like a whip.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Wing of Astel",
                "attack": {
                    "Physical": "65",
                    "Magic": "78",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "28",
                    "Magic": "52",
                    "Fire": "23",
                    "Lightning": "23",
                    "Holy": "23",
                    "Boost": "22"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "15",
                    "Intelligence": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Nox Flowing Sword is a Curved Sword in Elden Ring. The Nox Flowing Sword scales primarily with Dexterity and Strength and is a good Weapon for players who want a versatile Sword, that can also behave like a Whip",
                    "location": [
                        "Sellia, Town of Sorcery: Dropped by the Nox Swordstress & Nox Priest boss duo upon defeat."
                    ],
                    "fp": "20",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Nebula ",
                            "description": "Nebula is a Skill in Elden Ring. Nebula leaves a powerful dark cloud that explode after a short while.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Eclipse Shotel",
                "attack": {
                    "Physical": "77",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "77",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "35",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "50",
                    "Boost": "25"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "25",
                    "Faith": "30"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Eclipse Shotel is a Curved Sword in Elden Ring. The Eclipse Shotel scales primarily with Faith and Dexterity and is a good Weapon for inflicting the death ailment upon foes followed by a flare if an additional input brings down the armament. ",
                    "location": [
                        "Castle Sol: Found at the altar of the church in the southeast section of the castle."
                    ],
                    "fp": "16",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Death Flare ",
                            "description": "Death Flare is a Skill in Elden Ring. Death Flare is the unique skill of the Eclipse Shotel, which can inflict the Death Blight ailment upon foes.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "curveGreatSwords": [
            {
                "name": "Horned Warrior's Greatsword",
                "attack": {
                    "Physical": "130",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "73",
                    "Magic": "39",
                    "Fire": "39",
                    "Lightning": "39",
                    "Holy": "39",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "19",
                    "Dexterity": "16",
                    "Faith": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Horned Warrior's Greatsword is a Curved Greatsword in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Horned Warrior's Greatsword scales primarily with Strength, Dexterity and Faith and is a good Weapon for Builds that use Strength and Faith. This comes with the Horn Calling skill which lets you do a ground slam with the weapon, letting multiple horns come out of the ground under an enemy. ",
                    "location": [
                        "Guaranteed drop from the Wind-Aspected Divine Beast Warrior towards the end of Enir-Ilim."
                    ],
                    "fp": "22",
                    "weight": "13",
                    "skill": [
                        {
                            "name": "Horn Calling: Storm",
                            "description": "Horn Calling: Storm is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Horn Calling: Storm covers the weapon's blade with horns, spinning it along with powerful storm winds.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Freyja's Greatsword",
                "attack": {
                    "Physical": "146",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "75",
                    "Magic": "39",
                    "Fire": "39",
                    "Lightning": "39",
                    "Holy": "39",
                    "Boost": "48"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "25",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Freyja's Greatsword is a Curved Greatsword in Elden Ring. It is a brand new Curved Greatsword in the Shadow of the Erdtree DLC. Freyja's Greatsword scales primarily with Strength and Dexterity and is the powerful Weapon wielded by Redmane Freyja. This comes with the Spinning Slash skill which is the favorite skill of dexterous warriors that lets you slash foes as your body spins. ",
                    "location": [
                        "If you gave her Freyja's Letter, you can find Freyja's Greatsword on her body after beating her in the Leda and Allies Boss fight ",
                        "Otherwise, you can find it by the Storehouse, Seventh Floor Site of Grace after beating the Leda and Allies Boss fight"
                    ],
                    "fp": "6",
                    "weight": "14",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dismounter",
                "attack": {
                    "Physical": "138",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "19",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Dismounter is a Curved Greatsword in Elden Ring. The Dismounter scales primarily with Dexterity and Strength and is a potent Weapon for high stat players who can tolerate its weight and attack speed.",
                    "location": [
                        "Dropped by Kaiden Sellswords.",
                        "A good place to farm is the Kaiden camp southwest of the Murkwater Coast grace. There are 3 Sellswords on foot and 2 running around on horses near the front of the camp. There is a third one patrolling the road near Agheel lake North."
                    ],
                    "fp": "6",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Omen Cleaver",
                "attack": {
                    "Physical": "142",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "19",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Omen Cleaver is a Curved Greatsword in Elden Ring. The Omen Cleaver scales primarily with Strength and Dexterity and is a good Weapon for a wielder with great Strength to handle the weight of this weapon and take advantage of its Physical Damage power.",
                    "location": [
                        "Has a chance to drop from Omen enemies wielding it."
                    ],
                    "fp": "6",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Monk's Flameblade",
                "attack": {
                    "Physical": "134",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "61",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Monk's Flameblade is a Curved Greatsword in Elden Ring. The Monk's Flameblade scales primarily with Strength and Dexterity and is a good Weapon for players willing to trade weapon damage for lower weight.",
                    "location": [
                        "Dropped by Fire Monks in Mountaintops of the Giants."
                    ],
                    "fp": "6",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Beastman's Cleaver",
                "attack": {
                    "Physical": "143",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "81",
                    "Magic": "43",
                    "Fire": "43",
                    "Lightning": "43",
                    "Holy": "43",
                    "Boost": "52"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": ""
                },
                "requiredStats": {
                    "Strength": "25",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Beastman's Cleaver is a Curved Greatsword in Elden Ring. The Beastman's Cleaver scales primarily with Strength and is a good Weapon for high stat players that are capable of wielding this cleaver. Those who can handle this weapon may find this as a versatile weapon for even horseback battles.",
                    "location": [
                        "The Beastman's Cleaver has a chance to drop from any Azula Beastman carrying this weapon."
                    ],
                    "fp": "6",
                    "weight": "16.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bloodhound's Fang",
                "attack": {
                    "Physical": "141",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "17"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bloodhound's Fang is a Curved Greatsword in Elden Ring. The Bloodhound's Fang scales primarily with Strength and Dexterity and is a potent Weapon, capable of performing brutal melee attacks against enemies and immediately taking distance from them.",
                    "location": [
                        "Dropped by the Bloodhound Knight Darriwil, in Limgrave."
                    ],
                    "fp": "8",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Bloodhound's Finesse",
                            "description": "Bloodhound's Finesse is a Skill in Elden Ring. Bloodhound's Finesse is a special skill only available for the Bloodhound's Fang, and cannot be applied to other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Onyx Lord's Greatsword",
                "attack": {
                    "Physical": "118",
                    "Magic": "76",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "57",
                    "Magic": "42",
                    "Fire": "29",
                    "Lightning": "29",
                    "Holy": "29",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "17",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Onyx Lord's Greatsword is a Curved Greatsword in Elden Ring. The Onyx Lord's Greatsword scales primarily with Intelligence and Strength, with minor scaling in Dexterity. This Weapon sports a unique Magic Skill that can manipulate gravity and deal damage while allowing the user to create some distance from nearby enemies.",
                    "location": [
                        "Dropped by Onyx Lord in the Sealed Tunnel."
                    ],
                    "fp": "27",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Onyx Lord's Repulsion",
                            "description": "Onyx Lord's Repulsion is a Skill in Elden Ring. Onyx Lord's Repulsion is a Unique skill found on the Onyx Lord's Greatsword, a powerful weapon with an added Magic Damage stat to complement this skill. This not only deals damage to nearby enemies, but also allows the user to distance himself when overwhelmed with enemies by manipulating gravity.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Zamor Curved Sword",
                "attack": {
                    "Physical": "130",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "67",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Zamor Curved Sword is a Curved Greatsword in Elden Ring. The Zamor Curved Sword scales primarily with Dexterity, with reduced scaling in Strength. It is a good Weapon for building Frostbite against enemies.",
                    "location": [
                        "Giant-Conquering Hero's Grave: Dropped by the Ancient Hero of Zamor boss found at the end of the dungeon."
                    ],
                    "fp": "15",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Zamor Ice Storm",
                            "description": "Zamor Ice Storm is a Skill in Elden Ring. Zamor Ice Storm is a skill that allows the user to unleash a freezing storm.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Magma Wyrm's Scalesword",
                "attack": {
                    "Physical": "114",
                    "Magic": "0",
                    "Fire": "74",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "33",
                    "Fire": "48",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "18",
                    "Faith": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Magma Wyrm's Scalesword is a Curved Greatsword in Elden Ring. The Magma Wyrm's Scalesword scales primarily with Strength and Faith, with reduced scaling in Dexterity, and is a good Weapon for dealing additional Fire Damage during combat. This weapon's sharp-toothed edge can deal great damage to foes. Like its title suggests, it is a heavy-weight sword covered in hard scales and resembles the dragon's jaw. ",
                    "location": [
                        "Drops from Magma Wyrm Makar in Ruin-Strewn Precipice in northern Liurnia of the Lakes."
                    ],
                    "fp": "20",
                    "weight": "15",
                    "skill": [
                        {
                            "name": "Magma Guillotine",
                            "description": "Magma Guillotine is a Skill in Elden Ring. Magma Guillotine is a Damaging skill accompanied by Fire Damage and is unique to the Magma Wyrm's Scalesword.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Morgott's Cursed Sword",
                "attack": {
                    "Physical": "120",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "55",
                    "Magic": "29",
                    "Fire": "29",
                    "Lightning": "29",
                    "Holy": "29",
                    "Boost": "35"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "35",
                    "Faith": "17"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Morgott's Cursed Sword is a Curved Greatsword in Elden Ring. The Morgott's Cursed Sword scales primarily with Arcane and Dexterity, with reduced scaling in Strength, and is a good Weapon for melee combat. Its unique skill, Cursed-Blood Slice, allows players to charge forward and deliver a downward slice that causes an additional Blood Loss build up effect. ",
                    "location": [
                        "Can be purchased from Finger Reader Enia found at the Roundtable Hold with the Remembrance of the Omen King. "
                    ],
                    "fp": "20",
                    "weight": "7.5",
                    "skill": [
                        {
                            "name": "Cursed-Blood Slice",
                            "description": "Cursed-Blood Slice is a Skill in Elden Ring. Cursed-Blood Slice is a unique skill on the Morgott's Cursed Sword. It allows users to perform a charge then slice to nearby opponents and follow up with another attack.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "katanas": [
            {
                "name": "Star-Lined Sword",
                "attack": {
                    "Physical": "82",
                    "Magic": "83",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "34",
                    "Magic": "48",
                    "Fire": "24",
                    "Lightning": "24",
                    "Holy": "24",
                    "Boost": "29"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "23",
                    "Intelligence": "21"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Star-Lined Sword is a Katana in Elden Ring. It is found in the Shadow of the Erdtree DLC. The Star-Lined Sword scales primarily with Strength, Dexterity, and Intelligence and is a good Weapon for dex oriented builds. This is a weapon that causes blood loss and has a skill called Onze's Line of Stars, which lets you slash multiple times with each slash getting stronger.",
                    "location": [
                        "Dropped by Demi-Human Queen Marigga, who can be found in the Cerulean Coast starting from Cerulean Coast West Site of Grace to follow the path northeast populated with demi-humans. "
                    ],
                    "fp": "10",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Onze's Line of Stars",
                            "description": "Onze's Line of Stars is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Onze's Line of Stars imbues the blade with sorcerous energy to enhance slashing attacks damage. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sword of Night",
                "attack": {
                    "Physical": "110",
                    "Magic": "33",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "43",
                    "Magic": "35",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Sword of Night is a Katana in Elden Ring. It is a brand new Katana in the Shadow of the Erdtree DLC. The Sword of Night scales  with Dexterity and is a good Weapon for DEX Builds. This comes with the skill, Witching Hour Slash which is an unblockable slash attack that infuses the dark of night on the blade.",
                    "location": [
                        "Cathedral of Manus Metyr: After completing the whole finger questline for Count Ymir, Jolan will be dejected nearby. Give her an Iris of Occultation to get the Sword of Night "
                    ],
                    "fp": "21",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Witching Hour Slash",
                            "description": "Witching Hour Slash is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Witching Hour Slash is an unblockable slash attack that infuses the dark of night on the blade.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Uchigatana",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Uchigatana is a Katana in Elden Ring. The Uchigatana scales primarily with Strength and Dexterity and is a good Weapon for Piercing and Slash Damage in combat.  ",
                    "location": [
                        "Starting Equipment for the Samurai Class.",
                        "The Uchigatana can be found inside the Deathtouched Catacombs in Stormhill, Limgrave. Pull the lever to unlock a door in one of the earlier halls. You will find the Uchigatana on a dead body hanging over the edge of a platform."
                    ],
                    "fp": "",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Unsheathe",
                            "description": "Unsheathe is a Skill in Elden Ring. Unsheathe is a regular skill that can be found in Ashes of War and applied to Katanas. Unsheathe also uses the Keen Affinity.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Nagakiba",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Nagakiba is a Katana in Elden Ring. The Nagakiba scales primarily with Strength and Dexterity and is a good Weapon for dealing an extra blood loss effect on top of the initial Physical Damage this weapon causes.",
                    "location": [
                        "Dropped by Bloody Finger Hunter Yura to the north of Murkwater Cave or in his camp near Seaside Ruins Site of Grace."
                    ],
                    "fp": "",
                    "weight": "7",
                    "skill": [
                        {
                            "name": "Unsheathe",
                            "description": "Unsheathe is a Skill in Elden Ring. Unsheathe is a regular skill that can be found in Ashes of War and applied to Katanas. Unsheathe also uses the Keen Affinity.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Serpentbone Blade",
                "attack": {
                    "Physical": "120",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Serpentbone Blade is a Katana in Elden Ring. The Serpentbone Blade scales primarily with Dexterity and is a good Weapon for high Dexterity characters to engage in mid-range combat. It is capable of inflicting both Slash and Pierce attacks.",
                    "location": [
                        "Given as a reward for completing the second letter quest in Volcano Manor from Tanith. "
                    ],
                    "fp": "6",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Double Slash",
                            "description": "Double Slash is a Skill in Elden Ring. Double Slash is a regular skill that can be applied with Ashes of War to swords and polearms capable of slashing (colossal weapons excepted). Double Slash has Keen Affinity.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Meteoric Ore Blade",
                "attack": {
                    "Physical": "112",
                    "Magic": "72",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "50",
                    "Magic": "45",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "14",
                    "Intelligence": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Meteoric Ore Blade is a Katana in Elden Ring. The Meteoric Ore Blade scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for dealing melee Slash and Pierce damage in combat. Its accompanying unique skill can also allow the user to thrust their weapon into the ground to create a gravity well to pull in enemies and damage them in the process.",
                    "location": [
                        "Caelid Waypoint Ruins: Found inside a chest in a small room at the back of an underground hall filled with sarcophagi and Lesser Kindred of Rot (Pests) enemies. The entrance to the area is found in the northwest section of the ruins."
                    ],
                    "fp": "13",
                    "weight": "7.5",
                    "skill": [
                        {
                            "name": "Gravitas",
                            "description": "Gravitas is a Skill in Elden Ring. Gravitas is the default skill for the Meteoric Ore Blade and it can also be found in Ashes of War and applied to compatible weapons. Gravitas uses Magic Affinity and uses most melee weapons except for Whips and small weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Moonveil",
                "attack": {
                    "Physical": "73",
                    "Magic": "87",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "31",
                    "Magic": "57",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "C"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "18",
                    "Intelligence": "23"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Moonveil is a Katana in Elden Ring. The Moonveil scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for dealing melee Slash and Pierce Damage in Combat. Its accompanying unique skill can also allow the user to draw the weapon at great speed for an instant slash attack and fires off a wave of light.",
                    "location": [
                        "Obtained upon defeating the Magma Wyrm located in Gael Tunnel - Caelid."
                    ],
                    "fp": "",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Transient Moonlight",
                            "description": "Transient Moonlight is the unique Skill found on Moonveil, a Katana in Elden Ring. This skill allows the wielder of the Katana to assume a sheathed Iaido-style stance which is then followed up by two unique slashing attacks. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rivers of Blood",
                "attack": {
                    "Physical": "76",
                    "Magic": "0",
                    "Fire": "76",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "26",
                    "Fire": "52",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "18",
                    "Intelligence": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Rivers of Blood is a Katana in Elden Ring. The Rivers of Blood scales primarily with Strength, Dexterity, and Arcane and is a good Weapon for mid-range combat and it is capable of inflicting both Slash and Pierce attacks.",
                    "location": [
                        "Dropped by Bloody Finger Okina ",
                        "Okina invades near the Church of Repose, found in the Eastern region of Mountaintops of the Giants."
                    ],
                    "fp": "17",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Corpse Piler",
                            "description": "Corpse Piler is a Skill in Elden Ring. Corpse Piler is a special skill that is only available for the Rivers of Blood, and cannot be applied to other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dragonscale Blade",
                "attack": {
                    "Physical": "110",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "35",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "50",
                    "Holy": "25",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Dragonscale Blade is a Katana in Elden Ring. The Dragonscale Blade scales primarily with Dexterity, with reduced scaling in Strength, and is a good Weapon for dealing Slash and Pierce damage against Lightning-susceptible enemies.",
                    "location": [
                        "Drops from Dragonkin Soldier in the Lake of Rot."
                    ],
                    "fp": "25",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Ice Lightning Sword",
                            "description": "Ice Lightning Sword is a Skill in Elden Ring. Ice Lightning Sword calls down a bolt of ice lightning that damages an enemy. It also leaves the blade with extra lightning damage and frostbite buildup for the next 45 seconds.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Hand of Malenia",
                "attack": {
                    "Physical": "117",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "48"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Hand of Malenia is a Katana in Elden Ring. The Hand of Malenia scales primarily with Strength and Dexterity and is a good Weapon for Samurai Build and Bleed Builds.  ",
                    "location": [
                        "Can be drawn by Enia out of the Remembrance of the Rot Goddess at the Roundtable Hold, obtained after killing Malenia, Blade of Miquella."
                    ],
                    "fp": "12",
                    "weight": "7",
                    "skill": [
                        {
                            "name": "Waterfowl Dance",
                            "description": "Waterfowl Dance is a Skill in Elden Ring. Waterfowl Dance is a Unique skill that is only available for the Hand of Malenia, and cannot be added to any other weapon by Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "twinBlades": [
            {
                "name": "Black Steel Twinblade",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "15",
                    "Faith": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Black Steel Twinblade is a Twinblade in Elden Ring. It is a brand new Twinblade in the Shadow of the Erdtree DLC. The Black Steel Twinblade scales primarily with Strength and Dexterity and is a good Weapon for builds that want to maintain Faith Scaling despite changing its infusion. This weapon does Physical and Holy damage and comes with the Spinning Slash skill.",
                    "location": [
                        "Drops from the Black Knight located at the top of western camp in Scadu Altus (Northeast of Church of the Crusade)"
                    ],
                    "fp": "6",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Euporia",
                "attack": {
                    "Physical": "84",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "100",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "32",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "59",
                    "Boost": "32"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "16",
                    "Faith": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Euporia is a Twinblade in Elden Ring. It is a brand new Twinblade in the Shadow of the Erdtree DLC. The Euporia scales primarily with Strength, Dexterity and Faith and is a good Weapon for Faith players looking for a twinblade. One of its unique features is its ability to powerup the weapon skill when attacking enemies.",
                    "location": [
                        "Belurat Tower Settlement "
                    ],
                    "fp": "28",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Euporia Vortex",
                            "description": "Euporia Vortex is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Euporia Vortex is a skill that depends on the amount of luster restored to the blades. If much of it has been restored, this skill deals more damage.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Twinblade",
                "attack": {
                    "Physical": "119",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Twinblade is the basic Twinblade weapon in Elden Ring. The Twinblade scales primarily with Strength and Dexterity is a good Weapon for melee users who want to perform fast slashes that spin in a larger area of effect.",
                    "location": [
                        "Is inside a chest, in the underground cellar, surrounded by four intact walls, just entering Dragon-Burnt Ruins. (Not the one with the rats. The one whose entrance is in the southeast building, which you can get inside using Torrent.)"
                    ],
                    "fp": "6",
                    "weight": "7",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Twinned Knight Swords",
                "attack": {
                    "Physical": "122",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Twinned Knight Swords is a Twinblade in Elden Ring. The Twinned Knight Swords scales primarily with Strength and Dexterity and is a good Weapon for dual-handed spinning attacks. ",
                    "location": [
                        "In a burning corpse pile in front of East Windmill Pasture in Altus Plateau. "
                    ],
                    "fp": "6",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Godskin Peeler",
                "attack": {
                    "Physical": "121",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "17",
                    "Dexterity": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Godskin Peeler is a Twinblade in Elden Ring. The Godskin Peeler scales primarily with Strength and Dexterity and is a good Weapon for melee users but requires a high dexterity character. ",
                    "location": [
                        "Dropped by Godskin Apostle at Windmill Village, Altus Plateau."
                    ],
                    "fp": "30",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Black Flame Tornado",
                            "description": "Black Flame Tornado is a Skill in Elden Ring. Black Flame Tornado is a regular skill that can be used by equipping the Godskin Peeler twinblade weapon. It can also be applied to weapons using the Ash of War: Black Flame Tornado. Black Flame Tornado has Flame Art Affinity and is Usable on polearms and twinblades.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gargoyle's Twinblade",
                "attack": {
                    "Physical": "123",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "32",
                    "Fire": "32",
                    "Lightning": "32",
                    "Holy": "32",
                    "Boost": "32"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Gargoyle's Twinblade is a Twinblade in Elden Ring. The Gargoyle's Twinblade scales primarily with Strength and Dexterity and is a good Weapon for dealing melee damage with an extra reach. Users are able to deal piercing and standard damage that is complemented with Spinning Slash where the wielder of the weapon can perform a body spin that slashes foes within range.",
                    "location": [
                        "Dropped by Valiant Gargoyle (Twinblade) when both bosses are defeated. "
                    ],
                    "fp": "6",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gargoyle's Black Blades",
                "attack": {
                    "Physical": "81",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "97",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "32",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "59",
                    "Boost": "32"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "F"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "15",
                    "Faith": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Gargoyle's Black Blades is a Twinblade in Elden Ring. The Gargoyle's Black Blades scales primarily with Strength, Dexterity, and Faith and is a good Weapon for inflicting holy damage.",
                    "location": [
                        "Dropped by Black Blade Kindred at the Forbidden Lands just before Mountaintops of the Giants. "
                    ],
                    "fp": "6",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Spinning Slash",
                            "description": "Spinning Slash is a Skill in Elden Ring. Spinning Slash is a regular skill that can be found in Ashes of War and applied to compatible weapons. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Eleonora's Poleblade",
                "attack": {
                    "Physical": "72",
                    "Magic": "0",
                    "Fire": "72",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "33",
                    "Magic": "23",
                    "Fire": "47",
                    "Lightning": "23",
                    "Holy": "23",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "21",
                    "Faith": "19"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Eleonora's Poleblade is a Twinblade in Elden Ring. The Eleonora's Poleblade scales primarily with Dexterity, and Arcane, and secondarily with Strength. The Weapon causes blood loss buildup, and has physical and fire damage. ",
                    "location": [
                        "Obtained by defeating Eleonora, Violet Bloody Finger, at the Second Church of Marika. "
                    ],
                    "fp": "11",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Bloodblade Dance",
                            "description": "Bloodblade Dance is a Skill in Elden Ring. Bloodblade Dance is a unique skill that can be used on Eleonora's Poleblade. It allows the player to perform a flurry of tornado-like attacks while leaping into the air. Following up with an attack will perform an attack that ends in an evasive maneuver, perfect for getting that last hit before the enemy strikes again.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "Axes": [
            {
                "name": "Forked-Tongue Hatchet",
                "attack": {
                    "Physical": "125",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Forked-Tongue Hatchet is an Axe in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Forked-Tongue Hatchet scales primarily with Strength and Dexterity.",
                    "location": [
                        "Dropped by Imps in Shadow of The Erdtree's Catacombs."
                    ],
                    "fp": "14",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Dragonform Flame",
                            "description": "Dragonform Flame is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Dragonform Flame spews lingering fire from the hatchet in front of the user.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Smithscript Axe",
                "attack": {
                    "Physical": "131",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "32",
                    "Fire": "32",
                    "Lightning": "32",
                    "Holy": "32",
                    "Boost": "32"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "10",
                    "Intelligence": "11",
                    "Faith": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Smithscript Axe is an Axe in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Smithscript Axe scales primarily with Strength, Dexterity, Intelligence and Faith and is a good Weapon for players that want a ranged melee alternative without a FP cost. As a Smithscript weapon, it can be thrown and immediately returns to the user's hand.",
                    "location": [
                        "Taylew's Ruined Forge: From the initial site of grace, continue following the path, get past the enemy, and take the ladder down then jump across the other platforms and turn left. You will find a Golem there. Behind it, at the back of the room, you will find the Smithscript Axe."
                    ],
                    "fp": "2",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Messmer Soldier's Axe",
                "attack": {
                    "Physical": "133",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Messmer Soldier's Axe is an Axe in Elden Ring. It is a brand new Axe in the Shadow of the Erdtree DLC. The Messmer Soldier's Axe scales primarily with Strength and Dexterity and is a good Weapon for Builds that like to use Charged Heavy Attacks. It's weapon skill, War Cry, lets you increase attack power and lets you charge the enemy with heavy attacks.",
                    "location": [
                        "Has a 2% chance to be dropped by the Messmer Soldiers that wield it."
                    ],
                    "fp": "16",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Death Knight's Twin Axes",
                "attack": {
                    "Physical": "101",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "65",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "44",
                    "Holy": "30",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "12",
                    "Faith": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Death Knight's Twin Axes is an Axe in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Death Knight's Twin Axes scales primarily with Strength, Dexterity and Faith and is a good Weapon for faith builds. This comes with the Blinkbolt: Twinaxe skill, which transforms you into a bolt of lightning.",
                    "location": [
                        "Fog Rift Catacombs: The weapon is obtained as a reward for defeating the Death Knight boss. "
                    ],
                    "fp": "8",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Blinkbolt: Twinaxe",
                            "description": "Blinkbolt: Twinaxe is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Blinkbolt: Twinaxe allows the user to transform in a rapid bolt of lightning that charges ahead unstoppable.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Hand Axe",
                "attack": {
                    "Physical": "117",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Hand Axe is an Axe in Elden Ring. The Hand Axe scales primarily with Strength and Dexterity, and is a good Weapon for close combat characters, exceling in successive attacks. ",
                    "location": [
                        "Can be bought from the Nomadic Merchant in East Limgrave"
                    ],
                    "fp": "3",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Quickstep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Forked Hatchet",
                "attack": {
                    "Physical": "113",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Forked Hatchet is an Axe in Elden Ring. The Forked Hatchet scales primarily with Dexterity and Strength and is a good Weapon for causing bloodloss and using the paired skill to reposition for a higher chance at a hit. ",
                    "location": [
                        "Dropped by Imps using this weapon."
                    ],
                    "fp": "3",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Quickstep",
                            "description": "Quickstep is a Skill in Elden Ring. Quickstep is an action skill that allows players to reposition themselves in combat to avoid incoming damage and gain a better position to attack the targeted enemy. Quickstep uses Keen Affinity and is usable all melee arnaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Battle Axe",
                "attack": {
                    "Physical": "128",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Battle Axe is an Axe in Elden Ring. The Battle Axe scales primarily with Strength and Dexterity is a good Weapon for melee users who want to deal considerable damage with each swing.",
                    "location": [
                        "Starting Equipment for the Hero Class",
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold"
                    ],
                    "fp": "1",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Warped Axe",
                "attack": {
                    "Physical": "124",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "56",
                    "Magic": "37",
                    "Fire": "37",
                    "Lightning": "37",
                    "Holy": "37",
                    "Boost": "43"
                },
                "scaling": {
                    "Strength": "C"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Warped Axe is an Axe in Elden Ring. The Warped Axe scales primarily with Strength and is a good Weapon for melee users who want to deal considerable damage with each swing. ",
                    "location": [
                        "Has a chance to drop from Omens  wielding this weapon.",
                        "Can drop from the Omen in the Cliffbottom Catacombs."
                    ],
                    "fp": "16",
                    "weight": "7.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Jawbone Axe",
                "attack": {
                    "Physical": "130",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "36"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Jawbone Axe is an Axe in Elden Ring. The Jawbone Axe scales primarily with Strength and Dexterity, and is a good Weapon for for aggressive characters who like to face enemies head on. This weapon allows players to take swing after swing especially with the Skill, Wild Strikes. ",
                    "location": [
                        "Can be dropped by Ancestral Follower.",
                        "here are 8  Ancestral Follower with Jawbone Axe just north then east of the Mausoleum Compound site of grace"
                    ],
                    "fp": "1",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range. Updated to Patch 1.07. Wild Strikes has heavy affinity and it uses axes, hammers, curved swords and greatswords. Excluding Colossal Weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Iron Cleaver",
                "attack": {
                    "Physical": "125",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "51",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "34"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "7"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Iron Cleaver is a Axe in Elden Ring. The Iron Cleaver scales primarily with Dexterity and Strength and is a good Weapon for aggressive fighters who like to face foes head on. This weapon allows players to take swing after swing especially with the Skill, Wild Strikes. ",
                    "location": [
                        "Castle Morne. Dropped by the Misbegotten creatures using this weapon."
                    ],
                    "fp": "1",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range. Updated to Patch 1.07. Wild Strikes has heavy affinity and it uses axes, hammers, curved swords and greatswords. Excluding Colossal Weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Highland Axe",
                "attack": {
                    "Physical": "128",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Highland Axe is a Axe in Elden Ring. The Highland Axe scales primarily with Strength and Dexterity and is a fine Weapon for combat when an attack boost is needed. The skill that accompanies this weapon can temporarily increase attack power and modify its charging attacks. ",
                    "location": [
                        "Location: Stormveil Castle."
                    ],
                    "fp": "16",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Celebrant's Cleaver",
                "attack": {
                    "Physical": "125",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Celebrant's Cleaver is a Axe in Elden Ring. The Celebrant's Cleaver scales primarily with Strength and Dexterity and is a good Weapon for those users with high Strength and Dexterity stats. ",
                    "location": [
                        "Possible drop from celebrating enemies that wield it, in Dominula, Windmill village."
                    ],
                    "fp": "2",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range. Updated to Patch 1.07. Wild Strikes has heavy affinity and it uses axes, hammers, curved swords and greatswords. Excluding Colossal Weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Sacrificial Axe",
                "attack": {
                    "Physical": "133",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Sacrificial Axe is an Axe in Elden Ring. The Sacrificial Axe scales primarily with Strength and Dexterity, and is a good Weapon for for aggressive characters who like to face enemies head on. This weapon allows players to take swing after swing especially with the Skill, Wild Strikes. ",
                    "location": [
                        "Weeping Peninsula (Nighttime only): Dropped by Deathbird that spawns north from Castle Morne."
                    ],
                    "fp": "2",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range. Updated to Patch 1.07. Wild Strikes has heavy affinity and it uses axes, hammers, curved swords and greatswords. Excluding Colossal Weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Icerind Hatchet",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Icerind Hatchet is an Axe in Elden Ring. The Icerind Hatchet scales primarily with Dexterity, with reduced scaling in Strength, and is a good Weapon for inflicting Frost against enemies both in single target and AoE scenarios.",
                    "location": [
                        "Can be found at Temple Quarter, southeast of the Site of Grace, in a chest located inside the ruined bell tower, adjacent to a ring of flowers."
                    ],
                    "fp": "10",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Hoarfrost Stomp",
                            "description": "Hoarfrost Stomp is a Skill in Elden Ring. Hoarfrost Stomp is a regular skill that can be found in Ashes of War that can be used on all melee armaments. Hoarfrost Stomp has Cold Affinity and uses all melee armaments.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ripple Blade",
                "attack": {
                    "Physical": "75",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Arcane": "A"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "11",
                    "Arcane": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Ripple Blade is a Axe in Elden Ring. The Ripple Blade scales primarily with Arcane and is a good Weapon for those users with high Arcane stat, as the Ripple Blade's damage increases with players' Arcane attribute. ",
                    "location": [
                        "Sold by Pidia, Carian Servant at Caria Manor: on a balcony above the Manor Lower Level site of grace. Only accessible by dropping down the cliffs from the southwestern side of the Three Sisters sub-area."
                    ],
                    "fp": "2",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range. Updated to Patch 1.07. Wild Strikes has heavy affinity and it uses axes, hammers, curved swords and greatswords. Excluding Colossal Weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Stormhawk Axe",
                "attack": {
                    "Physical": "136",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "19",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Stormhawk Axe is a Axe in Elden Ring. The Stormhawk Axe scales primarily with Strength and Dexterity and is a good weapon for users who want to engage enemies in close combat with slashing attacks, with the addition of lightning damage.",
                    "location": [
                        " "
                    ],
                    "fp": "19",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Thunderstorm",
                            "description": "Thunderstorm is a Skill in Elden Ring. Thunderstorm is a special skill that is only available for the Stormhawk Axe, and cannot be applied to other weapons via Ashes of War.This ability generates a storm of lightning while the weapon remains with Lightning Damage for a short period of time.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rosus' Axe",
                "attack": {
                    "Physical": "112",
                    "Magic": "72",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "44",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "10",
                    "Intelligence": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Stormhawk Axe is a Axe in Elden Ring. The Stormhawk Axe scales primarily with Strength and Dexterity and is a good weapon for users who want to engage enemies in close combat with slashing attacks, with the addition of lightning damage.",
                    "location": [
                        "Located behind a Stonesword Key door in Black Knife Catacombs."
                    ],
                    "fp": "15",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Rosus's Summons",
                            "description": "Rosus's Summons is a Skill in Elden Ring. Rosus's Summons is a Unique skill found on the Rosus' Axe. Raise the axe aloft to summon those lost in death. Three skeletons will appear at a distance and attack in tandem before vanishing",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "greatAxes": [
            {
                "name": "Putrescence Cleaver",
                "attack": {
                    "Physical": "141",
                    "Magic": "42",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "44",
                    "Fire": "38",
                    "Lightning": "38",
                    "Holy": "38",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "28",
                    "Dexterity": "10",
                    "Intelligence": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Putrescence Cleaver is a Greataxe in Elden Ring. It is a brand new Greataxe in the Shadow of the Erdtree DLC. The Putrescence Cleaver scales primarily with Strength, Dexterity and Arcane and is a good Weapon for inflicting Frostbite. This weapon causes frost to build up which gains power from you arcane stat. It also comes with the Spinning Guillotine skill that lets you ground slam the blade, followed up by spinning slashes.",
                    "location": [
                        "Trade Remembrance of Putrescence with Enia at the Roundtable Hold to receive this item."
                    ],
                    "fp": "12",
                    "weight": "13.5",
                    "skill": [
                        {
                            "name": "Spinning Guillotine",
                            "description": "Spinning Guillotine is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Spinning Guillotine performs a powerful overhead attack, that can be followed-up by additional ones for as long as stamina allows.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Death Knight's Longhaft Axe",
                "attack": {
                    "Physical": "113",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "73",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "61",
                    "Magic": "32",
                    "Fire": "32",
                    "Lightning": "46",
                    "Holy": "32",
                    "Boost": "43"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "23",
                    "Dexterity": "10",
                    "Intelligence": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Death Knight's Longhaft Axe is a Greataxe in Elden Ring. It is a brand new Greataxe in the Shadow of the Erdtree DLC. The Death Knight's Longhaft Axe scales primarily with Strength, Dexterity and Faith and is a good Weapon for faith players looking for a great axe. This weapon deals both physical and lightning damage and comes with the Blinkbolt: Long-hafted Axe skill that transforms you into a bolt of lightning that rushes down to enemies and follows up with a heavy attack.",
                    "location": [
                        "The weapon is obtained as a reward for defeating the Death Knight boss located at the Scorpion River Catacombs."
                    ],
                    "fp": "8",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Blinkbolt: Long-hafted Axe",
                            "description": "Blinkbolt: Long-hafted Axe is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Blinkbolt: Long-hafted Axe transforms the body of the user into a furious bolt of lightning that charges straight ahead.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bonny Butchering Knife",
                "attack": {
                    "Physical": "134",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "58",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "37"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bonny Butchering Knife is a Greataxe in Elden Ring. It is a brand new Greataxe in the Shadow of the Erdtree DLC. The Bonny Butchering Knife scales primarily with Strength and Dexterity and is a good Weapon for players looking for a weapon that can restore a small amount of HP when dealing damage. ",
                    "location": [
                        "Bonny Butchering Knife is a Greataxe in Elden Ring. It is a brand new Greataxe in the Shadow of the Erdtree DLC. The Bonny Butchering Knife scales primarily with Strength and Dexterity and is a good Weapon for players looking for a weapon that can restore a small amount of HP when dealing damage. "
                    ],
                    "fp": "16",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Hone Blade",
                            "description": "Hone Blade is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Hone Blade allows the blade to increase the amount of HP the weapon recovers and slightly increase its damage as well.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greataxe",
                "attack": {
                    "Physical": "151",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "69",
                    "Magic": "37",
                    "Fire": "37",
                    "Lightning": "37",
                    "Holy": "37",
                    "Boost": "45"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "30",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Greataxe is the standard Greataxe in Elden Ring. The Greataxe scales primarily with Strength and is a good Weapon for heavy hitting strength focused builds who want to deal devastating knockdown damage. ",
                    "location": [
                        "Inside the chest in the Carriage pulled by two Trolls and followed by a caravan of Wandering Nobles in Limgrave, west of Waypoint Ruins. "
                    ],
                    "fp": "16",
                    "weight": "13",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Crescent Moon Axe",
                "attack": {
                    "Physical": "147",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "25",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Crescent Moon Axe is a Greataxe in Elden Ring. The Crescent Moon Axe scales primarily with Strength and Dexterity. ",
                    "location": [
                        "Users can get it in Stormveil Castle as drop from axe-wielding Exile Soldiers. "
                    ],
                    "fp": "16",
                    "weight": "12.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Longhaft Axe",
                "attack": {
                    "Physical": "146",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "60",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Longhaft Axe is a Greataxe in Elden Ring. The Longhaft Axe scales primarily with Strength and is a good Weapon for players who want to wield a long axe. ",
                    "location": [
                        "Rare drop from Misbegotten wielding it."
                    ],
                    "fp": "16",
                    "weight": "12.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Executioner's Greataxe",
                "attack": {
                    "Physical": "150",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "74",
                    "Magic": "40",
                    "Fire": "40",
                    "Lightning": "40",
                    "Holy": "40",
                    "Boost": "48"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Executioner's Greataxe is a Greataxe in Elden Ring. The Executioner's Greataxe scales primarily with Strength and Dexterity. Its Skill, War Cry, grants the user the ability to temporarily increase attack power.  While active, strong attacks change to charging attacks.  ",
                    "location": [
                        "Can be dropped by Skeletons using this weapon."
                    ],
                    "fp": "16",
                    "weight": "15",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Great Omenkiller Cleaver",
                "attack": {
                    "Physical": "142",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "115"
                },
                "guard": {
                    "Physical": "63",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "45",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "23",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Great Omenkiller Cleaver is a Greataxe in Elden Ring. The Great Omenkiller Cleaver scales with Strength and Dexterity, and is a good Weapon for a quality build. It is the only weapon in it's class with inate blood loss buildup, which can further benefit from Affinities that add Arcane scaling.    ",
                    "location": [
                        "CDropped by Omenkiller at Volcano Manor.",
                        "Dropped by Omenkiller boss at Perfumer's Grotto"
                    ],
                    "fp": "2 (per swing)",
                    "weight": "11",
                    "skill": [
                        {
                            "name": "Wild Strikes",
                            "description": "Wild Strikes is a Skill in Elden Ring. Wild Strikes is a damaging skill which temporarily allows wild swinging, affecting foes within range. Updated to Patch 1.07. Wild Strikes has heavy affinity and it uses axes, hammers, curved swords and greatswords. Excluding Colossal Weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rusted Anchor",
                "attack": {
                    "Physical": "147",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "26",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Rusted Anchor is a Greataxe in Elden Ring. The Rusted Anchor scales primarily with Strength and Dexterity and is a good Weapon for dealing great damage, but also requires great strength to wield. Its accompanying skill, Barbaric Roar, also allows the user to gain an increase in attack power.",
                    "location": [
                        "Drops from the Scaly Misbegotten boss in Morne Tunnel."
                    ],
                    "fp": "16",
                    "weight": "12.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Butchering Knife",
                "attack": {
                    "Physical": "134",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "58",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "37"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Butchering Knife is a Greataxe in Elden Ring. The Butchering Knife scales primarily with Strength and Dexterity and is a good Weapon for characters with high Dexterity builds. Its skill allows users to increase their attack power and execute strong combo attacks.",
                    "location": [
                        "Dropped by Anastasia, Tarnished-Eater."
                    ],
                    "fp": "16",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gargoyle's Great Axe",
                "attack": {
                    "Physical": "123",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "58",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "37"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Gargoyle's Great Axe is a Greataxe in Elden Ring. The Gargoyle's Great Axe scales well with Strength and decent with Dexterity, and has the weapon skill War Cry to further increase the damage output. It is a good Weapon for players who have the Strength to wield it. ",
                    "location": [
                        "Killing the Valiant Gargoyle in the Capital Outskirts, Altus Plateau. From the Outer Wall Phantom Tree site of grace, go northeast along the slope/long stairs up until it spawns."
                    ],
                    "fp": "16",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gargoyle's Black Axe",
                "attack": {
                    "Physical": "100",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "120",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "54",
                    "Boost": "37"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "8",
                    "Faith": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Gargoyle's Black Axe is a Greataxe in Elden Ring. The Gargoyle's Black Axe scales primarily with Strength, Dexterity, and Faith and is a good Weapon for heavy attacks that deal holy damage. ",
                    "location": [
                        "Dropped by Black Blade Kindred at the Mountaintops of the Giants."
                    ],
                    "fp": "16",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "War Cry",
                            "description": "War Cry is a Skill in Elden Ring. War Cry is a temporary attack boost to give players an extra advantage during combat. War Cry uses the Heavy Affinity and is compatible with all melee armaments except daggers, thrusting swords, and whips. It grants similar heavy attacks to Braggart's Roar and is a roar buff like Barbaric Roar. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Winged Greathorn",
                "attack": {
                    "Physical": "130",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "30",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Winged Greathorn is a Greataxe in Elden Ring. The Winged Greathorn scales primarily with Strength and Dexterity and is a good Weapon for inflicting Damage upon foes and temporarily reduce their defense. Its unique Skill, Soul Stifler grants the user the ability to raise the greathorn's wings to summon a soul-sapping miasma. ",
                    "location": [
                        "Obtained when unlocking the Remembrance of the Regal Ancestor's power by handing it over to Enia at Roundtable Hold."
                    ],
                    "fp": "12",
                    "weight": "11",
                    "skill": [
                        {
                            "name": "Soul Stifler",
                            "description": "Soul Stifler is a Skill in Elden Ring. Soul Stifler is a unique skill on the Winged Greathorn that can temporarily increase the damage against enemies within its area of effect.  ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Axe of Godrick",
                "attack": {
                    "Physical": "142",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Axe of Godrick is a Greataxe in Elden Ring. The Axe of Godrick scales primarily with Strength and Dexterity, and is a good Weapon for melee characters that prefer slow, but powerful attacks.  ",
                    "location": [
                        "Trade Remembrance of the Grafted with Enia at Roundtable Hold."
                    ],
                    "fp": "15",
                    "weight": "11",
                    "skill": [
                        {
                            "name": "I Command Thee, Kneel!",
                            "description": "I Command Thee, Kneel! is a Skill in Elden Ring. I Command Thee, Kneel! is an exclusive Skill to the Axe of Godrick that causes shockwaves on the ground.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "hammers ": [
            {
                "name": "Flowerstone Gavel",
                "attack": {
                    "Physical": "121",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "8",
                    "Intelligence": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Flowerstone Gavel is a Hammer in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Flowerstone Gavel scales primarily with Strength, Dexterity and Arcane and can be obtained from completing the Dragon Communion Priestess questline. ",
                    "location": [
                        "The Dragon Communion Priestess drops this item at the Grand Altar of Dragon Communion after defeating Bayle The Dread and not giving her Thiollier's Concoction beforehand"
                    ],
                    "fp": "18",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Flower Dragonbolt",
                            "description": "Flower Dragonbolt is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Flower Dragonbolt calls down the powerful red lightning employed by ancient dragons to strike a target, dealing Lightning Damage and temporarily reducing its lightning damage negation.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Club",
                "attack": {
                    "Physical": "103",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "41",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "C"
                },
                "requiredStats": {
                    "Strength": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Club is a Hammer in Elden Ring. The Club scales with Strength and is a good Weapon for melee users who don't invest many points into Strength. Club is a very basic bludgeoning type of weapon. It's only recommended to use for beginners when they must defeat an enemy that is weak against Strike Damage",
                    "location": [
                        "Default starting equipment for the Wretch ",
                        "Can be bought from the Nomadic Merchant"
                    ],
                    "fp": "16",
                    "weight": "3.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Curved Club",
                "attack": {
                    "Physical": "114",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "7"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Curved Club is a Hammer in Elden Ring. The Curved Club scales primarily with Strength and Dexterity and is a Weapon wielded by some Albinaurics. ",
                    "location": [
                        "This weapon can be looted from the club and shield Albinaurics found at Academy Gate Town grace."
                    ],
                    "fp": "16",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Spiked Club",
                "attack": {
                    "Physical": "114",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "7"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Spiked Club is a Hammer in Elden Ring. The Spiked Club scales primarily with Strength and Dexterity and is a good Weapon for melee ranged combat. This weapon comes with an addition blood loss effect and a Skill to add to its basic stats to allow players to gain a temporary attack power stat boost,",
                    "location": [
                        "Drops from large Demi-Humans that wield it",
                        "Can be farmed from the large Demi-Human right outside the entrance of Volcano Cave.",
                        "Also drops from the large Demi-Human just below the ledge at the beginning of Coastal Cave."
                    ],
                    "fp": "16",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Stone Club",
                "attack": {
                    "Physical": "122",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "52",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "36"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Stone Club is a Hammer in Elden Ring. The Stone Club scales primarily with Strength and Dexterity and is a good Weapon for strength build characters. ",
                    "location": [
                        "Chance of being dropped by the Battlemages",
                        "One in the graveyard in front of Sellia Hideaway.",
                        "One before the Fog wall in Academy Crystal Cave."
                    ],
                    "fp": "",
                    "weight": "7",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Mace",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "45",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "7"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Stone Club is a Hammer in Elden Ring. The Stone Club scales primarily with Strength and Dexterity and is a good Weapon for strength build characters. ",
                    "location": [
                        "Chance of being dropped by the Battlemages",
                        "One in the graveyard in front of Sellia Hideaway.",
                        "One before the Fog wall in Academy Crystal Cave."
                    ],
                    "fp": "",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Morning Star",
                "attack": {
                    "Physical": "118",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "47",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "31",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Morning Star is a Hammer in Elden Ring. The Morning Star scales primarily with Strength and Dexterity and is a good Weapon for bludgeoning enemies and dealing high damage and blood loss effects. ",
                    "location": [
                        "Weeping Peninsula: Found in a chest inside a broken Carriage just a bit south of the bridge from Limgrave."
                    ],
                    "fp": "",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Warpick",
                "attack": {
                    "Physical": "108",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "27",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "11",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Morning Star is a Hammer in Elden Ring. The Morning Star scales primarily with Strength and Dexterity and is a good Weapon for bludgeoning enemies and dealing high damage and blood loss effects. ",
                    "location": [
                        "Warpick is a Hammer in Elden Ring. The Warpick scales primarily with Dexterity and Strength and is a good Weapon for breaking an enemy's guard or stance to open up another opportunity to attack."
                    ],
                    "fp": "",
                    "weight": "2.5",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Hammer",
                "attack": {
                    "Physical": "124",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "51",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "36"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "7"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Hammer is a Hammer in Elden Ring. The Hammer scales primarily with Strength and Dexterity. It is a good Weapon for dealing strike damag",
                    "location": [
                        "Found in Leyndell, Royal Capital, in the Fortified Manor. Beside the Sanctified Whetblade. "
                    ],
                    "fp": "",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Monk's Flamemace",
                "attack": {
                    "Physical": "126",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Monk's Flamemace is a Hammer in Elden Ring. The Monk's Flamemace scales primarily with Strength and Dexterity and is a good Weapon for pushing enemies back using this weapons skill, Kick.  Kick enemies back and break their stance with the Skill attached to this weapon.",
                    "location": [
                        "Drops from Monk enemies wielding it in Liurnia of the Lakes and Mountaintops of the Giants."
                    ],
                    "fp": "",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Kick",
                            "description": "Kick is a Skill in Elden Ring. Kick is a skill that can be equipped with a weapon and can push back enemies during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Varré's Bouquet",
                "attack": {
                    "Physical": "46",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "25"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Arcane": "C"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "16",
                    "Arcane": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Varré's Bouquet is a Hammer in Elden Ring. The Varré's Bouquet scales primarily with Strength, Dexterity and Arcane and is a good Weapon for blood loss buildup. ",
                    "location": [
                        "Found at the Mohgwyn Dynasty Mausoleum, right before the Dynasty Mausoleum Midpoint site of grace. It is received from White Mask Varré after invading him and depleting his dialogue."
                    ],
                    "fp": "14",
                    "weight": "2",
                    "skill": [
                        {
                            "name": "Blood Tax",
                            "description": "Blood Tax is a Skill in Elden Ring. Blood Tax is a regular skill that can be found in Ashes of War, this can be used on armaments capable of thrusting",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Envoy's Horn",
                "attack": {
                    "Physical": "96",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "62",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "38",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "12",
                    "Faith": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Envoy's Horn is a Hammer in Elden Ring. The Envoy's Horn scales primarily with Faith, Dexterity, and Strength.",
                    "location": [
                        "Can be farmed in Leyndell, Royal Capital. They are easily found in the East Capital Rampart area upon first entering the city."
                    ],
                    "fp": "6",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Oracular Bubble",
                            "description": "Oracular Bubble is a Skill in Elden Ring. Oracular Bubble is a skill unique to the Envoy's Horn that allows the player to release magic bubbles from blowing on the horn.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Nox Flowing Hammer",
                "attack": {
                    "Physical": "122",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "51",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "34"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "17",
                    "Dexterity": "7"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Nox Flowing Hammer is a Hammer in Elden Ring. The Nox Flowing Hammer scales primarily with Strength and Dexterity and is a good Weapon for breaking through guards and stances. This weapon is ideal for delivering powerful strikes against enemies with a strong guard.",
                    "location": [
                        "From the Night Sacred Ground Site of Grace in Nokron"
                    ],
                    "fp": "16",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Flowing Form (Nox Flowing Hammer)",
                            "description": "Flowing Form is a Skill in Elden Ring. Flowing Form is a skill that allows the hammer to behave like a whip.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ringed Finger",
                "attack": {
                    "Physical": "121",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "38",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "9"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Ringed Finger is a Hammer in Elden Ring. The Ringed Finger scales primarily with Strength and Dexterity and is a good Weapon for breaking through guards and stances. This weapon is ideal for delivering powerful strikes against enemies with a strong guard.",
                    "location": [
                        "Gelmir Hero's Grave: From the first Chariot hallway, head all the way down, as the path ends you will need to continue down across the lava and turn left at the end of the path to find a room with a chest containing the weapon."
                    ],
                    "fp": "14",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Claw Flick",
                            "description": "Claw Flick is a Skill in Elden Ring. Claw Flick is a unique skill that can be used on the Ringed Finger. It allows the player to cause the weapon's finger to swell then flick enemies away.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Scepter of the All-Knowing",
                "attack": {
                    "Physical": "99",
                    "Magic": "64",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "36",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "35",
                    "Boost": "27"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "18",
                    "Intelligence": "21"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Scepter of the All-Knowing is a Hammer in Elden Ring. The Scepter of the All-Knowing scales primarily with Strength, Dexterity, Intelligence and is a good Weapon for heavy attacks. ",
                    "location": [
                        "Dropped by Sir Gideon Ofnir, the All-Knowing upon defeat. Sir Gideon is encountered as a boss in Leyndell, Ashen Capital, an alternate version of the Royal Capital accessible only after making significant progress in the story. "
                    ],
                    "fp": "35",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Knowledge Above All",
                            "description": "Knowledge Above All is a Skill in Elden Ring. Knowledge Above All creates a fixed area of effect that reduces magic and holy damage negation.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Marika's Hammer",
                "attack": {
                    "Physical": "101",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "44",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "44",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "12",
                    "Faith": "19"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Marika's Hammer is a Hammer in Elden Ring. The Marika's Hammer scales primarily with Strength and Faith and is a good Weapon for heavy attacks that deal holy damage. ",
                    "location": [
                        "Trade Elden Remembrance with Enia at Roundtable Hold."
                    ],
                    "fp": "26",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Gold Breaker",
                            "description": "Gold Breaker is a Skill in Elden Ring. Gold Breaker is an exclusive Skill to Marika's Hammer. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "flails ": [
            {
                "name": "Serpent Flail",
                "attack": {
                    "Physical": "77",
                    "Magic": "0",
                    "Fire": "92",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "34",
                    "Magic": "25",
                    "Fire": "50",
                    "Lightning": "24",
                    "Holy": "25",
                    "Boost": "21"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "24",
                    "Faith": "21"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Serpent Flail is a Flail in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Serpent Flail scales primarily with Strength, Dexterity, and Faith and is a good Weapon for dealing highs amounts of Fire Damage for a cheap cost and for Faith builds.",
                    "location": [
                        "Fog Rift Fort: Head down using the ladder past the first tower, and defeat the enemies. Beware of the flamethrowers. Use spells or arrows if you have them. Reach the end of the area to find a chest that contains this item."
                    ],
                    "fp": "8",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Flare, O Serpent",
                            "description": "Flare, O Serpent is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Flare, O Serpent ignites a flame inside the snakes, empowering flame attacks. After this, strong attacks and other attacks that strike the ground will cause an explosion.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Flail",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "36",
                    "Magic": "24",
                    "Fire": "24",
                    "Lightning": "24",
                    "Holy": "24",
                    "Boost": "20"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Flail is a basic Flail in Elden Ring. The Flail scales primarily with Strength and Dexterity and is a good Weapon for extra blood loss causing effects that cannot be parried by enemies during combat. ",
                    "location": [
                        "It can be found in a chest in the back of the eastern Carriage, defended by a group of soldiers, near the Gatefront Ruins."
                    ],
                    "fp": "8",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Spinning Chain",
                            "description": "Spinning Chain is a Skill in Elden Ring. Spinning Chain is a skill specific to the Flail that optimizes damage by spinning the weapon before delivering a bludgeoning blow.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Nightrider Flail",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "37",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "21"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Nightrider Flail is a Flail in Elden Ring. The Nightrider Flail scales primarily with Strength and Dexterity and is a good Weapon for inducing blood loss to victims and bludgeoning foes with its triple spiked heads. This will require players to have raised their Dexterity a significant amount before this weapon can be wielded. ",
                    "location": [
                        "Dropped by Night's Cavalry at Weeping Peninsula."
                    ],
                    "fp": "8",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Spinning Chain",
                            "description": "Spinning Chain is a Skill in Elden Ring. Spinning Chain is a skill specific to the Flail that optimizes damage by spinning the weapon before delivering a bludgeoning blow.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Chainlink Flail",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "43",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "24"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Chainlink Flail is a Flail in Elden Ring. The Chainlink Flail scales primarily with Strength and Dexterity. It causes blood loss. Like other flails, it cannot be parried in combat.",
                    "location": [
                        "Chance to drop from Lesser Mad Pumpkin Heads wielding this weapon"
                    ],
                    "fp": "8",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Spinning Chain",
                            "description": "Spinning Chain is a Skill in Elden Ring. Spinning Chain is a skill specific to the Flail that optimizes damage by spinning the weapon before delivering a bludgeoning blow.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Family Heads",
                "attack": {
                    "Physical": "90",
                    "Magic": "58",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "37",
                    "Magic": "36",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "20"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "C",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "18",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Family Heads is a Flail in Elden Ring. The Family Heads scales primarily with Dexterity, Strength, and Intelligence. It features a strong mix of Physical and Magic damage.",
                    "location": [
                        "Altus Plateau: Dropped by Necromancer Garris at Sage's Cave. "
                    ],
                    "fp": "25",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Familial Rancor",
                            "description": "Familial Rancor is a Skill in Elden Ring. Familial Rancor is a unique skill that can be used on the Family Heads. It allows the player to summon the vengeful spirits of the weapon and starts chasing down enemies.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bastard's Stars",
                "attack": {
                    "Physical": "68",
                    "Magic": "81",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "32",
                    "Magic": "48",
                    "Fire": "24",
                    "Lightning": "24",
                    "Holy": "24",
                    "Boost": "20"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "C"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "22",
                    "Intelligence": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bastard's Stars is a Flail in Elden Ring. The Bastard's Stars scales primarily with Strength, Dexterity, and Intelligence. It is a good Weapon for Intelligence-based builds. ",
                    "location": [
                        "Bastard's Stars can be obtained by giving Remembrance of the Naturalborn to Enia at Roundtable Hold."
                    ],
                    "fp": "25",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Nebula ",
                            "description": "Nebula is a Skill in Elden Ring. Nebula leaves a powerful dark cloud that explode after a short while. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "greatHammers": [
            {
                "name": "Black Steel Greathammer",
                "attack": {
                    "Physical": "140",
                    "Magic": "81",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "42",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "72",
                    "Magic": "38",
                    "Fire": "38",
                    "Lightning": "38",
                    "Holy": "45",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "25",
                    "Dexterity": "11",
                    "Faith": "17"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Black Steel Greathammer is a Great Hammer in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Black Steel Greathammer scales primarily with Strength, Dexterity and Faith and is a good Weapon for Faith builds that are looking for a massive weapon that also scales with Strength and Dexterity.",
                    "location": [
                        "Guaranteed drop from the Black Knight found at the Church of Consolation."
                    ],
                    "fp": "9",
                    "weight": "12",
                    "skill": [
                        {
                            "name": "Endure ",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Smithscript Greathammer",
                "attack": {
                    "Physical": "141",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "42",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Intelligence": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "10",
                    "Intelligence": "11",
                    "Faith": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Smithscript Greathammer is a Great Hammer in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Smithscript Greathammer scales primarily with Strength, Dexterity, Intelligence and Faith and is a good Weapon for players looking for a heavy ranged melee alternative without a FP cost. As a Smithscript weapon, it can be thrown and immediately returns to the user's hand.",
                    "location": [
                        "Taylew's Ruined Forge: Use the giant platform in the middle to jump to the other side. Once there, keep moving forward and on the left side there will be a fire blob enemy protecting the item. Defeat the enemy and loot the corpse behind it to obtain the weapon."
                    ],
                    "fp": "9",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Endure ",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Large Club",
                "attack": {
                    "Physical": "131",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "60",
                    "Magic": "32",
                    "Fire": "32",
                    "Lightning": "32",
                    "Holy": "32",
                    "Boost": "38"
                },
                "scaling": {
                    "Strength": "C"
                },
                "requiredStats": {
                    "Strength": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Large Club is a Great Hammer (Warhammer) in Elden Ring. The Large Club scales primarily with Strength and is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself. ",
                    "location": [
                        "On a corpse guarded by Demi-Humans south of the Forlorn Hound Evergaol, west-northwest of the nearby spiritspring."
                    ],
                    "fp": "16",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar ",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Curved Great Club",
                "attack": {
                    "Physical": "145",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "42",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Curved Great Club is a Great Hammer (Warhammer) in Elden Ring. The Curved Great Club scales primarily with Strength and Dexterity and is a good Weapon for high strength players who can hold this weapon's weight.",
                    "location": [
                        "This weapon can be looted from the larger of the Second-Generation Albinaurics found across Liurnia of the Lakes (the gray frog like creatures). There are a number of them located around the Temple Quarter making it an easy spot to farm."
                    ],
                    "fp": "16",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Barbaric Roar ",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Great Mace",
                "attack": {
                    "Physical": "134",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "42",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "71",
                    "Magic": "38",
                    "Fire": "38",
                    "Lightning": "38",
                    "Holy": "38",
                    "Boost": "38"
                },
                "scaling": {
                    "Strength": "C"
                },
                "requiredStats": {
                    "Strength": "28"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Great Mace is a Great Hammer (Warhammer) in Elden Ring. The Great Mace scales primarily with Strength and is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself.",
                    "location": [
                        "Inside a chest located in the camp with several trebuchets, southwest of the Grand Lift of Dectus. "
                    ],
                    "fp": "9",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Endure ",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Pickaxe",
                "attack": {
                    "Physical": "144",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "42",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "22",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Pickaxe is a Great Hammer (Warhammer) in Elden Ring. The Pickaxe scales primarily with Strength and Dexterity and is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself.",
                    "location": [
                        "Dropped by Miners"
                    ],
                    "fp": "9",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Endure ",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Brick Hammer",
                "attack": {
                    "Physical": "122",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "42",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "74",
                    "Magic": "40",
                    "Fire": "40",
                    "Lightning": "40",
                    "Holy": "40",
                    "Boost": "48"
                },
                "scaling": {
                    "Strength": "B"
                },
                "requiredStats": {
                    "Strength": "31"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Brick Hammer is a Great Hammer (Warhammer) in Elden Ring. The Brick Hammer scales primarily with Strength and is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself. ",
                    "location": [
                        "Located at Stormveil Castle."
                    ],
                    "fp": "16",
                    "weight": "12.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar ",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Battle Hammer",
                "attack": {
                    "Physical": "131",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "26",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Battle Hammer is a Great Hammer (Warhammer) in Elden Ring. The Battle Hammer scales primarily with Dexterity and Strength and is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself.",
                    "location": [
                        "Dropped randomly by hammer-wielding Duelists near the colosseum in Leyndell Royal Capital, accessible from the West Capital Rampart site of grace. "
                    ],
                    "fp": "16",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Barbaric Roar ",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rotten Battle Hammer",
                "attack": {
                    "Physical": "126",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "26",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Rotten Battle Hammer is a Great Hammer (Warhammer) in Elden Ring. The Rotten Battle Hammer scales primarily with Dexterity and Strength and is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself. ",
                    "location": [
                        "Guaranteed drop from a Rotten Duelist enemy in the stone coffins northwest of the Consecrated Snowfield Site of Grace."
                    ],
                    "fp": "16",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Barbaric Roar ",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Celebrant's Skull",
                "attack": {
                    "Physical": "138",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "34",
                    "Fire": "34",
                    "Lightning": "34",
                    "Holy": "34",
                    "Boost": "40"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Celebrant's Skull is a Great Hammer (Warhammer) in Elden Ring. The Celebrant's Skull scales primarily with Strength and Dexterity and is a good Weapon for high strength players who can hold this weapon's weight. ",
                    "location": [
                        "Altus Plateau: On a corpse sitting at the end of a somewhat hidden path along the cliff, accessible by passing the windmill directly north of the Windmill Village site of grace. "
                    ],
                    "fp": "16",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar ",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Great Stars",
                "attack": {
                    "Physical": "135",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "68",
                    "Magic": "36",
                    "Fire": "36",
                    "Lightning": "36",
                    "Holy": "36",
                    "Boost": "44"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "22",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Great Stars is a Great Hammer in Elden Ring. Great Stars scales primarily with Strength and Dexterity, and is a good Weapon for high-strength characters who can hold this weapon's weight. The weapon is able to destroy enemy armor, sometimes along with the enemy itself. ",
                    "location": [
                        "On a guarded Carriage being towed by two Trolls in Altus Plateau, travelling on the road southwest of the Road of Iniquity Side Path Site of Grace"
                    ],
                    "fp": "9",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Endure",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Greathorn Hammer",
                "attack": {
                    "Physical": "134",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "65",
                    "Magic": "35",
                    "Fire": "35",
                    "Lightning": "35",
                    "Holy": "35",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "22",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Greathorn Hammer is a Great Hammer (Warhammer) in Elden Ring. The Greathorn Hammer scales primarily with Strength and Dexterity and is a good Weapon for  high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself.  ",
                    "location": [
                        "Dropped by Ancestral Follower located in Siofra River."
                    ],
                    "fp": "16",
                    "weight": "10",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Envoy's Long Horn",
                "attack": {
                    "Physical": "120",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "78",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "58",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "31",
                    "Holy": "42",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "C"
                },
                "requiredStats": {
                    "Strength": "23",
                    "Dexterity": "11",
                    "Faith": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Envoy's Long Horn is a Great Hammer (Warhammer) in Elden Ring. The Envoy's Long Horn scales primarily with Strength, Faith, and Dexterity. Despite being an instrument it is primarily used to bludgeon foes, and with exception to its unique skill Bubble Shower, it has long reach for its class.",
                    "location": [
                        "This weapon can be dropped by the Large Oracle Envoy located early on in the East Capital Rampart in Leyndell, Royal Capital."
                    ],
                    "fp": "16",
                    "weight": "9.5",
                    "skill": [
                        {
                            "name": "Bubble Shower",
                            "description": "Bubble Shower is a Skill in Elden Ring. Bubble Shower is a skill unique to the Envoy's Long Horn that allows the player to release a spume of magic bubbles upon blowing the weapon.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Cranial Vessel Candlestand",
                "attack": {
                    "Physical": "98",
                    "Magic": "0",
                    "Fire": "98",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "71",
                    "Magic": "37",
                    "Fire": "51",
                    "Lightning": "37",
                    "Holy": "37",
                    "Boost": "48"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "26",
                    "Dexterity": "8",
                    "Faith": "22"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Cranial Vessel Candlestand is a Great Hammer (Warhammer) in Elden Ring. The Cranial Vessel Candlestand scales primarily with Strength and Faith, with reduced scaling in Dexterity. It is a potent Weapon with formidable range, suitable for high strength players who want to deal Fire damage and can tolerate this hammer's weight.",
                    "location": [
                        "Giant-Conquering Hero's Grave: Found on a corpse at the end of a large hall locked behind an Imp Statue. This hall is directly above the room with the flamethrower pillar."
                    ],
                    "fp": "15",
                    "weight": "12.5",
                    "skill": [
                        {
                            "name": "Surge of Faith",
                            "description": "Surge of Faith is a Skill in Elden Ring. Surge of Faith allows players to rain down fireballs on enemies",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Beastclaw Greathammer",
                "attack": {
                    "Physical": "116",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "75",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "62",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "45",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "10",
                    "Faith": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Beastclaw Greathammer is a Great Hammer (Warhammer) in Elden Ring. The Beastclaw Greathammer scales primarily with Strength and Dexterity and is a good Weapon for high strength players who can hold this weapon's weight.",
                    "location": [
                        "Gurranq will reward the player with this after turning in their 7th Deathroot."
                    ],
                    "fp": "20",
                    "weight": "9",
                    "skill": [
                        {
                            "name": "Regal Beastclaw",
                            "description": "Regal Beastclaw is a Skill in Elden Ring. Regal Beastclaw is a unique skill that can be used on the Beastclaw Greathammer. It allows players to slam the hammer into the ground, sending out a fan of five bestial claws on the ground.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Devourer's Scepter",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "69",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "62",
                    "Magic": "33",
                    "Fire": "45",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "42"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "20",
                    "Faith": "25"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Devourer's Scepter is a Great Hammer (Warhammer) in Elden Ring. The Devourer's Scepter scales primarily with Strength, Dexterity and Faith. It is a good Weapon for high strength players who can hold this weapon's weight. The weight is worth the ability to crush enemy armor, sometimes along with the enemy itself.  ",
                    "location": [
                        "Dropped by Knight/Recusant Bernahl when defeated. You will find him at Warmaster's Shack [Map Link] or in Crumbling Farum Azula when he invades you."
                    ],
                    "fp": "35",
                    "weight": "11.5",
                    "skill": [
                        {
                            "name": "Devourer of Worlds",
                            "description": "Devourer of Worlds is a Skill in Elden Ring. Devourer of Worlds is a skill that allows the user to steal HP of all nearby enemies by hitting the ground with the scepter.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "colossalWeapons": [
            {
                "name": "Bloodfiend's Arm",
                "attack": {
                    "Physical": "147",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "76",
                    "Magic": "46",
                    "Fire": "46",
                    "Lightning": "46",
                    "Holy": "46",
                    "Boost": "51"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "28",
                    "Dexterity": "11",
                    "Faith": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bloodfiend's Arm is a Colossal Weapon in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Bloodfiend's Arm scales primarily with Strength, Dexterity and Arcane and is a good Weapon for Bleed and Arcane Builds. This is a slow but hard-hitting weapon that sprays blood when using the heavy attacks.",
                    "location": [
                        "Guaranteed one-time drop from a Bloodfiend group in Prospect Town located at the Gravesite Plain."
                    ],
                    "fp": "9",
                    "weight": "20",
                    "skill": [
                        {
                            "name": "Endure ",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Anvil Hammer",
                "attack": {
                    "Physical": "131",
                    "Magic": "0",
                    "Fire": "85",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "80",
                    "Magic": "43",
                    "Fire": "59",
                    "Lightning": "43",
                    "Holy": "41",
                    "Boost": "53"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "39",
                    "Dexterity": "10",
                    "Faith": "20",
                    "Intelligence": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Anvil Hammer is a Colossal Weapon in Elden Ring. It is a brand new Colossal Weapon in the Shadow of the Erdtree DLC. The Anvil Hammer scales primarily with Strength, Dexterity,  Intelligence and Faith and is a good Weapon for Strength or multi-attribute Builds. This weapon comes with the Smithing Art Spears skill which lets you smash the ground very hard and summons multiple spears from the ground.",
                    "location": [
                        "Ruined Forge Lava Intake. Use the column you have lowered with the lever as a bridge and climb it until the end. Beware of the fire blob, and then at the top, turn right and jump to reach the stairs. Climb them up and interact with a furnace to obtain this weapon and an Ancient Dragon Smithing Stone."
                    ],
                    "fp": "18",
                    "weight": "22",
                    "skill": [
                        {
                            "name": "Smithing Art Spears",
                            "description": "Smithing Art Spears is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Smithing Art Spears summons countless spears from the ground, after shaming the anvil violently into the ground.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Devonia's Hammer",
                "attack": {
                    "Physical": "147",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "44",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "73",
                    "Magic": "45",
                    "Fire": "45",
                    "Lightning": "45",
                    "Holy": "51",
                    "Boost": "51"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "30",
                    "Dexterity": "13",
                    "Faith": "19"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Devonia's Hammer is a Colossal Weapon in Elden Ring. It is a Colossal Weapon introduced in the Shadow of the Erdtree DLC. The Devonia's Hammer scales primarily with Strength, Dexterity, and Faith and is a good Weapon for STR/FAI builds. It draws from the power of the Crucible.",
                    "location": [
                        "Dropped by Devonia, Crucible Knight near Rauh Ancient Ruins, East Grace."
                    ],
                    "fp": "16",
                    "weight": "20",
                    "skill": [
                        {
                            "name": "Devonia's Vortex",
                            "description": "Devonia's Vortex is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Devonia's Vortex swings the hammer violently and slams it into the ground, creating a devastating shockwave.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Shadow Sunflower Blossom",
                "attack": {
                    "Physical": "114",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "114",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "55",
                    "Magic": "37",
                    "Fire": "37",
                    "Lightning": "37",
                    "Holy": "64",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "24",
                    "Dexterity": "8",
                    "Faith": "25"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Shadow Sunflower Blossom is a Colossal Weapon in Elden Ring. It is a brand new Colossal Weapon in the Shadow of the Erdtree DLC. The Shadow Sunflower Blossom scales primarily with Strength, Dexterity and Faith and it can be obtained after trading the Remembrance of the Shadow Sunflower. ",
                    "location": [
                        "Trade Remembrance of the Shadow Sunflower at Enia to receive this weapon."
                    ],
                    "fp": "16",
                    "weight": "16",
                    "skill": [
                        {
                            "name": "Shadow Sunflower Headbutt",
                            "description": "Shadow Sunflower Headbutt is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Shadow Sunflower Headbutt slams down the weapon, sending out a powerful shockwave that can be followed-up by two more attacks.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Gazing Finger",
                "attack": {
                    "Physical": "133",
                    "Magic": "86",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "50",
                    "Fire": "38",
                    "Lightning": "38",
                    "Holy": "38",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "C",
                    "Intelligence": "D",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "8",
                    "Intelligence": "20",
                    "Faith": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Gazing Finger is a Colossal Weapon in Elden Ring. It is a brand new Colossal Weapon in the Shadow of the Erdtree DLC. The Gazing Finger scales primarily with Strength, Intelligence and Faith and can be obtained after trading the Remembrance of the Mother of Fingers at the Roundtable Hold. This has the Kowtower's Resentment skill that lets you slam the weapon down and causes a holy explosion.",
                    "location": [
                        "Trade Remembrance of the Mother of Fingers at Enia to receive this weapon."
                    ],
                    "fp": "31",
                    "weight": "15",
                    "skill": [
                        {
                            "name": "Kowtower's Resentment",
                            "description": "Kowtower's Resentment is a Skill in Elden Ring. It was added with the Shadow of the Erdtree DLC. Kowtower's Resentment is a chargeable skill that forces to bow a finger's foremost protrusion, making it explode.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Duelist Greataxe",
                "attack": {
                    "Physical": "170",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "78",
                    "Magic": "47",
                    "Fire": "47",
                    "Lightning": "47",
                    "Holy": "47",
                    "Boost": "52"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Duelist Greataxe is a Colossal Weapon in Elden Ring. The Duelist Greataxe scales primarily with Strength and Dexterity, and is a good Weapon for strong melee slashing attacks. Those who want to wield this colossal greataxe will need high Strength stats to be able to use it. ",
                    "location": [
                        "Potential drop In Leyndell near the West Capital Rampart Site of Grace from the Duelist enemies near the colosseum."
                    ],
                    "fp": "9",
                    "weight": "20",
                    "skill": [
                        {
                            "name": "Endure",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rotten Greataxe",
                "attack": {
                    "Physical": "162",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "78",
                    "Magic": "47",
                    "Fire": "47",
                    "Lightning": "47",
                    "Holy": "47",
                    "Boost": "52"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "30",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Rotten Greataxe is a Colossal Weapon in Elden Ring. The Rotten Greataxe scales primarily with Strength and Dexterity and is a good Weapon for going against large creatures and enemies. ",
                    "location": [
                        "Dropped by Rotten Duelist to the north of Ordina, Liturgical Town."
                    ],
                    "fp": "9",
                    "weight": "20",
                    "skill": [
                        {
                            "name": "Endure",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Golem's Halberd",
                "attack": {
                    "Physical": "158",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "75",
                    "Magic": "45",
                    "Fire": "45",
                    "Lightning": "45",
                    "Holy": "45",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "36",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Golem's Halberd is a Colossal Weapon in Elden Ring. The Golem's Halberd scales primarily with Strength and Dexterity and is a good Weapon for a melee combat. This weapon packs a lot of attack power which can deal a significant amount of Physical Damage. It requires a warrior with great Strength to wield it. ",
                    "location": [
                        "Possible drop from a Golem wielding this weapon, the earliest respawning one being at Limgrave Tower Bridge Site of Grace."
                    ],
                    "fp": "16",
                    "weight": "21.5",
                    "skill": [
                        {
                            "name": "Charge Forth",
                            "description": "Charge Forth is a Skill in Elden Ring. Charge Forth is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Giant-Crusher",
                "attack": {
                    "Physical": "155",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "88",
                    "Magic": "52",
                    "Fire": "52",
                    "Lightning": "52",
                    "Holy": "52",
                    "Boost": "58"
                },
                "scaling": {
                    "Strength": "C"
                },
                "requiredStats": {
                    "Strength": "60"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Giant-Crusher is a Colossal Weapon in Elden Ring. The Giant-Crusher scales primarily with Strength and is a good Weapon for dealing great physical damage, but this heavy weapon also requires great Strength to wield. ",
                    "location": [
                        "Can be found in a chest in the back of a Carriage directly to the south of Outer Wall Phantom Tree site of grace."
                    ],
                    "fp": "9",
                    "weight": "26.5",
                    "skill": [
                        {
                            "name": "Endure",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Prelate's Inferno Crozier",
                "attack": {
                    "Physical": "156",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "82",
                    "Magic": "49",
                    "Fire": "49",
                    "Lightning": "49",
                    "Holy": "49",
                    "Boost": "55"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "45",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Prelate's Inferno Crozier is a Colossal Weapon in Elden Ring. The Prelate's Inferno Crozier scales primarily with Strength and Dexterity and is a good Weapon for strong melee attacks that will fling enemies into the air. Those who want to wield this colossal hammer will need high Strength stats to be able to use it.",
                    "location": [
                        "Drops from a Fire Prelate wielding it inside Fort Laiedd near Seethewater Terminus Site of Grace."
                    ],
                    "fp": "7",
                    "weight": "23.5",
                    "skill": [
                        {
                            "name": "Prelate's Charge",
                            "description": "Prelate's Charge is a Skill in Elden Ring. Prelate's Charge is a regular skill that smashes the weapon into the ground to create a surge of flames. Prelate's Charge has Flame Affinity and is usable on large and colossal axes and hammers.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Great Club",
                "attack": {
                    "Physical": "154",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "46",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "70",
                    "Magic": "41",
                    "Fire": "42",
                    "Lightning": "40",
                    "Holy": "47",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "35"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "The Great Club is a Colossal Weapon in Elden Ring. It is said to be a withered branch of the Erdtree. The Great Club scales primarily with Strength and is a good Weapon for dealing Physical and Holy Damage. The skill attached to this weapon also has an ability that unleashes a blast of energy and releases them as golden darts.",
                    "location": [
                        "Dropped by the Stonedigger Troll boss in Old Altus Tunnel, the tunnel requires two Stonesword Keys."
                    ],
                    "fp": "16",
                    "weight": "17",
                    "skill": [
                        {
                            "name": "Golden Land",
                            "description": "Golden Land is a Skill in Elden Ring. Golden Land is skill found on the Great Club that can release energy in the form of golden darts onto nearby enemies. It has Sacred Affinity and is usable on greataxes, great hammers, great spears, and colossal weapons",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Troll's Hammer",
                "attack": {
                    "Physical": "153",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "46",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "41",
                    "Fire": "46",
                    "Lightning": "41",
                    "Holy": "41",
                    "Boost": "46"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "35",
                    "Dexterity": "8",
                    "Faith": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Troll's Hammer is a Colossal Weapon in Elden Ring. The Troll's Hammer scales primarily with Strength, Faith, and Dexterity, and is a good Weapon for dealing Physical Damage, but also can deal Fire Damage. This weapon is best used when surrounded by multiple foes due to its accompanying Skill, Troll's Roar.  This allows the user to distance themself away from nearby enemies, by generating a shockwave that blows them back. ",
                    "location": [
                        "Found in a storage shed inside the Old Altus Tunnel dungeon."
                    ],
                    "fp": "22",
                    "weight": "16",
                    "skill": [
                        {
                            "name": "Troll's Roar",
                            "description": "Troll's Roar is a Skill in Elden Ring. Troll's Roar is a skill found on the Troll's Hammer, Troll's Golden Sword, and Troll Knight's Sword. This allows the user to distance himself from nearby enemies by generating a shockwave that blows them back ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Dragon Greatclaw",
                "attack": {
                    "Physical": "120",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "78",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "66",
                    "Magic": "40",
                    "Fire": "40",
                    "Lightning": "52",
                    "Holy": "40",
                    "Boost": "47"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "30",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Dragon Greatclaw is a Colossal Weapon in Elden Ring. The Dragon Greatclaw scales primarily with Strength and Dexterity and is a good Weapon for going against dragon-like creatures and enemies. In addition to general Physical Damage, what makes this weapon great is that it does Lightning Damage which can be especially effective towards specific enemy types.",
                    "location": [
                        "Dropped by the Draconic Tree Sentinel, fought at Capital Outskirts."
                    ],
                    "fp": "9",
                    "weight": "16",
                    "skill": [
                        {
                            "name": "Endure",
                            "description": "Endure is a Skill in Elden Ring. Endure is a is a regular skill that can be found in Ashes of War and can be applied to all melee armaments. Endure will greatly complement playstyles that rely on blocking and tanking hits during combat.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Watchdog's Staff",
                "attack": {
                    "Physical": "165",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "75",
                    "Magic": "45",
                    "Fire": "45",
                    "Lightning": "45",
                    "Holy": "45",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Watchdog's Staff is a Colossal Weapon in Elden Ring. The Watchdog's Staff scales primarily with Strength, with reduced scaling in Dexterty, and is a potent Weapon for non-Int builds in need of heavy ranged Magic damage.",
                    "location": [
                        "Located in Road's End Catacombs in Liurnia of the Lakes"
                    ],
                    "fp": "15",
                    "weight": "19",
                    "skill": [
                        {
                            "name": "Sorcery of the Crozier",
                            "description": "Sorcery of the Crozier is a Skill in Elden Ring. Sorcery of the Crozier is a Unique Skill for the Colossal Weapon Watchdog's Staff.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Staff of the Avatar",
                "attack": {
                    "Physical": "113",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "73",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "73",
                    "Magic": "45",
                    "Fire": "45",
                    "Lightning": "45",
                    "Holy": "57",
                    "Boost": "52"
                },
                "scaling": {
                    "Strength": "C",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "8",
                    "Faith": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Staff of the Avatar is a Colossal Weapon in Elden Ring. It depicts an ancient appearance of the Erdtree. The Staff of the Avatar scales primarily with Strength, Dexterity, and Faith and is a good Weapon for those who want a STR/FAI hybrid melee build. ",
                    "location": [
                        "Drops from the Erdtree Avatar you encounter near the Great Waterfall Crest site of grace."
                    ],
                    "fp": "19",
                    "weight": "20",
                    "skill": [
                        {
                            "name": "Erdtree Slam",
                            "description": "Erdtree Slam is a Skill in Elden Ring. Erdtree Slam is a special skill only available on the Staff of the Avatar and Rotten Staff weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rotten Staff",
                "attack": {
                    "Physical": "165",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "75",
                    "Magic": "45",
                    "Fire": "45",
                    "Lightning": "45",
                    "Holy": "45",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "8"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Rotten Staff is a Colossal Weapon in Elden Ring. The Rotten Staff scales primarily with Strength and Dexterity and is a good Weapon for those who want a Strength/Dexterity hybrid melee build.",
                    "location": [
                        "Elphael, Brace of the Haligtree: Dropped by the Putrid Avatar patrolling the ring walkway in the east."
                    ],
                    "fp": "19",
                    "weight": "18",
                    "skill": [
                        {
                            "name": "Erdtree Slam",
                            "description": "Erdtree Slam is a Skill in Elden Ring. Erdtree Slam is a special skill only available on the Staff of the Avatar and Rotten Staff weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Envoy's Greathorn",
                "attack": {
                    "Physical": "121",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "78",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "70",
                    "Magic": "43",
                    "Fire": "43",
                    "Lightning": "43",
                    "Holy": "55",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "28",
                    "Dexterity": "12",
                    "Faith": "24"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Envoy's Greathorn is a Colossal Weapon in Elden Ring. The Envoy's Greathorn scales primarily with Strength and is a good Weapon for dealing Holy damage.",
                    "location": [
                        "Dropped by Giant Oracle Envoy. They are found in Miquella's Haligtree."
                    ],
                    "fp": "16",
                    "weight": "19.5",
                    "skill": [
                        {
                            "name": "Great Oracular Bubble",
                            "description": "Great Oracular Bubble (Skill) is a Skill in Elden Ring. Great Oracular Bubble Skill is a skill unique to the Envoy's Greathorn that allows the player to release a massive magic bubble upon blowing the horn.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Ghiza's Wheel",
                "attack": {
                    "Physical": "156",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "73",
                    "Magic": "43",
                    "Fire": "43",
                    "Lightning": "43",
                    "Holy": "43",
                    "Boost": "48"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "28",
                    "Dexterity": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Ghiza's Wheel is a Colossal Weapon in Elden Ring. The Ghiza's Wheel scales primarily with Strength and Dexterity and is a good Weapon for dealing  a great amount of Physical Damage, but would require Great Strength to handle as well. This weapon has a unique skill where it can be set to spin at top speed even while moving.",
                    "location": [
                        "Reward for killing phantom Inquisitor Ghiza in Volcano Manor."
                    ],
                    "fp": "3",
                    "weight": "19",
                    "skill": [
                        {
                            "name": "Spinning Wheel",
                            "description": "Spinning Wheel is a Skill in Elden Ring. Spinning Wheel is a unique skill on Ghiza's Wheel. Damage enemies with the quick spinning blades on the wheel and continue to move into enemies.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Fallingstar Beast Jaw",
                "attack": {
                    "Physical": "131",
                    "Magic": "85",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "70",
                    "Magic": "55",
                    "Fire": "43",
                    "Lightning": "43",
                    "Holy": "43",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "34",
                    "Dexterity": "12",
                    "Intelligence": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Fallingstar Beast Jaw is a Colossal Weapon in Elden Ring. The Fallingstar Beast Jaw scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for skewering, piercing and striking foes. It has a unique Skill, the Gravity Bolt that can Imbue the jaw of a falling star beast with gravitational lightning, sending a bolt crashing down. ",
                    "location": [
                        "Dropped by the Full-Grown Fallingstar Beast in Mt. Gelmir. "
                    ],
                    "fp": "13",
                    "weight": "21.5",
                    "skill": [
                        {
                            "name": "Gravity Bolt",
                            "description": "Gravity Bolt is a Skill in Elden Ring. Gravity Bolt is a Unique skill found on the Fallingstar Beast Jaw that can send a lightning bolt crashing down on foes",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Axe of Godfrey",
                "attack": {
                    "Physical": "165",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "75",
                    "Magic": "45",
                    "Fire": "45",
                    "Lightning": "45",
                    "Holy": "45",
                    "Boost": "50"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "42",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Axe of Godfrey is a Colossal Weapon in Elden Ring. The Axe of Godfrey scales primarily with Strength and Dexterity and is a good Weapon for strong melee attacks. ",
                    "location": [
                        "Obtained when unlocking the Remembrance of Hoarah Loux by handing it over to Enia at Roundtable Hold"
                    ],
                    "fp": "25",
                    "weight": "18",
                    "skill": [
                        {
                            "name": "Regal Roar",
                            "description": "Regal Roar is a Skill in Elden Ring. Regal Roar is a powerful roar that raises attack power and emits an unguardable shockwave",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "spears": [
            {
                "name": "Smithscript Spear",
                "attack": {
                    "Physical": "107",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "38",
                    "Magic": "23",
                    "Fire": "23",
                    "Lightning": "23",
                    "Holy": "23",
                    "Boost": "28"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Intelligence": "E",
                    "Faith": "E"
                },
                "requiredStats": {
                    "Strength": "9",
                    "Dexterity": "12",
                    "Intelligence": "11",
                    "Faith": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Smithscript Spear is a Spear in Elden Ring. It was added with the Shadow of the Erdtree DLC. The Smithscript Spear scales primarily with Strength, Dexterity, Intelligence and Faith and is a good Weapon for players that want a ranged melee alternative without a FP cost. As a Smithscript weapon, it can be thrown and immediately returns to the user's hand.",
                    "location": [
                        "Ruined Forge Starfall Past: The weapon is looted from a body located on the main floor of the Ruined Forge of Starfall Past."
                    ],
                    "fp": "9",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Impaling Thrust ",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Swift Spear",
                "attack": {
                    "Physical": "99",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "26"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Swift Spear is a Spear in Elden Ring. It is a brand new Spear in the Shadow of the Erdtree DLC. The Swift Spear scales primarily with Dexterity and is a good Weapon for builds that like to attack rapidly with decent range. This weapon is good for its high attack speed and can be paired with a shield. This also comes with the Impaling Thrust which goes through an enemy guarding.",
                    "location": [
                        "Can be found lying on a corpse guarded by 3 Messmer Soldiers along the road going South-East from the Castle Front site of grace."
                    ],
                    "fp": "9",
                    "weight": "3",
                    "skill": [
                        {
                            "name": "Impaling Thrust ",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bloodfiend's Fork",
                "attack": {
                    "Physical": "105",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Arcane": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "8",
                    "Arcane": "13"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bloodfiend's Fork is a Spear in Elden Ring. It is a brand new Spear in the Shadow of the Erdtree DLC. The Bloodfiend's Fork scales primarily with Strength, Dexterity and Arcane and is a good Weapon for Bleed and Arcane Builds. This weapon causes blood loss build-up and can increase attack power by using the Barbaric Roar skill along with a combo.",
                    "location": [
                        "Has a 3.0% dropped from Bloodfiends who wield it (you can find two in a melee battle not far from Ruined Forge Lava Intake)"
                    ],
                    "fp": "16",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Short Spear",
                "attack": {
                    "Physical": "112",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "30"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "10"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Short Spear is a Spear in Elden Ring. The Short Spear scales primarily with Strength and Dexterity and is a good Weapon for short range melee combat.  ",
                    "location": [
                        "Starting Equipment for the Prophet Class.",
                        "Can be purchased from Twin Maiden Husks at the Roundtable Hold"
                    ],
                    "fp": "14",
                    "weight": "4",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Iron Spear",
                "attack": {
                    "Physical": "114",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "13",
                    "Dexterity": "11"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Iron Spear is a Spear in Elden Ring. The Iron Spear scales primarily with Strength and Dexterity.  ",
                    "location": [
                        "Dropped by Fallen Hawks Soldiers that wield it."
                    ],
                    "fp": "16",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Charge Forth",
                            "description": "Charge Forth is a Skill in Elden Ring. Charge Forth is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Spear",
                "attack": {
                    "Physical": "114",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "42",
                    "Magic": "26",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "31"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Spear is a basic Spear weapon in Elden Ring. The Spear scales primarily with Dexterity and Strength and is a good Weapon for any short-range dexterity build fighter. ",
                    "location": [
                        "A +7 version drops from Patches in Murkwater Cave if he is killed after pleading for mercy."
                    ],
                    "fp": "9",
                    "weight": "4.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Partisan",
                "attack": {
                    "Physical": "123",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "30",
                    "Fire": "30",
                    "Lightning": "30",
                    "Holy": "30",
                    "Boost": "36"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "15",
                    "Dexterity": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Partisan is a Spear in Elden Ring. The Partisan scales primarily with Dexterity and Strength and is a good Weapon for making further melee attacks with its length and ability to sweep and thrust through enemies within range. ",
                    "location": [
                        "Dropped by the heavy Godrick Knight in Gatefront Ruins",
                        "Dropped by the Redmane Knight in Fort Gael"
                    ],
                    "fp": "9",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Pike",
                "attack": {
                    "Physical": "115",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "53",
                    "Magic": "33",
                    "Fire": "33",
                    "Lightning": "33",
                    "Holy": "33",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Pike is a Spear in Elden Ring. The Pike scales primarily with Strength and Dexterity and is a good Weapon for long distance combat and horseback combat. This weapon is best used in an open area to better suit this weapon's range. ",
                    "location": [
                        "Location: Stormveil Castle",
                        "Can be looted off a corpse that's lying on the heavily guarded courtyard. The nearest checkpoint is the Liftside Chamber site of grace"
                    ],
                    "fp": "16",
                    "weight": "7.5",
                    "skill": [
                        {
                            "name": "Charge Forth",
                            "description": "Charge Forth is a Skill in Elden Ring. Charge Forth is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Spiked Spear",
                "attack": {
                    "Physical": "120",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "46",
                    "Magic": "28",
                    "Fire": "28",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "34"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Spiked Spear is a Spear in Elden Ring. The Spiked Spear scales primarily with Stength and Dexterity and is a good Weapon for melee users who want to perform longer-reaching piercing attacks with the potential to bleed. ",
                    "location": [
                        "Chance to drop from 1 spear-wielding Marionette Soldier just outside of Witchbane Ruins."
                    ],
                    "fp": "9",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Cross-Naginata",
                "attack": {
                    "Physical": "122",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "52",
                    "Magic": "32",
                    "Fire": "32",
                    "Lightning": "32",
                    "Holy": "32",
                    "Boost": "39"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "C"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "20"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Cross-Naginata is a Spear in Elden Ring. The Cross-Naginata scales primarily with Strength and Dexterity and is a good Weapon for melee players who want a long-reach alternative. ",
                    "location": [
                        "Gael Tunnel: Found on a corpse inside a cavern with a Giant Land Octopus hanging from the ceiling."
                    ],
                    "fp": "9",
                    "weight": "8",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Clayman's Harpoon",
                "attack": {
                    "Physical": "99",
                    "Magic": "64",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "38",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "E",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "12",
                    "Dexterity": "10",
                    "Intelligence": "12"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Clayman's Harpoon is a Spear in Elden Ring. The Clayman's Harpoon scales primarily with Strength, Dexterity, and Intelligence and is a good Weapon for its additional Magic Damage.  ",
                    "location": [
                        "Dropped by Clayman at Uhl Palace Ruins, Siofra River or Ainsel River."
                    ],
                    "fp": "9",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Celebrant's Rib-Rake",
                "attack": {
                    "Physical": "109",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "40",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "25",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "8",
                    "Dexterity": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Celebrant's Rib-Rake is a Spear in Elden Ring. The Celebrant's Rib-Rake scales primarily with Dexterity and is a good Weapon for piercing enemies.",
                    "location": [
                        "Chance drop by the Celebrants of Windmill Village."
                    ],
                    "fp": "16",
                    "weight": "5",
                    "skill": [
                        {
                            "name": "Barbaric Roar",
                            "description": "Barbaric Roar is a Skill in Elden Ring. Barbaric Roar is a default skill of the Greataxe and the Club. Barbaric Roar has the Heavy Affinity. Other roar skills include War Cry and Braggart's Roar.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Torchpole",
                "attack": {
                    "Physical": "104",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "26",
                    "Fire": "33",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "34"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "15"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Torchpole is a Spear in Elden Ring. The Torchpole scales primarily with Strength and Dexterity, and is a decent Weapon for inflicting fire-based attacks from far away.",
                    "location": [
                        "Players can obtain the Torchpole by killing the Stormveil Castle courtyard guards."
                    ],
                    "fp": "16",
                    "weight": "6",
                    "skill": [
                        {
                            "name": "Charge Forth",
                            "description": "Charge Forth is a Skill in Elden Ring. Charge Forth is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Inquisitor's Girandole",
                "attack": {
                    "Physical": "102",
                    "Magic": "0",
                    "Fire": "66",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "56",
                    "Magic": "28",
                    "Fire": "43",
                    "Lightning": "28",
                    "Holy": "28",
                    "Boost": "37"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "18",
                    "Dexterity": "15",
                    "Faith": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Inquisitor's Girandole is a Spear in Elden Ring. The Inquisitor's Girandole scales primarily with Strength, Dexterity and Faith. It is a good Weapon for medium reach when in melee combat. ",
                    "location": [
                        "Dropped by the Abductor Virgins Field Boss in Volcano Manor's underground, down from the Subterranean Inquisition Chamber site of grace."
                    ],
                    "fp": "16",
                    "weight": "7.5",
                    "skill": [
                        {
                            "name": "Charge Forth",
                            "description": "Charge Forth is a Skill in Elden Ring. Charge Forth is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Crystal Spear",
                "attack": {
                    "Physical": "110",
                    "Magic": "33",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "33",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "16",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Crystal Spear is a Spear in Elden Ring. The Crystal Spear scales primarily with Dexterity and is a good Weapon for short range melee combat and to inflict magic-based attacks. ",
                    "location": [
                        "Can be found inside Sellia Hideaway."
                    ],
                    "fp": "9",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Impaling Thrust",
                            "description": "Impaling Thrust is a Skill in Elden Ring. Impaling Thrust is a strong lunging action that can pierce through enemy shields and pierce their guard.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Rotten Crystal Spear",
                "attack": {
                    "Physical": "104",
                    "Magic": "31",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "48",
                    "Magic": "33",
                    "Fire": "26",
                    "Lightning": "26",
                    "Holy": "26",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "E"
                },
                "requiredStats": {
                    "Strength": "10",
                    "Dexterity": "16",
                    "Intelligence": "16"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Rotten Crystal Spear is a Spear in Elden Ring. The Rotten Crystal Spear scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for medium range attacks and inflicting magic damage. ",
                    "location": [
                        "Can be dropped by Lesser Crystalian enemies located within Elphael, Brace of the Haligtree."
                    ],
                    "fp": "16",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Charge Forth",
                            "description": "Charge Forth is a Skill in Elden Ring. Charge Forth is a regular skill that can be found in Ashes of War and applied to compatible weapons.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Cleanrot Spear",
                "attack": {
                    "Physical": "102",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "100"
                },
                "guard": {
                    "Physical": "49",
                    "Magic": "25",
                    "Fire": "25",
                    "Lightning": "25",
                    "Holy": "38",
                    "Boost": "33"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D",
                    "Faith": "D"
                },
                "requiredStats": {
                    "Strength": "16",
                    "Dexterity": "16",
                    "Faith": "14"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Cleanrot Spear is a Spear in Elden Ring. The Cleanrot Spear scales primarily with Strength, Dexterity, and Faith and is a good Weapon for Faith based fighters. ",
                    "location": [
                        "Drops from spear-wielding Lesser Cleanrot Knights south of the Heart of Aeonia by Commander O'Neil (low drop rate)."
                    ],
                    "fp": "12",
                    "weight": "5.5",
                    "skill": [
                        {
                            "name": "Sacred Phalanx",
                            "description": "Sacred Phalanx is a Skill in Elden Ring. Sacred Phalanx is a unique skill found on the Cleanrot Spear. ",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Death Ritual Spear",
                "attack": {
                    "Physical": "99",
                    "Magic": "64",
                    "Fire": "0",
                    "Lightning": "0",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "54",
                    "Magic": "42",
                    "Fire": "27",
                    "Lightning": "27",
                    "Holy": "27",
                    "Boost": "36"
                },
                "scaling": {
                    "Strength": "E",
                    "Dexterity": "D",
                    "Intelligence": "D"
                },
                "requiredStats": {
                    "Strength": "14",
                    "Dexterity": "20",
                    "Intelligence": "18"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Death Ritual Spear is a Spear in Elden Ring. The Death Ritual Spear scales primarily with Strength, Dexterity, and Intelligence and is a good Weapon to engage in close combat from a safe distance, piercing enemies during battle.",
                    "location": [
                        "Dropped by the Death Rite Bird fought in the Mountaintops of the Giants."
                    ],
                    "fp": "20",
                    "weight": "6.5",
                    "skill": [
                        {
                            "name": "Spearcall Ritual",
                            "description": "Spearcall Ritual is a Skill in Elden Ring. Spearcall Ritual is a special skill that is only available for the Death Ritual Spear, and cannot be applied to other weapons via Ashes of War.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            },
            {
                "name": "Bolt of Gransax",
                "attack": {
                    "Physical": "98",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "63",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "60",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "47",
                    "Holy": "31",
                    "Boost": "40"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "40"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bolt of Gransax is a Spear in Elden Ring. The Bolt of Gransax scales primarily with Strength and Dexterity and is a potent Lightning-imbued Weapon to hunt down dragon-like enemies or engage dangerous foes from afar. ",
                    "location": [
                        "Can be found in Leyndell, Royal Capital, at the topn of real bolt of gransax"
                    ],
                    "fp": "25",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Ancient Lightning Spear",
                            "description": "Ancient Lightning Spear is a Skill in Elden Ring. Ancient Lightning Spear is a unique skill that can be used on the Bolt of Gransax.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    {
        "greatSpears": [
            {
                "name": "Bolt of Gransax",
                "attack": {
                    "Physical": "98",
                    "Magic": "0",
                    "Fire": "0",
                    "Lightning": "63",
                    "Holy": "0",
                    "Critical": "110"
                },
                "guard": {
                    "Physical": "60",
                    "Magic": "31",
                    "Fire": "31",
                    "Lightning": "47",
                    "Holy": "31",
                    "Boost": "40"
                },
                "scaling": {
                    "Strength": "D",
                    "Dexterity": "D"
                },
                "requiredStats": {
                    "Strength": "20",
                    "Dexterity": "40"
                },
                "info": {
                    "image": "https://res.cloudinary.com/doeiccxm7/image/upload/v1756480663/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
                    "description": "Bolt of Gransax is a Spear in Elden Ring. The Bolt of Gransax scales primarily with Strength and Dexterity and is a potent Lightning-imbued Weapon to hunt down dragon-like enemies or engage dangerous foes from afar. ",
                    "location": [
                        "Can be found in Leyndell, Royal Capital, at the topn of real bolt of gransax"
                    ],
                    "fp": "25",
                    "weight": "8.5",
                    "skill": [
                        {
                            "name": "Ancient Lightning Spear",
                            "description": "Ancient Lightning Spear is a Skill in Elden Ring. Ancient Lightning Spear is a unique skill that can be used on the Bolt of Gransax.",
                            "playback": [
                                "Tt contain weapon skill video"
                            ]
                        }
                    ],
                    "video": [
                        "It contain gameplay video with this with this weapon"
                    ]
                }
            }
        ]
    },
    { "halberds": [] },
    { "reapers": [] },
    { "whips": [] },
    { "fists": [] },
    { "claws": [] },
    { "lightBows": [] },
    { "bows": [] },
    { "greatBows": [] },
    { "crossBows": [] },
    { "ballistas": [] },
    { "glintstoneStaffs": [] },
    { "sacredSeals": [] },
    { "Torches": [] },
    { "Tools": [] },
    { "handToHandArts ": [] },
    { "ThrustingShields ": [] },
    { "throwingBlades": [] },
    { "backhandBlades": [] },
    { "perfumeBottles": [] },
    { "beastClaws": [] },
    { "lightGreatswords": [] },
    { "greatKatanas": [] }
]


const AllArsenal = () => {

    const [knowledge, setKnowledge] = useState();

    useEffect(() => {
        const fetchWeapons = async () => {
            try {
                const response = await fetch('https://lore-of-the-lands-between.onrender.com/api/knowledge/exploration');
                const data = await response.json();
                setKnowledge(data);
            
            } catch (error) {
                console.error('Error fetching weapons:', error);
            }
        };

        fetchWeapons();
    }, []);



    console.log(knowledge)
    return (
        <div
            className="min-h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1758264525/hidden_city_crxxkg.jpg')" }}
        >

            <div className="bg-slate-900/80 py-8 px-4">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-4">
                        Arsenal
                    </h1>
                    <p className="text-xl text-slate-300 max-w-4xl">
                        Discover the vast array of weapons and armaments found throughout the Lands Between.
                        From mighty greatswords to devastating spells, explore the tools of combat that
                        warriors and champions wield in their quests.
                    </p>
                </div>
            </div>

            <div className="py-12 px-4">
                <div className="arsenal-container w-[90%]  mx-auto p-4 ">
                    {weapons.map((categoryObj, i) =>
                        Object.keys(categoryObj).map(category => (

                            <div key={i} className="bg-slate-800/90 border rounded-lg p-4 m-2 border-blue-700/50 hover:border-blue-600 transition-all duration-500 hover-scale animate-fade-in group" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className='mb-4 flex flex-col gap-2'>
                                    <div className="flex items-center gap-3 ">
                                        <Sword className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                        <div>
                                            <p className="text-blue-300 text-2xl">{category}</p>
                                            {/* <div className="border border-white  w-fit px-2  bg-white text-black rounded-xl text-xs mt-1">
                                                {category?.length} items
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="   text-slate-400">
                                        <p>This is small description</p>
                                    </div>
                               
                                </div>
                                <div>
                                    <Link to="/exploration">
                                    <div asChild variant="outline" className="w-full border border-blue-600 text-blue-400 bg-[#1b1b1b89] rounded-sm text-center p-2 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                       <p> View Catalog</p>
                                    </div>
                                    </Link>
                                </div>
                            </div>

                            // <div
                            //     className="border bg-[#000000d9] flex justify-center items-center  rounded-2xl   bg-center bg-contain min-h-[200px] p-4 m-2"
                            //     key={i}
                            //     style={{
                            //         // backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1758192733/download_iy4tit.png')",
                            //         // backgroundRepeat: "no-repeat"
                            //     }}
                            // >

                            //     <h2 className='text-white'>{category}</h2>
                            // </div>

                        ))
                    )}


                </div>

            </div>



        </div>
    );
};

export default AllArsenal;
import * as React from 'react';
import { ArrowLeft, HelpCircle, Sword, Crown, BookOpen, Map } from "lucide-react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      questions: [
        {
          id: "panel1",
          q: "What class should I choose as a beginner?",
          a: "The Samurai or Vagabond classes are excellent for beginners. Samurai starts with a katana and good dexterity, while Vagabond has balanced stats and versatile equipment. Both provide solid foundations for learning the game."
        },
        {
          id: "panel2",
          q: "Where should I go first after the tutorial?",
          a: "Head to the Gatefront Ruins in Limgrave to get your mount (Torrent) and meet Melina. Then explore Limgrave thoroughly before attempting Stormveil Castle. Don't rush - the game rewards thorough exploration."
        },
        {
          id: "panel3",
          q: "What are Sites of Grace and how do they work?",
          a: "Sites of Grace are checkpoints that restore your health, FP, and flasks while respawning most enemies. They show golden rays pointing toward main objectives, but you can freely explore elsewhere. Rest at them frequently to save progress."
        },
        {
          id: "panel4",
          q: "How does leveling work?",
          a: "Collect runes (souls) from enemies and spend them at Sites of Grace to level up. Focus on Vigor (health), your primary damage stat (STR/DEX/INT/FAI), and Endurance early. Don't spread points too thin initially."
        }
      ]
    },
    {
      title: "Combat & Gameplay",
      icon: Sword,
      questions: [
        {
          id: "panel5",
          q: "What's the difference between light and heavy attacks?",
          a: "Light attacks (R1/RB) are faster and consume less stamina, while heavy attacks (R2/RT) deal more damage and can break enemy poise. Heavy attacks can be charged for even more damage and different movesets."
        },
        {
          id: "panel6",
          q: "How does the guard counter work?",
          a: "Block an enemy attack at the right moment, then immediately press R2/RT to perform a guard counter. This deals high damage and stance damage, often leading to critical hits. It's one of the most powerful mechanics in the game."
        },
        {
          id: "panel7",
          q: "When should I use Spirit Ashes?",
          a: "Spirit Ashes can be summoned in most boss fights and many challenging areas (look for the tombstone icon). They're not cheating - they're intended tools. The Skeletal Militiaman and Mimic Tear are particularly useful."
        },
        {
          id: "panel8",
          q: "How do I deal with difficult bosses?",
          a: "Learn their patterns through observation, use appropriate damage types (some bosses are weak to specific elements), consider co-op or Spirit Ashes, and don't hesitate to level up or upgrade your weapons if you're struggling."
        }
      ]
    },
    {
      title: "Character Building",
      icon: Crown,
      questions: [
        {
          id: "panel9",
          q: "What stats should I prioritize?",
          a: "Always prioritize Vigor first (aim for 40+ by endgame). Then focus on your primary damage stat: STR for strength weapons, DEX for dexterity weapons, INT for sorceries, or FAI for incantations. Mind increases FP for magic users."
        },
        {
          id: "panel10",
          q: "How do weapon scaling and requirements work?",
          a: "Weapons have stat requirements (must meet to use effectively) and scaling grades (E to S, showing stat bonus damage). A weapon with A scaling in STR gets more bonus damage from Strength than one with C scaling."
        },
        {
          id: "panel11",
          q: "Should I use magic or melee?",
          a: "Both are viable! Pure melee is straightforward and reliable. Magic (sorcery/incantations) offers ranged options and utility but requires stat investment and FP management. Hybrid builds combining both are also effective."
        },
        {
          id: "panel12",
          q: "How important is equipment load?",
          a: "Very important! Stay under 70% equipment load for medium rolling (fast enough for most situations). Over 70% gives slow, heavy rolling with fewer i-frames. Under 30% gives fast rolling but requires significant stat investment."
        }
      ]
    },
    {
      title: "Lore & Story",
      icon: BookOpen,
      questions: [
        {
          id: "panel13",
          q: "Do I need to play previous FromSoftware games to understand the story?",
          a: "No, Elden Ring is completely standalone. While it shares thematic elements with Dark Souls, it has its own unique world, characters, and mythology. The story is told through environmental storytelling and item descriptions."
        },
        {
          id: "panel14",
          q: "Who is Queen Marika and why is she important?",
          a: "Queen Marika the Eternal is the central figure of Elden Ring's story. She was chosen by the Greater Will to be the vessel of the Elden Ring and established the Golden Order. Her shattering of the Elden Ring caused the current crisis."
        },
        {
          id: "panel15",
          q: "What is the Shattering?",
          a: "The Shattering refers to both Queen Marika breaking the Elden Ring and the subsequent war between her demigod children for the Great Runes (fragments of the Ring). This war devastated the Lands Between and continues to this day."
        },
        {
          id: "panel16",
          q: "What are the different endings about?",
          a: "The endings represent different philosophical approaches to fixing the broken world: restoring the old order, creating new forms of order, or embracing chaos and freedom. Each reflects different characters' visions for the future."
        }
      ]
    },
    {
      title: "Exploration & Secrets",
      icon: Map,
      questions: [
        {
          id: "panel17",
          q: "How do I access the underground areas?",
          a: "Several underground regions exist: Siofra River (elevator in Mistwood), Nokron (after defeating Radahn), Deeproot Depths (through Siofra Aqueduct), and others. Look for large elevators or hidden passages marked by stone coffins."
        },
        {
          id: "panel18",
          q: "What are the Divine Towers for?",
          a: "Divine Towers activate Great Runes obtained from major bosses. You must visit the corresponding tower after defeating a Great Rune bearer to activate the rune's power. Each tower requires specific access methods."
        },
        {
          id: "panel19",
          q: "How do I find all the map fragments?",
          a: "Map fragments are found at stone pillars (obelisks) in each region, usually near the center. They reveal the full map of that area. Look for the pillar icon on your compass or the tall stone structures visible from a distance."
        },
        {
          id: "panel20",
          q: "Are there secret areas I might miss?",
          a: "Yes, many! Look for illusory walls (attack walls that look suspicious), hidden passages behind waterfalls, areas accessible only by specific questlines, and regions that require special items or actions to access."
        }
      ]
    }
  ];

  return (


    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      {/* Header */}
      <div className="bg-slate-900/80 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-400 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Find answers to the most common questions about Elden Ring. From basic gameplay
            mechanics to deep lore mysteries, we've got you covered.
          </p>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-8 w-8 text-indigo-400" />
                <h2 className="text-3xl font-bold text-indigo-400">{category.title}</h2>
              </div>
              {category.questions.map((faq, faqIndex) => (
                <Accordion
                  sx={{
                    bgcolor: "#00000000", // semi-transparent
                    backdropFilter: "blur(12px)", // frosted glass effect
                    border: "1px solid #60a5fa", // Tailwind blue-600 hex
                    backdropFilter: "blur(2px)",  // blur amount in px
                    borderRadius: 2,
                    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                    mb: 2, // margin bottom
                  }}
                  type="single" collapsible className="space-y-4"
                  expanded={expanded === `${faq.id}`}
                  onChange={handleChange(`${faq.id}`)} >

                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#60a5fa" }} />}
                    sx={{
                      bgcolor: "transparent", // make sure summary is transparent
                      color: "#fff",
                    }}
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-slate-800/90 border-indigo-700/50 rounded-lg px-4"
                  >
                    <Typography className="text-indigo-300 hover:text-indigo-200 text-left">
                      {faq.q}
                    </Typography>

                  </AccordionSummary>
                  <AccordionDetails className="text-slate-300 text-sm leading-relaxed pt-4">
                    <Typography>
                      {faq.a}
                    </Typography>

                  </AccordionDetails>
                </Accordion>
              ))}

            </div>
          ))}
        </div>
      </div>

      {/* Additional Help */}
      <div className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">Still Need Help?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-slate-800/90 border rounded-lg p-6 border-blue-700/50 hover:border-blue-600   transition duration-300 text-center">
              <div>
                <Crown className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-indigo-300 p-2 text-lg">Character Builds</div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">
                  Explore detailed character build guides for every playstyle
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border rounded-lg p-6 border-blue-700/50 hover:border-blue-600   transition duration-300 text-center">
              <div>
                <Sword className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-indigo-300 p-2 text-lg">Boss Strategies</div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">
                  Detailed guides for every boss encounter in the game
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border rounded-lg p-6  border-blue-700/50 hover:border-blue-600   transition duration-300 text-center">
              <div>
                <Map className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-indigo-300 p-2 text-lg">Interactive Maps</div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">
                  Detailed maps showing all items, secrets, and locations
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border rounded-lg p-6  border-blue-700/50 hover:border-blue-600   transition duration-300 text-center">
              <div>
                <BookOpen className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-indigo-300 p-2 text-lg">Lore Deep Dives</div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">
                  Comprehensive analysis of the game's rich mythology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-indigo-300 mb-4">
            "A Tarnished of no renown. Cross the fog, to the Lands Between. To stand before the Elden Ring. And become the Elden Lord."
          </blockquote>
          <cite className="text-slate-400">— Unknown Narator</cite>
        </div>
      </div>
    </div>
  );
}
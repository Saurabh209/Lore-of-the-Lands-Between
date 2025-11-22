
import TextPressure from '../../../ReactBitsComponents/TextPressure/TextPressure'
import './Armors.scss'

import ArmorOne from '../../../public/img/TestingArmors/crucible_knight_set.png'
import ArmorTwo from '../../../public/img/TestingArmors/fia_set.png'
import ArmorThree from '../../../public/img/TestingArmors/malenia_set.png'
import ArmorFour from '../../../public/img/TestingArmors/malformed-dragon-set-elden-ring-wiki-guide.png'
import ArmorFive from '../../../public/img/TestingArmors/maliketh_set.png'
import ArmorSix from '../../../public/img/TestingArmors/radahn_set.png'
import ArmorSeven from '../../../public/img/TestingArmors/snowwitch-set-elden-ring-wiki-guide.png'




import { useState } from 'react';
import ScrambledText from '../../../ReactBitsComponents/ScrambledText/ScrambledText'
import ShinyText from '../../../ReactBitsComponents/ShinyText'

const Armors = () => {
    const [expended, setExpended] = useState({
        armr_1: false,
        armr_2: false,
        armr_3: false,
        armr_4: false,
        armr_5: false,
        armr_6: false,
        armr_7: false
    })

    const handleClick = (e) => {
        console.log("click")
        if (e == "Armr_1") {
            setExpended(
                {
                    armr_1: true,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                    armr_7: false
                }
            )

        } else if (e == "Armr_2") {
            setExpended(
                {
                    armr_1: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                    armr_7: false,

                    armr_2: true,
                }
            )
        } else if (e == "Armr_3") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: true,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                    armr_7: false
                }
            )
        } else if (e == "Armr_4") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: true,
                    armr_5: false,
                    armr_6: false,
                    armr_7: false
                }
            )
        } else if (e == "Armr_5") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: true,
                    armr_6: false,
                    armr_7: false
                }
            )
        } else if (e == "Armr_6") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: true,
                    armr_7: false
                }
            )
        } else if (e == "Armr_7") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                    armr_7: true,
                }
            )
        }

    }

    // just for testing (delete me afterwards)
    const handleMouseLeave = () => {
        setTimeout(() => {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                    armr_7: false,
                }
            )
        }, 1000);
    }

    console.log(expended)
    return (

        <main className='ArmorMainContainer'>
            <div className='ArmorHeading '  >
                         <h2 className='flex text-2xl md:text-5xl text-amber-200  font-bold font-crimson animate-fade-in' style={{ animationDelay: '0.3s' }}>ARMORS</h2>
            </div>
            <div className='ArmorContainer' onMouseLeave={handleMouseLeave}>

                {/* First armor */}
                <div className={`Armr_1  ${expended.armr_1 && "armr_expended "} `}>
                    <div className='Armr_1_imgContainer'>
                        <img onClick={() => handleClick("Armr_1")} src={ArmorOne} alt="" />
                    </div>

                    <div className=" ArmrData Armr_1_Data" style={{ transform: expended.armr_1 ? "translateY(-200px)" : "translateY(0)", }} >
                        {/* <TextPressure
                            text={"Crucible Axe Set"}
                            // flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={false}
                            italic={true}
                            textColor="white"
                            strokeColor="#ff0000"
                            minFontSize={36}
                        /> */}
                        <h2>Crucible Axe Set</h2>
                        <ShinyText
                            text={"The Crucible Axe Set is a heavy, high-defense armor built for Strength-focused fighters who like standing their ground. It offers strong physical and magical protection, giving reliable resistance to most incoming damage and status effects."}
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />

                        {/* <p>The Crucible Axe Set is a heavy, high-defense armor built for Strength-focused fighters who like standing their ground. It offers strong physical and magical protection, giving reliable resistance to most incoming damage and status effects.</p> */}
                    </div>
                </div>

                {/* Second armor */}
                <div className={`Armr_2 ${expended.armr_2 && "armr_expended"}`}>
                    <div className='Armr_2_imgContainer'>
                        <img onClick={() => handleClick("Armr_2")} src={ArmorTwo} alt="" />
                    </div>
                    <div className="ArmrData Armr_2_Data" style={{ transform: expended.armr_2 ? "translateY(-200px)" : "translateY(0)", }} >
                        <h2>Fia's Set</h2>
                        <p> Fia’s Set is a light, soft black garment crafted from silk-like fabric. It comes with only two pieces—helm and chest armor—but still carries a distinct defensive charm suited for quiet, graceful playstyles.</p>
                    </div>

                </div>

                {/* Third Armor */}
                <div className={`Armr_3 ${expended.armr_3 && "armr_expended"}`}>
                    <div className='Armr_3_imgContainer'>
                        <img onClick={() => handleClick("Armr_3")} src={ArmorThree} alt="" />
                    </div>
                    <div className="ArmrData Armr_3_Data" style={{ transform: expended.armr_3 ? "translateY(-200px)" : "translateY(0)", }} >
                        <h2>Malenia's set</h2>
                        <p> Malenia’s Set is a light armor forged from unalloyed gold and worn by Malenia, Blade of Miquella. It includes four pieces—helm, chest, gauntlets, and legs—and offers nimble protection for agile, aggressive warriors.</p>
                    </div>
                </div>

                {/* Fourth armor */}
                <div className={`Armr_4 ${expended.armr_4 && "armr_expended"}`}>
                    <div className='Armr_4_imgContainer'>
                        <img onClick={() => handleClick("Armr_4")} src={ArmorFour} alt="" />
                    </div>
                    <div className="ArmrData Armr_4_Data" style={{ transform: expended.armr_4 ? "translateY(-200px)" : "translateY(0)", }} >
                        <h2>Malformed Dragon Set</h2>
                        <p>This malformed golden armor is engraved with dragon imagery and worn by the twisted Tree Sentinels. After Gransax’s ancient assault, they believed true protection of the Erdtree meant transforming into dragons themselves.</p>
                    </div>
                </div>

                {/* Fifth armor */}
                <div className={`Armr_5 ${expended.armr_5 && "armr_expended"}`}>
                    <div className='Armr_5_imgContainer'>
                        <img onClick={() => handleClick("Armr_5")} src={ArmorFive} alt="" />
                    </div>
                    <div className="ArmrData Armr_5_Data" style={{ transform: expended.armr_5 ? "translateY(-200px)" : "translateY(0)", }} >
                        <h2>Maliketh's Set</h2>
                        <p>Maliketh’s Set is a beastly armor of black iron trimmed with gold, worn by the Black Blade himself. It follows the classic four-piece structure and provides fierce protection suited for fast, relentless combat styles.</p>
                    </div>
                </div>

                {/* Six armor */}
                <div className={`Armr_6 ${expended.armr_6 && "armr_expended"}`}>
                    <div className='Armr_6_imgContainer'>
                        <img onClick={() => handleClick("Armr_6")} src={ArmorSix} alt="" />
                    </div>
                    <div className="ArmrData Armr_6_Data" style={{ transform: expended.armr_6 ? "translateY(-200px)" : "translateY(0)", }} >
                        <h2>General Radahn Set</h2>
                        <p>The General Radahn Set is a heavy armor known for exceptional robustness and stability. With four traditional armor pieces, it grants massive resistance and suits warriors who prefer overwhelming strength and endurance.</p>
                    </div>
                </div>

                {/* Seventh armor */}
                <div className={`Armr_7 ${expended.armr_7 && "armr_expended"}`}>
                    <div className='Armr_7_imgContainer'>
                        <img onClick={() => handleClick("Armr_7")} src={ArmorSeven} alt="" />
                    </div>
                    <div className="ArmrData Armr_7_Data" style={{ transform: expended.armr_7 ? "translateY(-200px)" : "translateY(0)", }} >
                        <h2>Snow Witch Set</h2>
                        <p>The Snow Witch Set is a mystical robe-style armor associated with cold sorcery. While most sets include four pieces, this one excludes gauntlets, offering three pieces that enhance magical presence and winter-themed aesthetics.</p>
                    </div>
                </div>


            </div>
        </main>


    );
};

export default Armors;
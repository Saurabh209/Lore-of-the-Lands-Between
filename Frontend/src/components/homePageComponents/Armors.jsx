
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
                <h1>Heading</h1>
            </div>
            <div className='ArmorContainer' onMouseLeave={handleMouseLeave}>

                {/* First armor */}
                <div className={`Armr_1 ${expended.armr_1 && "armr_expended"}`}>
                    <div className='Armr_1_imgContainer'>
                        <img onClick={() => handleClick("Armr_1")} src={ArmorOne} alt="" />
                    </div>

                    <div className=" ArmrData Armr_1_Data" style={{ transform: expended.armr_1 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>

                </div>

                {/* Second armor */}
                <div className={`Armr_2 ${expended.armr_2 && "armr_expended"}`}>
                    <div className='Armr_2_imgContainer'>
                        <img onClick={() => handleClick("Armr_2")} src={ArmorTwo} alt="" />
                    </div>
                    <div className="ArmrData Armr_2_Data" style={{ transform: expended.armr_2 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>

                </div>

                {/* Third Armor */}
                <div className={`Armr_3 ${expended.armr_3 && "armr_expended"}`}>
                    <div className='Armr_3_imgContainer'>
                        <img onClick={() => handleClick("Armr_3")} src={ArmorThree} alt="" />
                    </div>
                    <div className="ArmrData Armr_3_Data" style={{ transform: expended.armr_3 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>
                </div>

                {/* Fourth armor */}
                <div className={`Armr_4 ${expended.armr_4 && "armr_expended"}`}>
                    <div className='Armr_4_imgContainer'>
                        <img onClick={() => handleClick("Armr_4")} src={ArmorFour} alt="" />
                    </div>
                    <div className="ArmrData Armr_4_Data" style={{ transform: expended.armr_4 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>
                </div>

                {/* Fifth armor */}
                <div className={`Armr_5 ${expended.armr_5 && "armr_expended"}`}>
                    <div className='Armr_5_imgContainer'>
                        <img onClick={() => handleClick("Armr_5")} src={ArmorFive} alt="" />
                    </div>
                    <div className="ArmrData Armr_5_Data" style={{ transform: expended.armr_5 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>
                </div>

                {/* Six armor */}
                <div className={`Armr_6 ${expended.armr_6 && "armr_expended"}`}>
                    <div className='Armr_6_imgContainer'>
                        <img onClick={() => handleClick("Armr_6")} src={ArmorSix} alt="" />
                    </div>
                    <div className="ArmrData Armr_6_Data" style={{ transform: expended.armr_6 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>
                </div>

                {/* Seventh armor */}
                <div className={`Armr_7 ${expended.armr_7 && "armr_expended"}`}>
                    <div className='Armr_7_imgContainer'>
                        <img onClick={() => handleClick("Armr_7")} src={ArmorSeven} alt="" />
                    </div>
                    <div className="ArmrData Armr_7_Data" style={{ transform: expended.armr_7 ? "translateY(-200px)" : "translateY(0)", }} >

                    </div>
                </div>
                {/* <div onClick={() => handleClick("Armr_8")} className={`Armr_8 ${expended.armr_7 && "armr_expended"}`}>
                <div className='Armr_8_imgContainer'>
                    <img src={ArmorOne} alt="" />
                </div>
            </div> */}




                {/* <div className='Armr_2'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorTwo} alt="" />
                </div>

            </div>
            <div className='Armr_3'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorThree} alt="" />
                </div>

            </div>
            <div className='Armr_4'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorFour} alt="" />
                </div>

            </div>
            <div className='Armr_5'>

            </div>
            <div className='Armr_6'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorFive} alt="" />
                </div>

            </div> */}

            </div>
        </main>


    );
};

export default Armors;
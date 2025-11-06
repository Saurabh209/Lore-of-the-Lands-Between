
import './Armors.scss'
import ArmorOne from '../../../public/img/TestingArmors/crucible_knight_set.png'
import { useState } from 'react';

const Armors = () => {
    const [expended, setExpended] = useState({
        armr_1: false,
        armr_2: false,
        armr_2: false,
        armr_4: false,
        armr_5: false,
        armr_6: false
    })

    const handleClick = (e) => {
        if (e == "armr_1") {
            setExpended(
                {
                    armr_1: true,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                }
            )

        } else if (e == "armr_2") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: true,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                }
            )
        } else if (e == "armr_3") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: true,
                    armr_4: false,
                    armr_5: false,
                    armr_6: false,
                }
            )
        } else if (e == "armr_4") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: true,
                    armr_5: false,
                    armr_6: false,
                }
            )
        } else if (e == "armr_5") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: true,
                    armr_3: false,
                    armr_4: false,
                    armr_5: true,
                    armr_6: false,
                }
            )
        } else if (e == "armr_6") {
            setExpended(
                {
                    armr_1: false,
                    armr_2: false,
                    armr_3: false,
                    armr_4: false,
                    armr_5: false,
                    armr_6: true,
                }
            )
        }
    }

    console.log(expended)
    return (

        <div className='ArmorMainContainer'>
            <div className={`Armr_1 ${expended.armr_1 && "armr_expended"}`}>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorOne} alt="" />
                </div>
                <button onClick={() => handleClick("armr_1")}>Click me</button>
                <div>Armor Name</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit, excepturi reiciendis asperiores ipsum corporis quod eos consequatur voluptatem? Unde consequuntur assumenda aperiam ipsum, quas id deleniti omnis dolorem! Distinctio!</div>
            </div>
            <div className='Armr_2'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorOne} alt="" />
                </div>
                <div>Armor Name</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit, excepturi reiciendis asperiores ipsum corporis quod eos consequatur voluptatem? Unde consequuntur assumenda aperiam ipsum, quas id deleniti omnis dolorem! Distinctio!</div>
            </div>
            <div className='Armr_3'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorOne} alt="" />
                </div>
                <div>Armor Name</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit, excepturi reiciendis asperiores ipsum corporis quod eos consequatur voluptatem? Unde consequuntur assumenda aperiam ipsum, quas id deleniti omnis dolorem! Distinctio!</div>
            </div>
            <div className='Armr_4'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorOne} alt="" />
                </div>
                <div>Armor Name</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit, excepturi reiciendis asperiores ipsum corporis quod eos consequatur voluptatem? Unde consequuntur assumenda aperiam ipsum, quas id deleniti omnis dolorem! Distinctio!</div>
            </div>
            <div className='Armr_5'>

            </div>
            <div className='Armr_6'>
                <div className='Armr_1_imgContainer'>
                    <img src={ArmorOne} alt="" />
                </div>
                <div>Armor Name</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit, excepturi reiciendis asperiores ipsum corporis quod eos consequatur voluptatem? Unde consequuntur assumenda aperiam ipsum, quas id deleniti omnis dolorem! Distinctio!</div>
            </div>

        </div>

    );
};

export default Armors;
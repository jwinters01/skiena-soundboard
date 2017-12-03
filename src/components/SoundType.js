import React from 'react'
import SoundButton from './SoundButton';
import '../App.css';

const SoundType = ({ soundBtnList }) => {
    return (
            <ul>
                {soundBtnList.map((soundBtnInfo) => {
                    return ( 
                        <li key={soundBtnInfo.name}> 
                            <SoundButton
                                name={soundBtnInfo.name} 
                                filePath={soundBtnInfo.filePath}
                            /> 
                        </li>
                    )
                })} 
            </ul>
    );
}

export default SoundType;

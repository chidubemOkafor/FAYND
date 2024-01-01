import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import './EmojiPicker.css'
import { useState } from 'react';

const EmojiPicker = (props) => {
    return (
        <div>
            <Picker data={data} onEmojiSelect={(response) => {props.appendEmoji(response.native)}}/>
        </div>
    );
};

export default EmojiPicker;

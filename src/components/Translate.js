//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown  from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Cebuano',
        value: 'ceb'
    }



]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [textInput, setTextInput] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        onChange={(e) => setTextInput(e.target.value)}
                        value = {textInput}
                    />
                        
                </div>
            </div>
            <Dropdown 
                label='Select a Language'
                selected={language}
                onSelectedChange={setLanguage} 
                options={options} 
            />
            
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={textInput}/>
        </div>
    );
}

export default Translate;
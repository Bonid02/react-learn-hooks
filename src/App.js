import React, {useState} from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Header from './components/Header';

const items = [
    {
        title: 'What is react?',
        content: 'React is a javascript frontend framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The color Blue',
        value: 'blue'
    }
];


const App = () => {
    const [selected, setSelected] = useState (options[0]);
    /*return(
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
            <h4 style={{color: `${selected.value}`}}>this text is now {selected.value}</h4>
        </div>
    );*/
    return (
       <div>
           <Header />
           <Route path="/">
               <Accordion items={items} />
           </Route>
           <Route path="/list">
                <Search />
           </Route>
           <Route path="/dropdown">
                <Dropdown
                label="Select a color"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
                />
                <h4 style={{color: `${selected.value}`}}>this text is now {selected.value}</h4>
           </Route>
           <Route path="/translate">
                <Translate />
           </Route>

       </div>
    );
};

export default App;
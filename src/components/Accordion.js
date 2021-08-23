import React, {useState} from 'react';

const Accordion = ({items}) => {

    const [justAnIndex, setjustAnIndex] = useState(null);

    //helper function
    const onTitleClick = (index) => {
        setjustAnIndex(index); 
    }

    const renderedItems = items.map((item, index) => {
        const activeInClass = index === justAnIndex ? 'active' : '';
        
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${activeInClass}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeInClass}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{justAnIndex}</h1>
        </div>);
}

export default Accordion;

import React from 'react';

const Link = ({className, href, children}) => {
    const onClickAnchor = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    } 

    return<a onClick={onClickAnchor} className={className} href={href}>{children}</a>
};

export default Link;
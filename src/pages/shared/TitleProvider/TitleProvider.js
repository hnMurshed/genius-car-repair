import React, { useState } from 'react';

const TitleContext = React.createContext();
const useTitle = () => React.useContext(TitleContext);

const TitleProver = ({children}) => {
    const [title, setTitle] = useState('home');

    return (
        <TitleContext.Provider value={{title, setTitle}}>
            {children}
        </TitleContext.Provider>
    )
}

export {
    TitleProver,
    useTitle
}
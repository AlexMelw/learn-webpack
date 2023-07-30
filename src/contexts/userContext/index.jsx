import React from 'react';

const UserContext = React.createContext(null);

const UserProvider = (props) => {

    const [user, setUser] = React.useState(null);

    return <UserContext.Provider value={{
        user,
        setUser
    }}>
        {props.children}
    </UserContext.Provider>
}

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };

import React from 'react';

const UserDetailsDataFetcher = (props) => {

    const { userId } = props;

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const data = await response.json();
    
                console.log(data);
    
                setData(data);
            } catch (error) {
                // Handle error
                console.log(error);
            }
        }

        fetchData();

    }, [userId]);

    if (!data) {
        return 'Loading...';
    }

    return props.render(data);
}

export { UserDetailsDataFetcher }

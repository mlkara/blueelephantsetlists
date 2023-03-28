function FavoriteButton(props) {

    console.log(props)

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);
 
    if (user === null) {
        return (
            <p className={styles['text_small']}><span>
                <a href="/login">Login to favorite this Setlist!</a>
            </span></p>);
    }
    return <FindInitialState userId={user.user_id} setlistId={props.setlistId}/>
}

function NavList(props){

    const stil = {
        display: 'inline-block',
        margin: "10px",
        marginTop: "40px"
    };

    return (
        <li style={stil}>
            <a href={"#"} 
                onClick= {props.tiklandiginda}
                className="btn btn-primary"
                >
                {props.menuElemani}
            </a>
        </li>
    );
}

export default NavList;
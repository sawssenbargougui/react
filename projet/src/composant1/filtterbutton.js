function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" >
            <span className="visually-hidden">{props.name} </span>
            <span>{props.name} </span>
            <span className="visually-hidden">{props.name} </span>
        </button>
    );
}
export default FilterButton;
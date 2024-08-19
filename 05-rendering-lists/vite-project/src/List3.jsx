import PropTypes from 'prop-types';

function List3 (props){

    const itemList = props.items;
    const category = props.category;

    // map takes a callback, a fn expression, or an arrow fn
    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                             {fruit.name}: &nbsp;
                                             <b>{fruit.cals}</b>
                                          </li>

    )

    return (
      <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
      </>
  );
}

List3.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(
    {id: PropTypes.number, 
    name: PropTypes.string,
    cals: PropTypes.number}
  ))
}
List3.defaultProps = {
  category : "Category",
  items: []
}

export default List3;
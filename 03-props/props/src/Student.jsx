import PropTypes from 'prop-types';

function Student(props) { // props is a javascript object

    return(
        // name is a key
        // has to be className not class as class is a reserved keyword
        <div className="student">
            <p>Name: {props.name}</p> 
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>

    );

}

Student.propTypes = {
    name: PropTypes.string, 
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student
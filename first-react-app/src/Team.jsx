import PropTypes from 'prop-types';

const Team =({names,age,background}) => {
    return(
        <div> <h2>name {names} </h2>
        <p>age:{age}</p>
      <p> background {background}</p> </div>  
    )
}

export default Team;

Team.propTypes = {
    names: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
}
import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);


/* AppContainer.js:
- imports the component for which it is a container - in this case App,
- in the mapStateToProps constant we write a function that defines the relation of props with the state,
- connect(mapStateToProps)(App) - conntects App componennt with the store. In the second pair of parentheses we need to specify the component that is used in this container. It returns an object in which the key is the props' name and it uses state argument to get info from the application state
*/
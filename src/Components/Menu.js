import React from 'react';
import MenuData from '../data/MenuData';
import TagData from '../data/TagData';
// import { Link } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        selected: 'all',
        menuItems: [],
        tags: []            
        };
    }

    componentDidMount() {
        this.setState({menuItems: MenuData, tags: TagData})
      }

    changeSelected = (tag) => {
        this.setState({ selected: tag });
    };

    render() {
    return(
        <div>

       </div> 
    )
}
}

export default Menu;
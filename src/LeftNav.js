import React from 'react';
import EmpList from './EmpList';
import Search from './Search';
import List from '@material-ui/core/List';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchterm: '' };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }
    onSearchTermChange(term) {
        this.setState({ searchterm: term });
    }

    render() {
        return (
            <List>
                <Search onSearchTermChange={this.onSearchTermChange}
                    searchterm={this.state.searchterm}
                />
                <EmpList emplist={this.props.employee}
                    onEmpSelection={this.props.onEmpSelection}
                    selected_emp={this.props.selected_emp}
                    searchterm={this.state.searchterm}
                />
            </List>
        );
    }
}
export default LeftNav;


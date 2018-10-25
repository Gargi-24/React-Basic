import React from 'react';
import EmpItem from './EmpItem';
import List from '@material-ui/core/List';

class EmpList extends React.Component {

    render() {

        let searchQuery = this.props.searchterm.toLowerCase();
        let defaultSet = this.props.emplist;
        let newarr = [];

        let filtered = defaultSet.filter(obj => {
            return obj.name.toLowerCase().includes(searchQuery);
        });

        newarr = filtered.map((emp) =>
            <EmpItem key={emp.id} empobj={emp}
                onEmpSelection={this.props.onEmpSelection}
                selected_emp={this.props.selected_emp}
            />)

        return (
            <List>{newarr}</List>
        )

    }

}
export default EmpList;
import React from 'react';
import ListItem from '@material-ui/core/ListItem';

class EmpItem extends React.Component {
    render() {

        let isSelected = false;
        if (this.props.selected_emp === this.props.empobj)
            isSelected = true;

        return (
            <div>
                <ListItem selected={isSelected} onClick={(e) => this.props.onEmpSelection(this.props.empobj)}>{this.props.empobj.name}</ListItem>
            </div>
        );
    }
}
export default EmpItem;
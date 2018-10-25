import React from 'react';

class CentralPanel extends React.Component {
    render() {
        let result = null;

        if (this.props.selected_emp) {
            result =
                <div>
                    <h4>{this.props.selected_emp.id} </h4>
                    <h3>{this.props.selected_emp.name}</h3>
                    <h4>{this.props.selected_emp.contact}</h4>
                </div>
        }
        else {
            result = <h2> Select Any employee </h2>
        }
        return (
            <div>
                {result}
            </div>
        );
    }
}
export default CentralPanel;
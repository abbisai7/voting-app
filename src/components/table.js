
import React from 'react';
 
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items:'item',
            count:'0',
        }
    }
    // getData(){
    //     this.props.value.map(items=>{

    //     })
    // }

    render(){
        let {value} = this.props;
        console.log(value)
                return(
                    <div className="table">
                    <tr>
                    <td>{this.state.items}</td>
                     <td>{this.state.count}</td>
                    </tr>
                   </div>
                )  
        
    }
        
    
    
}
export default Table
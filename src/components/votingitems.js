import React from 'react';
import './votingitems.css';
class VotingItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("VotingItem :: constructor");
        this.state = {
            count: 0,
        }
    }
    doCount(e1, n) {
        let { count } = this.state
        count += n
        this.setState({ count });
        this.props.setData(n);
        let { setData1,value:item } = this.props
        let e ={item,count}
         setData1(e);
        // if(this.props.onVote){
        //     let event={value:n}
        //     this.props.onVote(event)
        // }
    }
    render() {
        console.log("VotingItem :: render");
        let { value } = this.props
        let { count } = this.state
        return (
            <div className={count>-1 ?"voting-item" :"voting-change"}>
                <button className="btn btn-primary">
                    {value}
                </button>
                <hr />
                <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                    <span className="badge" onClick={e1 => this.doCount(e1, 1)}>
                        <i className="fa fa-plus"></i>
                    </span>
                    <span className="badge"onClick={e1 => this.doCount(e1, -1)}>
                        <i className="fa fa-minus"></i>
                    </span>
                </div>
                <hr />
                <span className="badge badge-danger">{count}</span>
                </div>
        );
    }
}

VotingItem.defaultProps = {
    value: 'Item'
}

export default VotingItem;
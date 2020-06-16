import React, { Component } from 'react';
import VotingItem from './votingitems.js';
import Table from './table.js';

class VotingBox extends Component {

    constructor(props) {
        super(props);
        console.log("VotingBox :: constructor");
        this.state = {
            items: [],
            count:0,
            count1:[],
        }
        //------------------------------------------------
        let idx = 0;
        let iterval = setInterval(() => {
            idx += 1
            if (idx === 5)
                clearInterval(iterval)
            let item = `item-${idx}`
            let { items } = this.state
            items = items.concat(item)
            this.setState({ items: items }) // re-render & diffing
        }, 0)
        //------------------------------------------------
        // this.getData=this.getData.bind(this);
    }
    renderVotingItems(items) {
        return items.map((item => {
            return <VotingItem key={item} value={item} setData={e=>this.getData(e)} setData1={e=>this.getCount(e)} />
        }))
        
    }
    getCount(e){
        let {item,count} =e
        let {count1}=this.state
        count1=count1.concat(e)
        // console.log(count1)
        this.setState({count1:count1})
       
    }
    // renderTableItems(count1){
    //     return count1.forEach((con=>{
    //         console.log(con)
    //         return <Table key={con} value={con} />
    //     }))
    // }
    
    
    
    
    getData(event){
        // let {value}=event
        // let {count} = this.state
        // count+=value
        // this.setState({count})
        let {count}=this.state
        count+=event
        // let sum=this.state.count
        this.setState({count})
    }
    render() {
        console.log("VotingBox :: render");
        let { title } = this.props
        let { items,count } = this.state
        return (
            <div className="card">
                <div className="card-header">{title} - VotingBox  : <span className="badge badge-danger">{count}</span></div>
                <div className="card-body">
                    {/* 
                    <VotingItem value={items[0]} />
                    <VotingItem value={items[1]} />
                    <VotingItem value={items[2]} />
                    <VotingItem value={items[3]} />
                    <VotingItem value={items[4]} />
                    <VotingItem value={items[5]} /> 
                    */
                    }
                    {
                        this.renderVotingItems(items)
                    }
                </div>
                <div className="card-body">
                <div className="table">
                    <thead>
                        <tr>
                   <th scope="col">SUb</th>
                    <th scope="col">TotalVotes</th>
                        </tr>
                    </thead>
                    {
                        <Table value={this.state.count1}/>
                    }
                    </div>
                    
                    
                </div>
            </div>
         
        );
    }
}

VotingBox.defaultProps = {
    title: 'VotingBox'
}

export default VotingBox;
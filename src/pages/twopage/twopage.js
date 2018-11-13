import React, {Component} from 'react';
import { Router, Link} from 'react-router-dom';

class TwoPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            txt:'twoPage',
            id:this.props.match.params.id
        }
    }
    render(){
        return (
            // <Router>
                <div>
                    <Link to="/onepage/3999999">goto </Link>
                    <h3>this is {this.state.txt}</h3>
                    <h3>id is : {this.state.id}</h3>
                </div>
            // </Router>
        )
    }
}
// export default function(props){
//     return <TwoPage {...props} key={props.match.params.id}></TwoPage>
// };
export default TwoPage;
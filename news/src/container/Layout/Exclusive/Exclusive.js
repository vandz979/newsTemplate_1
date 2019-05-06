import React, {Component, Fragment}from "react";
import {connect} from "react-redux";

import classes from "./Exclusive.module.css";
import { Row} from 'reactstrap';
import horse from "../../../assets/horse.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bottom from "../../../components/Bottom/Bottom";
import small1 from '../../../assets/small1.jpg';
import small2 from '../../../assets/small2.jpg';

class Exclusive extends Component {

    render () {
            let colright = [];
            if(this.props.data.length > 0){
                colright =
                <Fragment>
                    <Row><img src={horse} alt="right1"/></Row>
                    <Row><h6><strong><span><FontAwesomeIcon icon="plus"/>&nbsp;</span>{this.props.data[1].title}</strong></h6></Row>
                    <Row className={classes.para}><p><span>EXCLUSIVE&nbsp;</span>{this.props.data[1].intro}</p></Row>
                    <Row className={classes.para}><FontAwesomeIcon icon="clock" size="sm"/><p>{this.props.data[1].published}&nbsp;&nbsp;&nbsp;</p><FontAwesomeIcon icon="comment" size="sm"/><p>{this.props.data[1].speech}</p></Row>
                    <Bottom image={small1} text={this.props.data[2].title} published={this.props.data[2].published} speech={this.props.data[2].speech}/>
                    <Bottom image={small2} text={this.props.data[3].title} published={this.props.data[3].published} speech={this.props.data[3].speech}/>
                </Fragment>
                

            }
        return(
            <Fragment>
                {colright}
            </Fragment>
                
                  
            
            )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.landingData
    }
}

export default connect(mapStateToProps)(Exclusive);

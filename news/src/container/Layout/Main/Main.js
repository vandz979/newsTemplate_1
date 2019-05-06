import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

import classes from "./Main.module.css";
import { Row, Col } from 'reactstrap';
import sachin from '../../../assets/sachin.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Main extends Component{


    render(){
        let colleft = [];
            if(this.props.data){
                
                const firsttwo = this.props.data.intro.split(' ').slice(0,2).join(' ');
                const rest = this.props.data.intro.split(' ').slice(2).join(' ');
                

                colleft =
                <Col className={classes.photo}>
                    <Row><img src={sachin} alt="main"/></Row>
                    <Row><h5><strong><span><FontAwesomeIcon icon="plus"/>&nbsp;</span>{this.props.data.title}</strong></h5></Row>
                    <Row className={classes.para}><p><span>{firsttwo}&nbsp;</span>{rest}</p></Row>
                    <Row><FontAwesomeIcon icon="clock"/><p>{this.props.data.published}&nbsp;&nbsp;&nbsp;</p><FontAwesomeIcon icon="comment"/><p>{this.props.data.speech}</p></Row>
                </Col>
            }

        return(
            <Fragment>
                {colleft}
            </Fragment>
    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.landingData[0]
    }
}

export default connect(mapStateToProps)(Main);

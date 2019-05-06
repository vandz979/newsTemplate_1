import React, {Component} from "react";

import { Container, Row, Col } from 'reactstrap';
import classes from "./Layout.module.css";
import {connect} from "react-redux";
import Main from "./Main/Main";
import Exclusive from "./Exclusive/Exclusive";


import * as ac from "../../store/action";


class Layout extends Component {

    componentDidMount(){
        this.props.id();
    }

    componentDidUpdate(){
        const ind = this.props.idlist.findIndex((cur) => {
            return cur.collectiontype === 'landing'
        })

       const lid =  this.props.idlist[ind].collectionid;

       this.props.data(lid);


    }

    render(){
        return(
            <Container fluid className={classes.top}>
                <Row>
                    <Col sm="9">
                        <Row className={classes.blur1}>
                            
                        </Row>
                        <Row className={classes.mainrow}>
                            <Col  xs="6"  className={classes.col1}><Main /></Col>
                            <Col xs="6" >
                                <Exclusive />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="9" md="3"></Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        idlist: state.landingid

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        id: () => dispatch(ac.landingid()),
        data: (id) => dispatch(ac.data(id))
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);

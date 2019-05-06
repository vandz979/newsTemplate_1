import React, {Fragment} from "react";

import classes from "./Bottom.module.css";
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const bottom = (props) => {
    return(
            <Fragment>
                <Row className={classes.bottom}>
                    <Col><p><strong><span><FontAwesomeIcon icon="plus" size="sm"/></span>&nbsp;{props.text}</strong></p></Col>
                    <Col md="4"><img src={props.image} alt="bottom"/></Col>
                </Row>
                <Row className={classes.clock}><FontAwesomeIcon icon="clock" size="xs"/><p>{props.published}&nbsp;&nbsp;&nbsp;</p><FontAwesomeIcon icon="comment" size="xs"/><p>{props.speech}</p></Row>
            </Fragment>                  
    )

}

export default bottom;

//<Col className={classes.photo}></Col> 
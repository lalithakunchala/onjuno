import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Backed.module.css'

export class Backed extends Component {
    render() {
        return (
            <div className="container">
                <h2 className={styles.main}>BACKED BY THE BEST </h2>
                <div className="row m-5">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 pt-4">
                    <div className="m-3">   
                    <img  className={styles.imght} src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" alt="img" />
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                    <div className="m-3">
                    <img className={styles.imght} src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" alt="img" />
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                    <div className="m-3">
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" alt="img" />
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Backed)

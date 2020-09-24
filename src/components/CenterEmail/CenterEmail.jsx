import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './CenterEmail.module.css'
import Button from '../Button/Button'


export class CenterEmail extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row ml-4">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                            <div><h1 className={styles.mostPower}>The Most Powerful<br/> Checking Account </h1></div>
                            <div><h2 className={styles.subText}>Our checking account gives you higher returns<br/>than a savings account with no hidden fees.</h2></div>
                            
                                <div className="col-12 col-sm-12 col-md-8 col-lg-12 ">
                                <div className={styles.bordr}>
                                    <div className="row ">
                                        <div className="col-1 justify-content-center m-4 pt-3"><div className={styles.msg}><img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg" /></div></div>
                                        <div className="col-5 pt-5"><div className={styles.fontS}><input type="text" placeholder="Enter Email Address" className={styles.fontS}/></div></div>
                                        <div className="col-3 pt-4"><Button label="Join Now"/></div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                        <div className={styles.col1}>
                                        <div className="row">
                                        <div className="col-1  mt-2 col1">
                                            <div className={styles.msg1}>
                                            <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png" /></div>
                                            </div>
                                            <div className="col-8 mt-2">
                                                <h5 className="text-secondary mt-2 ml-3 text-left">281 spots left for Priority Access </h5>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-5">
                            <img src="https://i.imgur.com/mIyLXx0.png" alt="image" />
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

export default connect(mapStateToProps, mapDispatchToProps)(CenterEmail)

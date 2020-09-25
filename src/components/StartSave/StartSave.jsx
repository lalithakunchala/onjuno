import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './StartSave.module.css'

export class StartSave extends Component {
    render() {
        return (
            <div class={styles.mainMargin}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 ">
                        <p className={styles.firstText}>Start saving for a rainy day fund </p>
                        <h2 className={styles.mostPower}>Use Our Checking Account to Achieve Your Financial Goals</h2>
                        <p className={styles.subText}>With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation. </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                        <div>
                            <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 ">
                        <h2 style={{textAlign:"center"}}className={styles.mostPower}>Sign up early to save more </h2>
                    </div>
                    <div className="w-75 m-auto">
                        <p style={{textAlign:"center"}} className={styles.subText}>Depending on the level of your checking account, you’ll earn between<br/> 1.15%3 to 2.15%1 bonus rate. </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartSave)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Header.module.css'

export class Header extends Component {
    render() {
        return (
            <div className="sticky-top p-1">
               <nav style={{maxWidth:'1650px',margin:'auto'}}>
                       <div className="row m-3 ml-0">
                            <div className="col-7 ">
                                <div className="row">
                                    <div className="col-4"><img alt="OnJuno Logo" className="img img-fluid" src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png" /></div>
                                    <div className="col-2 pt-4"><span className={styles.fontPink}>Home</span></div>
                                    <div className="col-2 pt-4" id="dropdownMenuButton1" data-toggle="dropdown"><span className={styles.font24}>Company</span><img className={styles.arrow}  src="https://www.flaticon.com/svg/static/icons/svg/25/25623.svg"/></div>
                                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                    </div>
                                    <div className="col-2 pt-4 " id="dropdownMenuButton2" data-toggle="dropdown"><span className={styles.font24}>Learn</span><img className={styles.arrow} src="https://www.flaticon.com/svg/static/icons/svg/25/25623.svg"/></div>
                                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton2">
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                    </div>
                                    <div className="col-2 pt-4 " id="dropdownMenuButton3" data-toggle="dropdown"><span className={styles.font24}>Legal</span><img className={styles.arrow} src="https://www.flaticon.com/svg/static/icons/svg/25/25623.svg"/></div>
                                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton3">
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="offset-4 col-8">
                                        <div className="row">
                                            <div className="col-5"><button className={styles.outline}>Login</button></div>
                                            <div className="col-6"><button className={styles.backgroundBtn}>Signup</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './MinHeader.module.css'

export class MinHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            click:false
        }
    }

    handleToggle = ()=>{
        console.log("toggle")
        this.setState({
            click:!this.state.click
        })
    }
    render() {
        return (
            <div className="sticky-top p-2">
               <nav style={{maxWidth:'1450px',margin:'auto'}}>
                       <div className="row m-3">
                            {/* <div className="col-12 ">
                                <div className="row"> */}
                                    <div className="col-4"><img alt="OnJuno Logo" src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png" /></div>
                                    <div onClick={this.handleToggle} className="col-8 float-right">
                                        <div  className={styles.dash}>
                                        <div className={styles.line}></div>
                                        <div className={styles.line}></div>
                                        <div className={styles.line}></div>
                                    </div>
                                    
                                    <div className={this.state.click?styles.hide:""}>
                                        
                                    <div className="col-12 ">
                                    <div className="col-12 pt-2 d-flex"><span className={styles.font24}>Home</span></div>
                                    <div className="col-12 pt-2 d-flex" id="dropdownMenuButton1" data-toggle="dropdown"><span className={styles.font24}>Company</span><img className={styles.arrow}  src="https://www.flaticon.com/svg/static/icons/svg/25/25623.svg"/></div>
                                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                    </div>
                                    <div className="col-12 pt-2 d-flex" id="dropdownMenuButton2" data-toggle="dropdown"><span className={styles.font24}>Learn</span><div><img className={styles.arrow} src="https://www.flaticon.com/svg/static/icons/svg/25/25623.svg"/></div></div>
                                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton2">
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                    </div>
                                    <div className="col-12 pt-2 d-flex" id="dropdownMenuButton3" data-toggle="dropdown"><span className={styles.font24}>Legal</span><div><img className={styles.arrow} src="https://www.flaticon.com/svg/static/icons/svg/25/25623.svg"/></div></div>
                                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton3">
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                        <a class="dropdown-item" href="#"><span className={styles.font24}>Action</span></a>
                                    </div>
                                    
                                    <div className="col-12 d-flex"><button className={styles.outline}>Login</button></div>
                                    <div className="col-12 d-flex"><button className={styles.backgroundBtn}>Signup</button></div>
                                    </div>
                                {/* </div>
                            </div> */}
                            {/* <div className="col-5">
                                <div className="row">
                                    <div className="offset-4 col-8"> */}
                                    
                                            
                                        {/* </div>
                                    </div>
                                </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MinHeader)

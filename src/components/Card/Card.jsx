import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from "./Card.module.css";

export class Card extends Component {

        constructor(props){
            super(props)
            this.state= {
                basic:false,
                metal:true,
                premium :false
            }
        }

        handle = (e)=>{
            if(e.target.id=="basic"){
                this.setState({
                    premium:false,
                    basic:true,
                    metal:false
                })
            }
            if(e.target.id=="premium"){
                this.setState({
                    premium:true,
                    basic:false,
                    metal:false
                })
            }
            if(e.target.id=="metal"){
                this.setState({
                    premium:false,
                    basic:false,
                    metal:true
                })
            }

            console.log(e.target.id);
        }

    render() {
        console.log(this.state)
        return (
                <div>
                    <div className={styles.options}>
                    <div className="d-flex mb-sm-5 pb-sm-5 pb-md-3 w-75 m-auto">
                    <div onClick={this.handle} id="metal" className="mr-3 h3">METAL</div>
                    <div onClick={this.handle} id="premium" className="mr-3 h3">PREMIUM</div>
                    <div onClick={this.handle} id="basic" className=" h3">BASIC</div>
                    </div>
                    </div>
                <div  className={styles.container1}>
                    
                <div className="row  ">  
                <div  className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5 mt-5 mt-xl-1">
                <div className="shadow">
                <div className={this.state.metal?`${styles.metal}`:`${styles.display}`}>
                <div  className={styles.box-3}>
                <div className={styles.card}>
                <div style={{background:"rgba(238,253,226)"}} className=" text-center ">
                <img className={styles.img1} src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png" alt="image" />
                <div>
                </div>
                <h5 className={styles.h51}>METAL</h5>
                <h1 className={styles.cardStyle}> 2.15% <span className="h4 text-secondary ">1</span></h1>
                <div className="d-flex w-50 m-auto">
                    <div className={styles.rating}>5%</div>
                    <h5 className="text-secondary ml-3">cash back</h5>
                </div> 
                </div>
                <div className="card-body">
                
                <div className="card-title text-left text-secondary">
                    <span className={styles.fontNum}>2220</span>/2500 spots
                    <span className="float-right pt-2 small">280 spots left</span>
                </div>
                <div className="progress " style={{height:"10px"}}>
                <div className="progress-bar bg-success" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                </div>
                </div>
                
                <button type="button" style={{background:"blue"}} class="btn btn-primary h-75 mt-5 mb-5 btn-block"><span className={styles.font24}>Sign Up Now</span></button>
                <hr/>
                <div className="m-3">
                    <h5 className={styles.include}>INCLUDES</h5>
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    <p className="text-left text-secondary"><span className={styles.ptext}>Fund your account with a minimum opening deposit of <span className="text-dark font-weight-bold">$1000</span>. 3 additional free ATM withdrawals per month from out of network ATMs.</span></p>
                </div>
                </div>
                <div className={styles.footer}>
                <div className="card-footer">
                <div className="d-flex">
                <div className={styles.border1}><h5 className="font-weight-bold">$</h5></div>
                <div className={styles.strike1}> $11.99/m Membership Fee </div>
                </div>
                <div className={styles.green}>Free for six months</div>
                <div className={styles.greensub}>$ 60 savings</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            
                <div  className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5 mt-5 mt-xl-1">
                    <div className="shadow">
                    <div className={this.state.premium?`${styles.metal}`:`${styles.display}`}>
                <div className={styles.box-3}>
                <div className={styles.card}>
                <div className={styles.grey}>
                <img className={styles.img1} src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png" alt="image" />
                <div>
                </div>
                <h5 className={styles.h51}>METAL</h5>
                <h1 className={styles.cardStyle1}> 1.65% <span className="h4 text-secondary ">2</span></h1>
                <div className="d-flex w-50 m-auto">
                    <div className={styles.rating1}>5%</div>
                    <h5 className="text-secondary ml-3">cash back</h5>
                </div> 
                </div>
                <div className="card-body">
                
                <div className="card-title text-left text-secondary">
                    <span className={styles.fontNum1}>2220</span>/2500 spots
                    <span className="float-right pt-2 small">280 spots left</span>
                </div>
                <div className="progress " style={{height:"10px"}}>
                <div className="progress-bar" role="progressbar" style={{width:"0%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                </div>
                </div>
                
                <button type="button" style={{background:"lightgrey"}} class="btn  h-75 mt-5 mb-5 btn-block"><span className={styles.font2}>Up Next</span></button>
                 <hr/>
                <div className="m-3">
                    <h5 className={styles.include}>INCLUDES</h5>
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    <p className="text-left text-secondary"><span className={styles.ptext}>Fund your account with a minimum opening deposit of <span className="text-dark font-weight-bold">$1000</span>. 3 additional free ATM withdrawals per month from out of network ATMs.</span></p>
                </div>
                </div>
                <div>
                <div className="card-footer">
                <div className="d-flex">
                <div className={styles.border2}><h5 className="font-weight-bold">$</h5></div>
                <div className={styles.strike}> $11.99/m Membership Fee </div>
                </div>
                <div className={styles.greey}>Free for six months</div>
                
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
           

                <div  className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5 mt-5 mt-xl-1">
                    <div className="shadow">
                    <div className={this.state.basic?`${styles.metal}`:`${styles.display}`}>
                <div className={styles.box-3}>
                <div className={styles.card}>
                <div className={styles.grey}>
                <img className={styles.img1} src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png" alt="image" />
                <div>
                </div>
                <h5 className={styles.h51}>METAL</h5>
                <h1 className={styles.cardStyle1}> 1.15% <span className="h4 text-secondary ">3</span></h1>
                <div className="d-flex w-50 m-auto">
                    <div className={styles.rating1}>5%</div>
                    <h5 className="text-secondary ml-3">cash back</h5>
                </div> 
                </div>
                <div className="card-body">
                
                <div className="card-title text-left text-secondary">
                    <span className={styles.fontNum1}>2220</span>/2500 spots
                    <span className="float-right pt-2 small">280 spots left</span>
                </div>
                <div className="progress " style={{height:"10px"}}>
                <div className="progress-bar " role="progressbar" style={{width:"0%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                </div>
                </div>
                
                <button type="button" style={{background:"lightgrey"}} class="btn  h-75 mt-5 mb-5 btn-block"><span className={styles.font2}>Coming Soon</span></button>
                <hr/>
                <div className="m-3">
                    <h5 className={styles.include}>INCLUDES</h5>
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    
                    <div className="d-flex m-2">
                        <i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i><p className="ml-3 font-weight-bold">Charcoal Black Metal Card</p>
                    </div>
                    <p className="text-left text-secondary"><span className={styles.ptext}>Fund your account with a minimum opening deposit of <span className="text-dark font-weight-bold">$1000</span>. 3 additional free ATM withdrawals per month from out of network ATMs.</span></p>
                </div>
                </div>
                <div >
                <div className="card-footer">
                <div className="d-flex">
                <div className={styles.border2}><h5 className="font-weight-bold">$</h5></div>
                <div className={styles.strike}> $11.99/m Membership Fee </div>
                </div>
                <div className={styles.greey}>Free for six months</div>
               
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Home.module.css'
import MinHeader from '../MinHeader/MinHeader'
import Header from '../Header/Header'
import CenterEmail from '../CenterEmail/CenterEmail'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className={styles.head}>
                <MinHeader />
                </div>
                <div className={styles.minHead}>
                <Header />
                </div>
                <div>
                <CenterEmail />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

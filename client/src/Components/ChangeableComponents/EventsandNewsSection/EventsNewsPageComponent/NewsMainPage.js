import React, { Component } from 'react';
import axios from 'axios';
import SecondaryHeader from '../../SecondaryHeader/SecondaryHeader';
import Footer from '../../../FixedComponents/Footer/Footer';
import PopUp from './PopUp';
import './newsmainpage.css';
class NewsMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activitesData: [],
            showPopup: false,
            numberButton: null,
        }
    }
    componentDidMount() {
        axios.get('/api/home').then(({ data }) => {
            this.setState({ activitesData: data[0] })
        })
            .catch(error => {
                console.log(error);
            })
    }
    togglePopup(value) {
        this.setState({
            showPopup: !this.state.showPopup,
            numberButton: value -1,
            })
    }
    closePopup() {
        this.setState({
            showPopup: false,
        })
    }
    render() {
        console.log(this.state.activitesData);
        window.scroll({
            top: 0,
        });
        console.log(this.state.numberButton, "numberButton")
        return (
            <>
                <SecondaryHeader />
                <div className="news-all">
                    <div className="boxs" style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h1>جميع الأحداث</h1>
                        <div class="flex-container">
                            {this.state.activitesData.map(ele => {
                                return (
                                    <div style={{ backgroundColor: 'grey', width: '200px', height: 'auto' }}>
                                        < h1 > {ele.title}</h1>
                                        <button onClick={() => this.togglePopup(ele.activity_id)}>
                                            {this.state.showPopup ? <PopUp
                                                text={this.state.activitesData && this.state.activitesData[this.state.numberButton].content}
                                                unique={ele.activity_id}
                                                closePopup={this.closePopup.bind(this)} />
                                                : null
                                            }
                                            {ele.activity_id}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div >
                <Footer />
               
            </>
        )
    }
}
export default NewsMainPage;
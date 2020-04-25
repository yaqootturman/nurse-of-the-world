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
        return (
            <>
                <SecondaryHeader />
                <div className="news-all">
                    <div className="boxs">
                        <h1>جميع الأحداث</h1>
                        <div className="flex-container">
                            {this.state.activitesData.map(element => {
                                return (
                                    <div className="article1">
                                        <h1> {element.title}</h1>
                                        <button onClick={() => this.togglePopup(element.activity_id)}>
                                            {this.state.showPopup ? <PopUp
                                                text={this.state.activitesData && this.state.activitesData[this.state.numberButton].content}
                                                unique={element.activity_id}
                                                closePopup={this.closePopup.bind(this)}
                                                title ={this.state.activitesData[this.state.numberButton].title} />
                                                : null
                                            }
                                            {element.activity_id}</button>
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
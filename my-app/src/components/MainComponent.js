 import React,{Component} from 'react';
// import Home from "./HomeComponent";
// import About from "./AboutComponent";
// import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
// import DishDetails from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch,Route,Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component{

    constructor(props){
        console.log("constructor in Main was called");
        super(props);

    }

    render() {
        console.log("render in Main was called");

        //use of exact is important
        return (
            <div>
                <Header/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path='/contactus' component={() =>
                                <Contact
                                    resetFeedbackForm={this.props.resetFeedbackForm}
                                    postFeedback={this.props.postFeedback}
                                />}
                            />
                            <Redirect to="/contactus" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);

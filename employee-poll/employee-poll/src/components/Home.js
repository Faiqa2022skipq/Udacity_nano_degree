import {connect} from "react-redux";
import AnswerList from "./AnswerList";
import Questions from "./Questions";

const Home = () => {

  

    return (
        <div style={{
            alignItems: 'center',
            justifyContent: 'center',
          
        }}>
            <h1  >Dashboard</h1>
            <hr/>
           <Questions/>

            <AnswerList/>
        </div>
    );
}


export default connect()(Home);

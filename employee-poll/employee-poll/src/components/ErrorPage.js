import {connect} from "react-redux";

const Errorpage = () => {
    return (
        <div>
            <h1>
                Error 404
                </h1>
                <h1>
           Page not Found!   </h1>
        </div>
    );
};


export default connect()(Errorpage);

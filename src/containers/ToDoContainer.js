import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ToDosComponent from "../components/ToDosComponent";
import * as actions from "../actions/ToDoActions";


function mapStateToProps({todos}) {
	return {
		...todos
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDosComponent);
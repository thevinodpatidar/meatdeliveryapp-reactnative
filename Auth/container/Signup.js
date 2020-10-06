import { connect } from 'react-redux'

import Register from "../components/Signup";
import { registerUserAction } from '../actions';


const mapStateToProps = state =>({
   auth : state.auth
})


const mapDispatchToProps = (dispatch) => ({

   signup : (data) => dispatch(registerUserAction(data))  

})

export default connect(mapStateToProps,mapDispatchToProps)(Register)

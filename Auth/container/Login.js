import { connect } from 'react-redux'

import Login from "../components/Login";
import { loginUserAction } from '../actions';

const mapStateToProps = state =>({
   auth : state.auth
})

const mapDispatchToProps = dispatch=> ({
   login : data => dispatch(loginUserAction(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)

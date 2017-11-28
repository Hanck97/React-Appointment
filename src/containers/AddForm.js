/*
 * @Author: Hancock 
 * @Date: 2017-11-28 08:42:56 
*/
import { connect } from 'react-redux'

import { addApt,toggleDialog,toggleFormExpanded  } from '../actions'

import AddForm from '../components/AddForm'

const mapStateToProps = (state) => ({
 open: state.openDialog,
 formExpanded: state.formExpanded
});

const mapDispatchToProps = ({
    toggleFormExpanded,
    toggleDialog,
    handleAdd: newApt => addApt(newApt)

});

export default connect (mapStateToProps, mapDispatchToProps)(AddForm);
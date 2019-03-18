import { connect } from "react-redux";

import { Form } from "../Form";
import { clearAndCreateCutups } from "../../actions";

const mapStateToProps = state => ({
  cutups: state.cutups
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(clearAndCreateCutups())
});

export const FormInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

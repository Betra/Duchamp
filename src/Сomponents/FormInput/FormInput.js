import { connect } from "react-redux";

import { Form } from "../Form";
import { clearAndCreateCutups } from "../../actions";

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(clearAndCreateCutups())
});

export const FormInput = connect(
  null,
  mapDispatchToProps
)(Form);

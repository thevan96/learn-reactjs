import { connect } from "react-redux";
import ListContact  from "../components/ListContact";

const mapStateToProps = (state) => ({
  listContact: state.contacts.filter(
    (contact) =>
      contact.name.toLowerCase().indexOf(state.filterText.toLowerCase()) !== -1
  ),
});

export default connect(mapStateToProps, null)(ListContact);

import { Formik } from 'formik';
import StyleList from '../ComponentStyles/PhonebookStyles';

const { FormStyle, FieldStyles } = StyleList;

const FilterContact = props => {
  const { findContactsByName, filters } = props;
  return (
    <Formik
      initialValues={{
        filter: '',
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      <FormStyle>
        <label htmlFor="filter">Find contacts by name</label>
        <FieldStyles
          type="text"
          name="filter"
          onChange={findContactsByName}
          value={filters}
        />
      </FormStyle>
    </Formik>
  );
};

export default FilterContact;

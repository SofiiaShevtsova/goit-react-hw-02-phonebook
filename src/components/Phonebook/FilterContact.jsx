import { Formik, Field, Form } from 'formik';

const FilterContact = props => {
  const { findContactsByName, filters } = props;
  return (
    <Formik
      initialValues={{
        filter: '',
      }}
    >
      <Form>
        <label htmlFor="filter">Find contacts by name</label>
        <Field
          type="text"
          name="filter"
          onChange={findContactsByName}
          value={filters}
        />
      </Form>
    </Formik>
  );
};

export default FilterContact;

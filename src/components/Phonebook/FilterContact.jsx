import { Formik, Field } from 'formik';

const FilterContact = props => {
  const { findContactsByName, filters } = props;
  return (
    <Formik
      initialValues={{
        filter: '',
      }}
    >
      <>
        <label htmlFor="filter">Find contacts by name</label>
        <Field
          type="text"
          name="filter"
          onChange={findContactsByName}
          value={filters}
        />
      </>
    </Formik>
  );
};

export default FilterContact;

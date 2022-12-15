import { Formik, Field } from 'formik';

const FilterContact = props => {
    const{findContactsByName, filter} = props
  return (
    <Formik initialValues={{
          filter: `${filter}`}}
        // validationSchema={SignupSchema}
        onChange={(values, actions) => {
          findContactsByName({ filter: values.name });
        }}>
      <label htmlFor="filter">Find contacts by name</label>
          <Field type="text" name="filter"/>
    </Formik>
  )
}

export default FilterContact
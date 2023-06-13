import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { FcSearch } from 'react-icons/fc';

const schema = yup.object().shape({
  search: yup.string().required(),
});

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSearch }) => {
  const onSubmit = (values, { resetForm }) => {
    const value = values.search.trim().toLowerCase();
    console.log(value);
    onSearch(value);
    resetForm();
  };

  return (
    <>
      <header className={css.header}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form className={css.SearchForm}>
            <FcSearch className={css.search__icon} />
            <button type="submit" className={css.SearchForm__button}>
              Search
            </button>

            <Field
              className={css.SearchForm__input}
              type="text"
              name="search"
              placeholder="Search images and photos..."
            />
          </Form>
        </Formik>
      </header>
    </>
  );
};

Searchbar.prototype = {
  onSearch: PropTypes.func.isRequired,
};

// import { Component } from 'react';

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   onInputChange = evt => {
//     const value = evt.currentTarget.value;
//     this.setState({ [evt.currentTarget.name]: value });
//   };

//   handleSumnit = evt => {
//     evt.preventDefault();
//     const { query } = this.state;
//     this.props.onSubmit(query.trim().toLowerCase());
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <>
//         <header className={css.header}>
//           <form className={css.SearchForm} onSubmit={this.handleSumnit}>
//             <button type="submit" className={css.SearchForm__button}>
//               Search
//             </button>

//             <input
//               className={css.SearchForm__input}
//               type="text"
//               name="query"
//               value={this.state.query}
//               onChange={this.onInputChange}
//               placeholder="Search images and photos..."
//             />
//           </form>
//         </header>
//       </>
//     );
//   }
// }

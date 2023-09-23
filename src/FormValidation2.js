import "./App.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fristname) {
    errors.fristname = "*required";
  } else if (values.fristname.length > 8) {
    errors.fristname = "*most be 8 characters or less";
  }

  if (!values.lastname) {
    errors.fristname = "*required";
  } else if (values.lastname.length > 8) {
    errors.fristname = "*most be 8 characters or less";
  }

  if (!values.email) {
    errors.email = "*required";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = "*invalid Email Address";
  }

  if (!values.password) {
    errors.password = "*required";
  } else if (values.password.length > 8) {
    errors.password = "*maximum 8 characters";
  } else if (values.password.length < 4) {
    errors.password = "*manimum 4 characters";
  }

  if (!values.confirmpassword) {
    errors.comfirmpassword = "*required";
  } else if (values.password !== values.comfirmpassword) {
    errors.comfirmpassword = "*password must match";
  }

  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      fristname: "",
      lastname: "",
      email: "",
      password: "",
      comfirmpassword: "",
    },
    validate,
  });

  console.log(formik.values);

  return (
    <>
      <div className="main">
        <div className="SignUp-form">
          <h2>Sign up Here</h2>
          <form>
            <input
              type="text"
              name="fristname"
              placeholder="frist Name..."
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.fristname}
            />

            {formik.errors.fristname ? (
              <span>{formik.errors.fristname} </span>
            ) : null}

            <input
              type="text"
              placeholder="last Name..."
              autoComplete="off"
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.errors.lastname ? (
              <span>{formik.errors.lastname} </span>
            ) : null}
            <input
              type="text"
              placeholder="Email..."
              autoComplete="off"
              name="email"
              onChange={formik.handleChange}
              values={formik.values.email}
            />
            {formik.errors.email ? <span>{formik.errors.email} </span> : null}

            <input
              type="password"
              name="password"
              placeholder="password..."
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <span>{formik.errors.password} </span>
            ) : null}

            <input
              type="password"
              name="confirmpassword"
              placeholder="confirm password..."
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            {formik.errors.comfirmpassword ? (
              <span>{formik.errors.comfirmpassword} </span>
            ) : null}

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default App;

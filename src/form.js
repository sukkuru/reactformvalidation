import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Input.css";

const errorColor = {
  color: "red",
};

const schema = yup.object().shape({
  fristname: yup.string().required("frist name is mandatory"),
  nickname: yup.string().required("last name is mandatory"),
  email: yup
    .string()
    .email("pls enter valid email")
    .required("enter your email"),
  password: yup
    .string()
    .required()
    .min(4, "minimum 4 chars required")
    .max(15, "enter upto 15 chars only"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid);
  return (
    <>
      <div className="Form">
        <div className="title"> Sign up</div>
        <div className="inputs">
          <form
            className="input_area"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <input
              {...register("fristname")}
              type="text"
              placeholder="Fristname..."
            />
            <p style={errorColor}>{errors?.fristname?.message}</p>
            <br />
            <input
              {...register("nickname")}
              type="text"
              placeholder="Nickname..."
            />
            <p style={errorColor}>{errors?.nickname?.message}</p>
            <br />
            <input {...register("email")} type="text" placeholder="Email..." />
            <p style={errorColor}>{errors?.email?.message}</p>
            <br />
            <input
              {...register("password")}
              type="password"
              placeholder="password..."
            />
            <p style={errorColor}>{errors?.password?.message}</p>
            <br />
            <input
              {...register("confirmpassword")}
              type="password"
              placeholder="confirmpassword..."
            />
            <p style={errorColor}>{errors?.confirmpassword?.message}</p>
            <br />

            <input type="submit" id="submit" disabled={isDirty && !isValid} />
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;

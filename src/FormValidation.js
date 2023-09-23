import { useForm } from "react-hook-form";

let renderCount = 8;

function FormValidation() {
  const {
    register,
    handleSubmit,watch,
    formState: { errors },
  } = useForm({
    defaultValues:{
        fristname:'sampath',
        lastname:'sukkuru',
    }
  });
  const fristname= watch("fristname")
  renderCount++;

  return (
    <>
      <div className="form">
        {/* {renderCount} */}
        <div className="input">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >

            <input
              {...register("fristname", { required: 'fristname is required' })}
              type="text"
              placeholder="fristname"
            />
               {fristname}
               {errors?.fristname && <p>{errors.fristname.message}</p>}
            <input
              {...register("lastname",{required:'lastname is required',minLength:{value:4,message:'minimum 4 character'}})}
              type="text"
              placeholder="lastname"
            />
            {errors?.lastname && <p>{errors.lastname.message}</p>}

            <input type="submit" id="submit" /> 
          </form>
        </div>
      </div>
    </>
  );
}
export default FormValidation;

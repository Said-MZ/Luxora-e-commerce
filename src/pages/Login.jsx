import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          name="identifier"
          type="email"
          label="Email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="seceret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-block btn-secondary">Guest user</button>
        <p className="text-center">
          Not a member yet?
          <Link
            to={"/register"}
            className="link link-hover ml-2 link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;

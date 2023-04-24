import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from '@react-oauth/google';
import axios from 'axios';
import { addData, login } from './action';

function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
    rememberMe: true,
  };
  async function verifyGoogleAccessToken(access_token) {
    const url = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${access_token}`;
    const response = await axios.get(url);
    const data = response;
    console.log(data);
    console.log('access_token', access_token);
    dispatch(
      addData({
        data: data,
        access_token: access_token,
      })
    );
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    dispatch(login(values));
  };

  return (
    <div className="container mt-5 mr-5">
      <div class="card">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="Trendy Pants and Shoes"
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <div className="form-outline mb-4">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        <div className="form-check">
                          <Field
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Signing in...' : 'Sign in'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div
            className="mb-3"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <GoogleOAuthProvider clientId="764775648050-i39q47igrrc0e2c3obcrdm14f62lgl0t.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  verifyGoogleAccessToken(credentialResponse.credential);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                // useOneTap
              />
              {/* <button className="btn btn-danger" onClick={googleLogout}>
              Logout
            </button> */}
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

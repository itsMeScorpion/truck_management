import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SIgnUpPage.css';

const SignUpPage = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="SignUpPage">
      <h1>Truck Driver Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          licenseType: '',
          licenseNumber: '',
          expirationDate: '',
          stateOfIssue: '',
          chassisNumber: '',
          vehicleNumber: '',
          model: '',
          year: '',
          routes: [],
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First name is required'),
          lastName: Yup.string().required('Last name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email address is required'),
          password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
          licenseType: Yup.string().required('License type is required'),
          licenseNumber: Yup.string().required('License number is required'),
          expirationDate: Yup.string().required('Expiration date is required'),
          stateOfIssue: Yup.string().required('State of issue is required'),
          chassisNumber: Yup.string().required('Chassis number is required'),
          vehicleNumber: Yup.string().required('Vehicle number is required'),
          model: Yup.string().required('Model is required'),
          year: Yup.string().required('Year is required'),
          routes: Yup.array()
            .min(1, 'At least one route must be selected')
            .required('Routes are required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div
              className={`section ${
                activeSection === 1 ? 'active' : 'inactive'
              }`}
            >
              <h2>Personal Details</h2>

              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />

              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />

              <label htmlFor="email">Email Address</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />

              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" />

              <button
                type="button"
                className="next-button"
                onClick={() => handleSectionChange(2)}
                disabled={isSubmitting}
              >
                Next
              </button>
            </div>

            <div
              className={`section ${
                activeSection === 2 ? 'active' : 'inactive'
              }`}
            >
              <h2>License Information</h2>
              <label htmlFor="licenseType">License Type</label>
              <Field type="text" name="licenseType" />
              <ErrorMessage name="licenseType" />

              <label htmlFor="licenseNumber">License Number</label>
              <Field type="text" name="licenseNumber" />
              <ErrorMessage name="licenseNumber" />

              <label htmlFor="expirationDate">Expiration Date</label>
              <Field type="text" name="expirationDate" />
              <ErrorMessage name="expirationDate" />

              <label htmlFor="stateOfIssue">State of Issue</label>
              <Field type="text" name="stateOfIssue" />
              <ErrorMessage name="stateOfIssue" />

              <div className="vehicle-checkbox">
                <label>
                  <Field type="checkbox" name="hasVehicle" />I have a vehicle
                </label>
              </div>

              {values.hasVehicle && (
                <>
                  <label htmlFor="chassisNumber">Chassis Number</label>
                  <Field type="text" name="chassisNumber" />
                  <ErrorMessage name="chassisNumber" />

                  <label htmlFor="vehicleNumber">Vehicle Number</label>
                  <Field type="text" name="vehicleNumber" />
                  <ErrorMessage name="vehicleNumber" />

                  <label htmlFor="model">Model</label>
                  <Field type="text" name="model" />
                  <ErrorMessage name="model" />

                  <label htmlFor="year">Year</label>
                  <Field type="text" name="year" />
                  <ErrorMessage name="year" />
                </>
              )}

              <button
                type="button"
                className="prev-button"
                onClick={() => handleSectionChange(1)}
                disabled={isSubmitting}
              >
                Previous
              </button>
              <button
                type="button"
                className="next-button"
                onClick={() => handleSectionChange(3)}
                disabled={isSubmitting}
              >
                Next
              </button>
            </div>

            <div
              className={`section ${
                activeSection === 3 ? 'active' : 'inactive'
              }`}
            >
              <h2>Routes</h2>

              <div className="route-checkbox">
                <label>
                  <Field type="checkbox" name="routes" value="Route 1" />
                  Route 1
                </label>
              </div>

              <div className="route-checkbox">
                <label>
                  <Field type="checkbox" name="routes" value="Route 2" />
                  Route 2
                </label>
              </div>

              <div className="route-checkbox">
                <label>
                  <Field type="checkbox" name="routes" value="Route 3" />
                  Route 3
                </label>
              </div>

              <div className="route-checkbox">
                <label>
                  <Field type="checkbox" name="routes" value="Route 4" />
                  Route 4
                </label>
              </div>

              <button
                type="button"
                className="prev-button"
                onClick={() => handleSectionChange(2)}
                disabled={isSubmitting}
              >
                Previous
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;

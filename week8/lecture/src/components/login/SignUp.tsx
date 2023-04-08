import * as React from 'react';
import {Formik, useFormik} from "formik";
import {signUpSchema} from './validation'

interface Props {

}

export const SignUp: React.FC<Props> = props => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values: any) => {
            console.log(values)
        },
        validationSchema: signUpSchema,
        validateOnBlur: false
    });


    return <>
        <div style={{margin: "auto", border: "1px solid black", width: "20vw"}}>
            <h4>Sign Up</h4>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <span style={{color: 'red'}}>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
                </div>

                <div>
                    <label htmlFor="password">Passsword</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <span style={{color: 'red'}}>{formik.errors.password && formik.touched.password && formik.errors.password}</span>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="confirmPassword"
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    <span style={{color: 'red'}}>{formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}</span>
                </div>
                <button>SignUp</button>
            </form>
        </div>

    </>
};

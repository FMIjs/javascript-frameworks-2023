import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {AuthService} from "../../lib/services/auth-service";
import {useUserInfo} from "../../lib/hooks/useUserInfo";
import {Formik, useFormik} from "formik";

interface Props {

}

export const Login: React.FC<Props> = props => {
    const didMountRef = useRef(false);
    const userInfo = useUserInfo();
    const authService = new AuthService();

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    const handleLogin = (values: {email: string, password: string}) => {
        authService.login(values.email, values.password).then(res => {
            //TODO: Set UserContext authenticated
            if (res) {
                userInfo.updateUserInfo({authenticated: true});
            }
            //TODO: Show error message
            else {
                setShowErrorMessage(true)
            }
        })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleLogin,
    });


    return <>
        <div style={{margin: "auto", border: "1px solid black", width: "20vw"}}>
            <h4>Login</h4>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && formik.errors.email}
                </div>

                <div>
                    <label htmlFor="password">Passsword</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password && formik.errors.password}
                </div>
                <button>Login</button>
            </form>
        </div>

    </>
};

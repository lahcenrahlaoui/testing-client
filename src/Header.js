import { GoogleLogin } from "react-google-login";

const Header = ({ user, server }) => {
    return (
        <nav className="light-green lighten-1 !important ">
            <div className="nav-wrapper container ">
                <a href="#" className="brand-logo ">
                    Glasses store
                </a>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down valign-wrapper  "
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <li className="valign-wrapper">
                        <img
                            width={40}
                            className="circle responsive-img  "
                            src={user?.photos}
                        />
                    </li>

                    <li>
                        {user === null ? (
                            ""
                        ) : !user ? (
                            // <a
                            //     href={`${server}/auth/google`}
                            //     className="waves-effect waves-light btn"
                            // >
                            //     Login
                            // </a>
                            <GoogleLogin
                                clientId="1062226768846-jv1shb277i33rc1iqe2mmejp6kp3btth.apps.googleusercontent.com"
                                render={() => (
                                    <a
                                        href={`${server}/auth/google`}
                                        className="waves-effect waves-light btn"
                                    >
                                        Login
                                    </a>
                                )}
                            />
                        ) : (
                            <>
                                <a
                                    href={`${server}/api/logout`}
                                    className="waves-effect flow-text  "
                                >
                                    Logout
                                </a>
                            </>
                        )}
                    </li>
                </ul>
            </div>

            <div className="blue-text  ">
                <div className="blue-text text-darken-2 container ">.</div>
            </div>
        </nav>
    );
};

export default Header;

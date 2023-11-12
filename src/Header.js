import React from "react";

const Header = ({ user, server }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Logo
                </a>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {!user ? (
                        ""
                    ) : (
                        <>
                            <li>
                                <img
                                    width={20}
                                    className="circle "
                                    src={user.photos}
                                />
                            </li>
                            <li>
                                <div>{user.name}</div>
                            </li>
                        </>
                    )}
                    <li>
                        {!user ? (
                            <a
                                href={`${server}/auth/google`}
                                className="waves-effect waves-light btn"
                            >
                                login
                            </a>
                        ) : (
                            <a
                                href={`${server}/api/logout`}
                                className="waves-effect red accent-2 btn"
                            >
                                logout
                            </a>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;




// import React from "react";

// const Header = ({ user }) => {
//     return (
//         <nav>
//             <div className="nav-wrapper">
//                 <a href="#" className="brand-logo">
//                     Logo
//                 </a>

//                 <ul id="nav-mobile" className="right hide-on-med-and-down">
//                     {!user ? (
//                         ""
//                     ) : (
//                         <>
//                             <li>
//                                 <img
//                                     width={20}
//                                     className="circle "
//                                     src={user.photos}
//                                 />
//                             </li>
//                             <li>
//                                 <div>{user.name}</div>
//                             </li>
//                         </>
//                     )}
//                     <li>
//                         {!user ? (
//                             <a
//                                 href={`https://localhost:5000/auth/google`}
//                                 className="waves-effect waves-light btn"
//                             >
//                                 login
//                             </a>
//                         ) : (
//                             <a
//                                 href={`https://localhost:5000/api/logout`}
//                                 className="waves-effect red accent-2 btn"
//                             >
//                                 logout
//                             </a>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Header;

import './App.css';
import Form from './Form';
import './Form.css';
import Accueil from './Accueil'
import React, {useState} from "react";


function App() {
 
  return (
    <div className=" bg-white-0 dark:bg-gray-550 h-screen overflow-y-hidden">
      {!sessionStorage.getItem("isConnected") ? ( <Form/>) : (<Accueil />)}            
{/* 
      <Form />
      <Accueil /> */}
    </div>
  );
}

export default App;

// import {useDispatch, useSelector} from 'react-redux'
// import {Field, Form, Formik} from 'formik'
// import {login, logout} from './user'
// function App() {
//   const dispatch = useDispatch()
//   const { user } = useSelector(state => state.user)
//   if (user) {
//     return (
//       <div>
//         Hi, {user.username}!
//         <button onClick={() => dispatch(logout())}>Logout</button>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <Formik
//         initialValues={{ username: '', password: '' }}
//         onSubmit={(values) => { dispatch(login(values)) }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="username" />
//             <Field type="password" name="password" />
//             <button type="submit" disabled={isSubmitting}>Login</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
// export default App;

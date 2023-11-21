import { useEffect, useRef, useState } from 'react';

// function SigninForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />

//       <input
//         type="text"
//         name="password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />

//       <button type="submit">Sign in</button>
//     </form>
//   );
// }

// export default SigninForm;

// function ContactUsForm() {
//   const [department, setDepartment] = useState('');
//   const [message, setMessage] = useState('');
//   const [agreedToTerms, setAgreedToTerms] = useState(false);

//   function handleSubmit(event: any) {
//     event.preventDefault();

//     console.log('submitting', stateToString());
//   }

//   function stateToString() {
//     return JSON.stringify(
//       {
//         department,
//         message,
//         agreedToTerms,
//       },
//       null,
//       ' '
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <select
//         name="department"
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//       >
//         <option value="">Select...</option>
//         <option value="hr">Human Resources</option>
//         <option value="pr">Public Relations</option>
//         <option value="support">Support</option>
//       </select>
//       <br />
//       <br />
//       <textarea
//         name="message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         // cols="30"
//         // rows="10"
//       />
//       <br />
//       <input
//         type="checkbox"
//         name="agreedToTerms"
//         checked={agreedToTerms}
//         onChange={(e) => setAgreedToTerms(e.target.checked)}
//       />
//       I agree to the terms and conditions.
//       <br />
//       <button>Send</button>
//     </form>
//   );
// }

// export default ContactUsForm;

// function ExampleForm() {
//   const inputRef = useRef();

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(inputRef.current);
//     console.log(inputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} />
//       <button>Submit</button>
//     </form>
//   );
// }

// export default ExampleForm;

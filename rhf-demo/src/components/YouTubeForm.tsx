// import React from 'react';
// export const YouTubeForm = () => {
//   return (
//     <div>
//       <h1>YouTube Form</h1>

//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" name="username" />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" name="email" />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" name="channel" />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// // lecture 3. useForm Hook

// import React from 'react';
// import { useForm } from 'react-hook-form';
// export const YouTubeForm = () => {
//   const form = useForm();
//   return (
//     <div>
//       <h1>YouTube Form</h1>

//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" name="username" />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" name="email" />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" name="channel" />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// // lecture 4. Managing Form State

// // either we do like this one by one for each input element
// import React from 'react';
// import { useForm } from 'react-hook-form';
// export const YouTubeForm = () => {
//   const form = useForm();
//   const { register } = form;
//   const { name, ref, onChange, onBlur } = register('username');
//   return (
//     <div>
//       <h1>YouTube Form</h1>

//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur} />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" name="email" />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" name="channel" />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// // lecture 4. Managing Form State
// import React from 'react';
// import { useForm } from 'react-hook-form';
// export const YouTubeForm = () => {
//   const form = useForm();
//   const { register } = form;
//   return (
//     <div>
//       <h1>YouTube Form</h1>

//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" {...register('username')} />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" {...register('email')} />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" {...register('channel')} />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// // lecture 5. DevTools Visualization
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// export const YouTubeForm = () => {
//   const form = useForm();
//   const { register, control } = form;
//   return (
//     <div>
//       <h1>YouTube Form</h1>

//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" {...register('username')} />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" {...register('email')} />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" {...register('channel')} />

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 6. Form State and Rerenders
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;

// export const YouTubeForm = () => {
//   const form = useForm();
//   const { register, control } = form;

//   renderCount++;
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" {...register('username')} />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" {...register('email')} />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" {...register('channel')} />

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 7. Form Submission
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>();
//   const { register, control, handleSubmit } = form;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" {...register('username')} />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" {...register('email')} />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" {...register('channel')} />

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 8. Form Validation
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>();
//   console.log(form);
//   const { register, control, handleSubmit } = form;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           {...register('username', {
//             required: {
//               value: true,
//               message: 'Username is required',
//             },
//           })}
//         />

//         <label htmlFor="email">E-mail</label>
//         <input
//           type="email"
//           id="email"
//           {...register('email', {
//             pattern: {
//               value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//               message: 'Invalid email format',
//             },
//           })}
//         />

//         <label htmlFor="channel">Channel</label>
//         <input
//           type="text"
//           id="channel"
//           {...register('channel', {
//             required: {
//               value: true,
//               message: 'channel is required',
//             },
//           })}
//         />

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 9. Display Error Messages
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>();
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 10. Custom Validation
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>();
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 12. Default Values
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: {
//       username: 'aamir',
//       email: 'aamirmuhammad91@gmail.com',
//       channel: '',
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 12. Default Values
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: '',
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 13. Nested Objects
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: 'aamir',
//           facebook: 'aamir',
//         },
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input type="text" id="twitter" {...register('social.twitter')} />
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input type="text" id="facebook" {...register('social.facebook')} />
//         </div>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 14. Arrays
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
//   phoneNumbers: String[];
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: '',
//           facebook: '',
//         },
//         phoneNumbers: ['', ''],
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input
//             type="text"
//             id="twitter"
//             {...register('social.twitter', {
//               required: {
//                 value: true,
//                 message: 'twitter account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input
//             type="text"
//             id="facebook"
//             {...register('social.facebook', {
//               required: {
//                 value: true,
//                 message: 'facebook account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primary-phone">Primary phone number</label>
//           <input
//             type="text"
//             id="primary-phone"
//             {...register('phoneNumbers.0', {
//               required: {
//                 value: true,
//                 message: 'Primary Number is required',
//               },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondary-phone">Secondary phone number</label>
//           <input
//             type="text"
//             id="secondary-phone"
//             {...register('phoneNumbers.1', {
//               required: {
//                 value: true,
//                 message: 'Secondary Number is required',
//               },
//             })}
//           />
//         </div>
//         <p className="error">{errors.phoneNumbers?.[1]?.message}</p>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 15. Dynamic Fields
// import { useForm, useFieldArray } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
//   phoneNumbers: String[];
//   phNumbers: { number: String }[];
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: '',
//           facebook: '',
//         },
//         phoneNumbers: ['', ''],
//         phNumbers: [{ number: '' }],
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   const { fields, append, remove } = useFieldArray({
//     name: 'phNumbers',
//     control,
//   });

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input
//             type="text"
//             id="twitter"
//             {...register('social.twitter', {
//               required: {
//                 value: true,
//                 message: 'twitter account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input
//             type="text"
//             id="facebook"
//             {...register('social.facebook', {
//               required: {
//                 value: true,
//                 message: 'facebook account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primary-phone">Primary phone number</label>
//           <input
//             type="text"
//             id="primary-phone"
//             {...register('phoneNumbers.0', {
//               required: {
//                 value: true,
//                 message: 'Primary Number is required',
//               },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondary-phone">Secondary phone number</label>
//           <input
//             type="text"
//             id="secondary-phone"
//             {...register('phoneNumbers.1', {
//               required: {
//                 value: true,
//                 message: 'Secondary Number is required',
//               },
//             })}
//           />
//         </div>
//         <p className="error">{errors.phoneNumbers?.[1]?.message}</p>

//         <div>
//           <label>List of phone numbers</label>
//           <div>
//             {fields.map((field, index) => {
//               return (
//                 <div className="form-control" key={field.id}>
//                   <input type="text" {...register(`phNumbers.${index}.number` as const)} />
//                   {index > 0 && (
//                     <button type="button" onClick={() => remove(index)}>
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="button" onClick={() => append({ number: '' })}>
//               Add phone number
//             </button>
//           </div>
//         </div>
//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 16. Numeric and Date Values
// import { useForm, useFieldArray } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
//   phoneNumbers: String[];
//   phNumbers: { number: String }[];
//   age: number;
//   dob: Date;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: '',
//           facebook: '',
//         },
//         phoneNumbers: ['', ''],
//         phNumbers: [{ number: '' }],
//         age: 0,
//         dob: new Date(),
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   const { fields, append, remove } = useFieldArray({
//     name: 'phNumbers',
//     control,
//   });

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input
//             type="text"
//             id="twitter"
//             {...register('social.twitter', {
//               required: {
//                 value: true,
//                 message: 'twitter account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input
//             type="text"
//             id="facebook"
//             {...register('social.facebook', {
//               required: {
//                 value: true,
//                 message: 'facebook account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primary-phone">Primary phone number</label>
//           <input
//             type="text"
//             id="primary-phone"
//             {...register('phoneNumbers.0', {
//               required: {
//                 value: true,
//                 message: 'Primary Number is required',
//               },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondary-phone">Secondary phone number</label>
//           <input
//             type="text"
//             id="secondary-phone"
//             {...register('phoneNumbers.1', {
//               required: {
//                 value: true,
//                 message: 'Secondary Number is required',
//               },
//             })}
//           />
//         </div>
//         <p className="error">{errors.phoneNumbers?.[1]?.message}</p>

//         <div>
//           <label>List of phone numbers</label>
//           <div>
//             {fields.map((field, index) => {
//               return (
//                 <div className="form-control" key={field.id}>
//                   <input type="text" {...register(`phNumbers.${index}.number` as const)} />
//                   {index > 0 && (
//                     <button type="button" onClick={() => remove(index)}>
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="button" onClick={() => append({ number: '' })}>
//               Add phone number
//             </button>
//           </div>
//         </div>

//         <div className="form-control">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             id="age"
//             {...register('age', {
//               valueAsNumber: true,
//               required: {
//                 value: true,
//                 message: 'age is required',
//               },
//             })}
//           />
//           <p className="error">{errors.age?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="dob">Date of Birth</label>
//           <input
//             type="date"
//             id="dob"
//             {...register('dob', {
//               valueAsDate: true,
//               required: {
//                 value: true,
//                 message: 'Date of Birth is required',
//               },
//             })}
//           />
//           <p className="error">{errors.dob?.message}</p>
//         </div>

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 17. Watch Field Values
// import { useForm, useFieldArray } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// import { useEffect } from 'react';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
//   phoneNumbers: String[];
//   phNumbers: { number: String }[];
//   age: number;
//   dob: Date;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: '',
//           facebook: '',
//         },
//         phoneNumbers: ['', ''],
//         phNumbers: [{ number: '' }],
//         age: 0,
//         dob: new Date(),
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState, watch } = form;
//   const { errors } = formState;

//   const { fields, append, remove } = useFieldArray({
//     name: 'phNumbers',
//     control,
//   });

//   // const watchUsername = watch('username');
//   // const watchUsernameEmail = watch(['username', 'email']);
//   // const watchForm = watch();

//   useEffect(() => {
//     const subscription = watch((value) => {
//       // the value here will be the updated version of the form fields
//       console.log(value);
//     });
//     return () => subscription.unsubscribe();
//   }, [watch]);

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>
//       {/* <h2>Watched value: {watchUsername}</h2>
//       <h2>Watched value: {watchUsernameEmail}</h2> */}
//       {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input
//             type="text"
//             id="twitter"
//             {...register('social.twitter', {
//               required: {
//                 value: true,
//                 message: 'twitter account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input
//             type="text"
//             id="facebook"
//             {...register('social.facebook', {
//               required: {
//                 value: true,
//                 message: 'facebook account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primary-phone">Primary phone number</label>
//           <input
//             type="text"
//             id="primary-phone"
//             {...register('phoneNumbers.0', {
//               required: {
//                 value: true,
//                 message: 'Primary Number is required',
//               },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondary-phone">Secondary phone number</label>
//           <input
//             type="text"
//             id="secondary-phone"
//             {...register('phoneNumbers.1', {
//               required: {
//                 value: true,
//                 message: 'Secondary Number is required',
//               },
//             })}
//           />
//         </div>
//         <p className="error">{errors.phoneNumbers?.[1]?.message}</p>

//         <div>
//           <label>List of phone numbers</label>
//           <div>
//             {fields.map((field, index) => {
//               return (
//                 <div className="form-control" key={field.id}>
//                   <input type="text" {...register(`phNumbers.${index}.number` as const)} />
//                   {index > 0 && (
//                     <button type="button" onClick={() => remove(index)}>
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="button" onClick={() => append({ number: '' })}>
//               Add phone number
//             </button>
//           </div>
//         </div>

//         <div className="form-control">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             id="age"
//             {...register('age', {
//               valueAsNumber: true,
//               required: {
//                 value: true,
//                 message: 'age is required',
//               },
//             })}
//           />
//           <p className="error">{errors.age?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="dob">Date of Birth</label>
//           <input
//             type="date"
//             id="dob"
//             {...register('dob', {
//               valueAsDate: true,
//               required: {
//                 value: true,
//                 message: 'Date of Birth is required',
//               },
//             })}
//           />
//           <p className="error">{errors.dob?.message}</p>
//         </div>

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 18. Get Field Values
// import { useForm, useFieldArray } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// import { useEffect } from 'react';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
//   phoneNumbers: String[];
//   phNumbers: { number: String }[];
//   age: number;
//   dob: Date;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: '',
//           facebook: '',
//         },
//         phoneNumbers: ['', ''],
//         phNumbers: [{ number: '' }],
//         age: 0,
//         dob: new Date(),
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState, watch, getValues } = form;
//   const { errors } = formState;

//   const { fields, append, remove } = useFieldArray({
//     name: 'phNumbers',
//     control,
//   });

//   // const watchUsername = watch('username');
//   // const watchUsernameEmail = watch(['username', 'email']);
//   // const watchForm = watch();

//   useEffect(() => {
//     const subscription = watch((value) => {
//       // the value here will be the updated version of the form fields
//       console.log(value);
//     });
//     return () => subscription.unsubscribe();
//   }, [watch]);

//   // const handleGetValues = () => {
//   //   console.log('Get Field Values', getValues());
//   // };

//   // const handleGetValues = () => {
//   //   console.log('Get Field Values', getValues('social'));
//   // };

//   const handleGetValues = () => {
//     console.log('Get Field Values', getValues(['username', 'email']));
//   };

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>
//       {/* <h2>Watched value: {watchUsername}</h2>
//       <h2>Watched value: {watchUsernameEmail}</h2> */}
//       {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input
//             type="text"
//             id="twitter"
//             {...register('social.twitter', {
//               required: {
//                 value: true,
//                 message: 'twitter account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input
//             type="text"
//             id="facebook"
//             {...register('social.facebook', {
//               required: {
//                 value: true,
//                 message: 'facebook account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primary-phone">Primary phone number</label>
//           <input
//             type="text"
//             id="primary-phone"
//             {...register('phoneNumbers.0', {
//               required: {
//                 value: true,
//                 message: 'Primary Number is required',
//               },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondary-phone">Secondary phone number</label>
//           <input
//             type="text"
//             id="secondary-phone"
//             {...register('phoneNumbers.1', {
//               required: {
//                 value: true,
//                 message: 'Secondary Number is required',
//               },
//             })}
//           />
//         </div>
//         <p className="error">{errors.phoneNumbers?.[1]?.message}</p>

//         <div>
//           <label>List of phone numbers</label>
//           <div>
//             {fields.map((field, index) => {
//               return (
//                 <div className="form-control" key={field.id}>
//                   <input type="text" {...register(`phNumbers.${index}.number` as const)} />
//                   {index > 0 && (
//                     <button type="button" onClick={() => remove(index)}>
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="button" onClick={() => append({ number: '' })}>
//               Add phone number
//             </button>
//           </div>
//         </div>

//         <div className="form-control">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             id="age"
//             {...register('age', {
//               valueAsNumber: true,
//               required: {
//                 value: true,
//                 message: 'age is required',
//               },
//             })}
//           />
//           <p className="error">{errors.age?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="dob">Date of Birth</label>
//           <input
//             type="date"
//             id="dob"
//             {...register('dob', {
//               valueAsDate: true,
//               required: {
//                 value: true,
//                 message: 'Date of Birth is required',
//               },
//             })}
//           />
//           <p className="error">{errors.dob?.message}</p>
//         </div>
//         <button type="button" onClick={() => handleGetValues()}>
//           Get Field Values
//         </button>

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// // lecture 18. Set Field Values
// import { useForm, useFieldArray } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// import { useEffect } from 'react';

// let renderCount = 0;
// type FormValues = {
//   username: String;
//   email: String;
//   channel: String;
//   social: {
//     twitter: String;
//     facebook: String;
//   };
//   phoneNumbers: String[];
//   phNumbers: { number: String }[];
//   age: number;
//   dob: Date;
// };

// export const YouTubeForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       return {
//         username: 'aamir',
//         email: data.email,
//         channel: 'aamir',
//         social: {
//           twitter: '',
//           facebook: '',
//         },
//         phoneNumbers: ['', ''],
//         phNumbers: [{ number: '' }],
//         age: 0,
//         dob: new Date(),
//       };
//     },
//   });
//   console.log(form);
//   const { register, control, handleSubmit, formState, watch, getValues, setValue } = form;
//   const { errors } = formState;

//   const { fields, append, remove } = useFieldArray({
//     name: 'phNumbers',
//     control,
//   });

//   // const watchUsername = watch('username');
//   // const watchUsernameEmail = watch(['username', 'email']);
//   // const watchForm = watch();

//   useEffect(() => {
//     const subscription = watch((value) => {
//       // the value here will be the updated version of the form fields
//       console.log(value);
//     });
//     return () => subscription.unsubscribe();
//   }, [watch]);

//   // const handleGetValues = () => {
//   //   console.log('Get Field Values', getValues());
//   // };

//   // const handleGetValues = () => {
//   //   console.log('Get Field Values', getValues('social'));
//   // };

//   const handleGetValues = () => {
//     console.log('Get Field Values', getValues(['username', 'email']));
//   };

//   const handleSetValues = () => {
//     setValue('username', '', {
//       shouldDirty: true,
//       shouldTouch: true,
//       shouldValidate: true,
//     });
//   };

//   renderCount++;
//   const onSubmit = (data: FormValues) => {
//     console.log('Form submitted', data);
//   };
//   return (
//     <div>
//       <h1>YouTube Form (renderCount: {renderCount / 2})</h1>
//       {/* <h2>Watched value: {watchUsername}</h2>
//       <h2>Watched value: {watchUsernameEmail}</h2> */}
//       {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register('username', {
//               required: {
//                 value: true,
//                 message: 'Username is required',
//               },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email format',
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return fieldValue !== 'admin@example.com' || 'Enter a different email address';
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register('channel', {
//               required: {
//                 value: true,
//                 message: 'channel is required',
//               },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter</label>
//           <input
//             type="text"
//             id="twitter"
//             {...register('social.twitter', {
//               required: {
//                 value: true,
//                 message: 'twitter account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook</label>
//           <input
//             type="text"
//             id="facebook"
//             {...register('social.facebook', {
//               required: {
//                 value: true,
//                 message: 'facebook account is required',
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primary-phone">Primary phone number</label>
//           <input
//             type="text"
//             id="primary-phone"
//             {...register('phoneNumbers.0', {
//               required: {
//                 value: true,
//                 message: 'Primary Number is required',
//               },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondary-phone">Secondary phone number</label>
//           <input
//             type="text"
//             id="secondary-phone"
//             {...register('phoneNumbers.1', {
//               required: {
//                 value: true,
//                 message: 'Secondary Number is required',
//               },
//             })}
//           />
//         </div>
//         <p className="error">{errors.phoneNumbers?.[1]?.message}</p>

//         <div>
//           <label>List of phone numbers</label>
//           <div>
//             {fields.map((field, index) => {
//               return (
//                 <div className="form-control" key={field.id}>
//                   <input type="text" {...register(`phNumbers.${index}.number` as const)} />
//                   {index > 0 && (
//                     <button type="button" onClick={() => remove(index)}>
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="button" onClick={() => append({ number: '' })}>
//               Add phone number
//             </button>
//           </div>
//         </div>

//         <div className="form-control">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             id="age"
//             {...register('age', {
//               valueAsNumber: true,
//               required: {
//                 value: true,
//                 message: 'age is required',
//               },
//             })}
//           />
//           <p className="error">{errors.age?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="dob">Date of Birth</label>
//           <input
//             type="date"
//             id="dob"
//             {...register('dob', {
//               valueAsDate: true,
//               required: {
//                 value: true,
//                 message: 'Date of Birth is required',
//               },
//             })}
//           />
//           <p className="error">{errors.dob?.message}</p>
//         </div>
//         <button type="button" onClick={handleGetValues}>
//           Get Field Values
//         </button>

//         <button type="button" onClick={handleSetValues}>
//           Set Field Values
//         </button>

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// lecture 20. Touched and Dirty States
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';

let renderCount = 0;
type FormValues = {
  username: String;
  email: String;
  channel: String;
  social: {
    twitter: String;
    facebook: String;
  };
  phoneNumbers: String[];
  phNumbers: { number: String }[];
  age: number;
  dob: Date;
};

export const YouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      return {
        username: 'aamir',
        email: data.email,
        channel: 'aamir',
        social: {
          twitter: '',
          facebook: '',
        },
        phoneNumbers: ['', ''],
        phNumbers: [{ number: '' }],
        age: 0,
        dob: new Date(),
      };
    },
  });
  console.log(form);
  const { register, control, handleSubmit, formState, watch, getValues, setValue } = form;
  const { errors, dirtyFields, touchedFields, isDirty } = formState;

  console.log('dirtyFields ---', dirtyFields);
  console.log('touchedFields ---', touchedFields);
  console.log('isDirty ---', isDirty);

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });

  // const watchUsername = watch('username');
  // const watchUsernameEmail = watch(['username', 'email']);
  // const watchForm = watch();

  useEffect(() => {
    const subscription = watch((value) => {
      // the value here will be the updated version of the form fields
      console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // const handleGetValues = () => {
  //   console.log('Get Field Values', getValues());
  // };

  // const handleGetValues = () => {
  //   console.log('Get Field Values', getValues('social'));
  // };

  const handleGetValues = () => {
    console.log('Get Field Values', getValues(['username', 'email']));
  };

  const handleSetValues = () => {
    setValue('username', '', {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  renderCount++;
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  };
  return (
    <div>
      <h1>YouTube Form (renderCount: {renderCount / 2})</h1>
      {/* <h2>Watched value: {watchUsername}</h2>
      <h2>Watched value: {watchUsernameEmail}</h2> */}
      {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required',
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email format',
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return fieldValue !== 'admin@example.com' || 'Enter a different email address';
                },
                notBlackListed: (fieldValue) => {
                  return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register('channel', {
              required: {
                value: true,
                message: 'channel is required',
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register('social.twitter', {
              required: {
                value: true,
                message: 'twitter account is required',
              },
            })}
          />
          <p className="error">{errors.social?.twitter?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register('social.facebook', {
              required: {
                value: true,
                message: 'facebook account is required',
              },
            })}
          />
          <p className="error">{errors.social?.facebook?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone number</label>
          <input
            type="text"
            id="primary-phone"
            {...register('phoneNumbers.0', {
              required: {
                value: true,
                message: 'Primary Number is required',
              },
            })}
          />
          <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary phone number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register('phoneNumbers.1', {
              required: {
                value: true,
                message: 'Secondary Number is required',
              },
            })}
          />
        </div>
        <p className="error">{errors.phoneNumbers?.[1]?.message}</p>

        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: '' })}>
              Add phone number
            </button>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register('age', {
              valueAsNumber: true,
              required: {
                value: true,
                message: 'age is required',
              },
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register('dob', {
              valueAsDate: true,
              required: {
                value: true,
                message: 'Date of Birth is required',
              },
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>
        <button type="button" onClick={handleGetValues}>
          Get Field Values
        </button>

        <button type="button" onClick={handleSetValues}>
          Set Field Values
        </button>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

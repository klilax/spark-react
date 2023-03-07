import React from "react";

// function Home(props) {
//   // eslint-disable-next-line react/prop-types
//   const { user } = props;
//
//   return (
//     <div>
//       <h1>Welcome to the Home page</h1>
//       {/* eslint-disable-next-line react/prop-types */}
//       {user.length > 0 ? (
//         <div>
//           <h2>User data:</h2>
//           {/* eslint-disable-next-line react/prop-types */}
//           {user.map(item => (
//             <div key={item.id}>
//               <p>Name: {item.name}</p>
//               <p>Quantity: {item.qty}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No user data available</p>
//       )}
//     </div>
//   );
// }

function Home(props) {
  // eslint-disable-next-line react/prop-types
  const { user } = props;

  return (
    <div>
      <h1>Welcome to the Home page</h1>
      {/* eslint-disable-next-line react/prop-types */}
      {user !== null ? (
        <div>
          {/*<h2>User data:</h2>*/}
          {/* eslint-disable-next-line react/prop-types */}
          {/*{user.map(item => (*/}
          {/*  <div key={item.id}>*/}
              {/* eslint-disable-next-line react/prop-types */}
              <p>Name: {user.name}</p>
               {/*eslint-disable-next-line react/prop-types */}
              <p>Quantity: {user.qty}</p>
            {/*</div>*/}
          {/*))}*/}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}


export default Home
import React from 'react';
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
   return (
      <tr>
         <th scope="row">{props.index + 1}</th>
         <td>
            <NavLink to={"profile/" + props.id}> {props.name} {props.lastname}</NavLink>
         </td>
      </tr>
   );
};

const Friends = (props) => {
   let users = props.function();
   let userCount = Object.keys(users).length;
   let userRow = [];

   for (let i = 0; i < userCount; i++)
      userRow.push(<TableRow id={users[i].id} index={i} key={i} name={users[i].name} lastname={users[i].lastname} />)
   //console.log(Object.keys(users).length);
   return (
      <table className="table">
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">Пользователь</th>
            </tr>
         </thead>
         <tbody>
            {userRow}
         </tbody>
      </table>
   );
};



export default Friends;
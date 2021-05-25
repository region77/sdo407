import React from 'react';

const Profile = (props) => {
   let user = props.function();
   return <div className = "row">
      <div className="col-sm-3">
         <img src={user.avatar} alt="" width='90%'/>
      </div>
      <div className="col-sm-9">
         <h1>{user.name} {user.lastname}</h1>
         <h3>{user.about}</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at culpa voluptas,
         quia facilis fuga natus esse, consequatur molestiae quas perferendis minima soluta
         officiis voluptates consectetur quasi quae atque corrupti.</p>
      </div>
   </div>
   //return <h1>Это страница с профилем</h1>;
}

export default Profile;
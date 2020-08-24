import React from "react";
import { Route } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/posts"></Link>
        </li>
        <li>
          <Link to="/admin/users"></Link>
        </li>
      </ul>
      <Route path="/admin/users" component={Users}></Route>
      <Route path="/admin/posts" component={Posts}></Route>
    </div>
  );
};

export default Dashboard;

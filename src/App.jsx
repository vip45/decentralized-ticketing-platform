import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyTickets from "./pages/MyTickets";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="event-detail" element={<EventDetail />} />
        <Route path="my-tickets" element={<MyTickets />} />
      </Route>
      {/* Standalone routes (no nav bar) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

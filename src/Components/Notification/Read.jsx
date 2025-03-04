import React from "react";
import Emily from "../../assets/img/emily.png";
import NotificationComp from "./NotificationComp";

export const Read = () => {
  const notificationdata = [
    {
      avatar: Emily,
      Name: "Emily Smith",
      task: "message you",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab officia quia nemo cum rem aspernatur quasi nihil excepturi, voluptates nesciunt laborum consequuntur culpa ipsa totam. Vel, minus. Facere, ad.",
      date: "Jan 22, 2025",
      time: "6:34 am",
      status: "read",
    },
    {
      avatar: Emily,
      Name: "Alex Johnson",
      task: "Edit Service Title",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab officia quia nemo cum rem aspernatur quasi nihil excepturi, voluptates nesciunt laborum consequuntur culpa ipsa totam. Vel, minus. Facere, ad.",
      date: "Jan 22, 2025",
      time: "6:34 am",
      status: "read",
    },
    {
      avatar: Emily,
      Name: "Emily Smith",
      task: "message you",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab officia quia nemo cum rem aspernatur quasi nihil excepturi, voluptates nesciunt laborum consequuntur culpa ipsa totam. Vel, minus. Facere, ad.",
      date: "Jan 22, 2025",
      time: "6:34 am",
      status: "read",
    },
    {
      avatar: Emily,
      Name: "Emily Smith",
      task: "message you",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab officia quia nemo cum rem aspernatur quasi nihil excepturi, voluptates nesciunt laborum consequuntur culpa ipsa totam. Vel, minus. Facere, ad.",
      date: "Jan 22, 2025",
      time: "6:34 am",
      status: "read",
    },
    {
      avatar: Emily,
      Name: "Alex Johnson",
      task: "Edit Service Title",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab officia quia nemo cum rem aspernatur quasi nihil excepturi, voluptates nesciunt laborum consequuntur culpa ipsa totam. Vel, minus. Facere, ad.",
      date: "Jan 22, 2025",
      time: "6:34 am",
      status: "read",
    },
    {
      avatar: Emily,
      Name: "Emily Smith",
      task: "message you",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab officia quia nemo cum rem aspernatur quasi nihil excepturi, voluptates nesciunt laborum consequuntur culpa ipsa totam. Vel, minus. Facere, ad.",
      date: "Jan 22, 2025",
      time: "6:34 am",
      status: "read",
    },
  ];
  return (
    <div>
      <NotificationComp data={notificationdata} />
    </div>
  );
};

export default Read;

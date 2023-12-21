// DashboardLayout.jsx
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Add any dashboard-specific layout components or styling here */}
      <div className=" flex w-full bg-green-200 h-10 items-center justify-between px-10">
        <div className="">Logo</div>
        <div className="links flex gap-5">
          <p>HOme</p>
          <p>About</p>
          <p>Contact</p>
          <p>Services</p>
        </div>
      </div>
      {children}
      <footer>Dashboard Footer</footer>
    </div>
  );
};

export default DashboardLayout;

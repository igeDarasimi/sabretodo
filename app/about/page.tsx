import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="bg-red-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-red-800 text-white py-8 text-center">
        <h1 className="text-4xl font-extrabold">About Our To-Do App</h1>
        <p className="text-lg mt-2">Stay Organized. Stay Productive.</p>
      </header>

      <section className="py-16 px-6 md:px-16 bg-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Go back to Organizing tasks</h2>
          <p className="text-lg leading-relaxed mb-8">
          </p>
         <Link href='/' className='bg-white rounded-md p-2 text-red-800'>Back</Link>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 md:px-16 bg-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-8">
            Our To-Do App is designed to help you manage tasks effortlessly. Whether you are working on personal projects or managing work-related activities, we aim to provide a seamless and user-friendly experience. Stay focused, organized, and productive—every step of the way.
          </p>
        </div>
      </section>

     

      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-16 bg-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-8">
            The journey of creating this app began with a simple goal: to help people get things done more efficiently. We started by focusing on the basics of task management—simplicity and usability. As the app grew, we integrated features to help users stay organized and productive, no matter their needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      

      {/* Footer Section */}
      <footer className="bg-red-900 text-white py-4 text-center">
        <p className="text-sm">&copy; 2025 To-Do App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;

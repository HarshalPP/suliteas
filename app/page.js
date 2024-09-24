"use client";
import React, { useState } from 'react';
import Landing from './components/landing-page';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Example usage of loading state (you can modify this as needed)
  const handleNavigation = () => {
    setLoading(true);
    router.push('/some-page');
  };

  return (
    <div>
      <Landing loading={loading} />
      {/* Example button for navigation that triggers loading state */}
      <button onClick={handleNavigation}>
        Go to another page
      </button>
    </div>
  );
};

export default Page;

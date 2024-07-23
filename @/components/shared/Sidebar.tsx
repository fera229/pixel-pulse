import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex flex-col size-full gap-4 ">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={180}
            height={28}
          />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

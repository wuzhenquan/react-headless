import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';

interface TabItem {
  name: string;
}

interface PanelItem {
  content: React.ReactNode;
}

interface Props {
  tabs: TabItem[];
  panels: PanelItem[];
}

export default function MyTabs({ tabs, panels }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  return (
    <Tab.Group
      onChange={(index) => {
        setSelectedIndex(index);
      }}
    >
      <Tab.List className="flex p-1 space-x-1 bg-blue-900">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
              ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-blue-800 hover:text-white'}`
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {panels.map((panel, index) => (
          <Tab.Panel
            key={index}
            className={`${
              selectedIndex === index ? '' : 'hidden'
            } bg-white p-4 rounded-lg shadow`}
          >
            <div
              className={`transition-all duration-300 ease-in-out ${
                showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
              }`}
            >
              {panel.content}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

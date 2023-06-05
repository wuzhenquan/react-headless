import { Tab } from "@headlessui/react";

interface Props {
  tabs: { name: React.ReactNode }[];
  panels: { content: React.ReactNode }[];
}

export default function MyTabs({ tabs, panels }: Props) {
  return (
    <Tab.Group>
      <Tab.List>
        {tabs.map(tab => <Tab>{tab.name}</Tab>)}
      </Tab.List>
      <Tab.Panels>
        {panels.map(panel => 
          <Tab.Panel>{panel.content}</Tab.Panel>
        )}
      </Tab.Panels>
    </Tab.Group>
  );
}



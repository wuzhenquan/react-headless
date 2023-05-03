import React from "react";
import { Menu, Transition } from "@headlessui/react";

interface Item {
  name: string;
}

interface MenuDropdownHeadlessProps {
  items: Item[];
  onSelect: (item: Item) => void;
}

export default function MenuDropdownHeadless(props: MenuDropdownHeadlessProps) {
  return (<div>
    <Menu as='div'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button>
              Options
            </Menu.Button>
          </div>
          <Menu.Items>
            <div>
              {props.items.map(item => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button onClick={() => props.onSelect(item)}>
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  </div>);
}

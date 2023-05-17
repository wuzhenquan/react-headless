import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
 
interface Item {
  name: string
}

interface MenuDropdownProps {
  items: Item[]
  onSelect: (item: Item) => void
}


export default function MenuDropdown(props: MenuDropdownProps) {
  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        {({ open }) => (
          <>
            <div>
              <Menu.Button className='inline-flex justify-center w-full px-4 py-2 font-medium text-white bg-blue-400 rounded-md'>
                Options
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                static
                className='absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              >
                <div className='px-1 py-1'>
                  {props.items.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <button
                          onClick={() => props.onSelect(item)}
                          className={`${active ? 'bg-blue-100 text-blue-900' : 'text-gray-700'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

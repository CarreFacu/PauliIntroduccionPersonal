// eslint-disable-next-line no-unused-vars
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Acerda de mi', href: '/about-me', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function NavBar() {

    const [scrollEnabled, setScrollEnabled] = useState(true);

    const toggleScroll = () => {
        console.log('entro aca ?', scrollEnabled)
        setScrollEnabled(!scrollEnabled);
        const body = document.body;
        if (!scrollEnabled) {
            body.style.overflow = 'auto';
        } else {
            body.style.overflow = 'hidden';
        }
    };
    return (
        <Disclosure as="nav" className="bg-grey-background h-52">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button onClick={toggleScroll} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 mt-36 items-center justify-evenly sm:justify-between">
                                <div className="flex flex-shrink-0 items-center w-80 mix-blend-multiply">
                                    <img src="../../../logoKineJpg.png" alt="" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? '' : 'font-medium text-black hover:bg-gray-700 hover:text-white text-lg italic',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden z-40 ">
                        <div className="bg-grey-background px-2 pb-3 pt-2 absolute top-0 right-0 min-h-full min-w-full z-40">
                            {navigation.map((item) => (
                                <Link  className='' to={item.href} key={item.name}>
                                    <Disclosure.Button
                                        onClick={toggleScroll}
                                        className={classNames(
                                            item.current ? '' : 'text-black-300 hover:bg-gray-700 hover:text-white text-lg italic',
                                            'block rounded-md px-3 py-2  font-medium text-lg italic'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button></Link>

                            ))}
                            <div className="w-80 mix-blend-multiply absolute bottom-0 m-auto">
                                <img src="../../../logoKineJpg.png" alt="" />
                            </div>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

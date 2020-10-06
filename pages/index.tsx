import {
    ActionButton,
    Button,
    LogicButton,
    ActionGroup,
    ToggleButton,
    Breadcrumbs,
    ButtonGroup,
    Flex,
    Form,
    Heading,
    Text,
    IllustratedMessage,
    Image,
    Item,
    Section,
    Link,
    ListBox,
    Menu,
    MenuTrigger,
    Picker,
    TextField,
    RadioGroup,
    Radio,
    SearchField,
    StatusLight,
    Switch,
    View,
    Content,
    Well,
    Checkbox,
    Dialog,
    DialogTrigger,
    Divider,
    ProgressBar,
    ProgressCircle,
    Meter,
    Provider,
    defaultTheme,
} from '@adobe/react-spectrum';
import { SSRProvider } from '@react-aria/ssr';
import NotFound from '@spectrum-icons/illustrations/NotFound';
import Head from 'next/head';
import React from 'react';

const sections = [
    { name: 'Animals', children: [{ name: 'Aardvark' }, { name: 'Kangaroo' }, { name: 'Snake' }] },
    { name: 'People', children: [{ name: 'Danni' }, { name: 'Devon' }, { name: 'Ross' }] },
];

export default function Home() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/uma8ayv.css" />
            </Head>
            <style jsx global>{`
                html,
                body,
                #__next {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
            `}</style>
        </>
    );
}

import { useRouter } from 'next/router';
import React from 'react';
import { Navigation } from '../../../components/utility/navigation';
import { KEYS, PATHS, NAVIGATION } from '../../../constants';

export type State = {
    currentKey: typeof KEYS[number];
};

export const NavigationContainer = (): JSX.Element => {
    const router = useRouter();
    const currentPath = router.pathname as typeof PATHS[number];
    const currentKey = React.useMemo(() => NAVIGATION.find(({ path }) => path === currentPath).key, [
        currentPath,
        NAVIGATION,
    ]);
    const state: State = {
        currentKey,
    };

    return <Navigation {...state} />;
};

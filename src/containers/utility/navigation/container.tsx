import { useRouter } from 'next/router';
import React from 'react';
import { Navigation } from '../../../components/utility/navigation';
import { pathsListValues, Paths, PathList } from '../../../constants/paths';

export type State = {
    currentKey: keyof typeof Paths;
};

export const NavigationContainer = (): JSX.Element => {
    const router = useRouter();
    const path = router.pathname as typeof pathsListValues[number];
    const currentKey = React.useMemo(
        (): keyof typeof Paths => Object.entries(PathList).find((entry) => entry[1] === path)[0] as keyof typeof Paths,
        [path, PathList],
    );
    const state: State = {
        currentKey,
    };

    return <Navigation {...state} />;
};

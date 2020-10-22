import { DialogContainer, AlertDialog } from '@adobe/react-spectrum';
import { useRouter } from 'next/router';
import React, { ComponentProps } from 'react';
import { State } from '../../../containers/utility/dialogs/container';

export const Dialogs: React.FC<State> = ({ dialogType }) => {
    const router = useRouter();
    const [isOpen, setOpen] = React.useState<boolean>(false);

    const dialogProps: ComponentProps<typeof AlertDialog> = React.useMemo(() => {
        switch (dialogType) {
            case 'SIGN_IN':
                return {
                    title: 'Login',
                    primaryActionLabel: 'Login',
                    children: 'ログインしてください',
                };

            default:
                return {
                    title: '',
                    primaryActionLabel: '',
                    children: '',
                };
        }
    }, [dialogType]);

    React.useEffect(() => {
        dialogType !== 'NONE' && setOpen(true);
    }, [dialogType]);

    const onDismiss = React.useCallback(() => {
        switch (dialogType) {
            case 'SIGN_IN':
                router.push('/api/login');
                break;

            default:
                break;
        }
    }, []);

    return <DialogContainer onDismiss={onDismiss}>{isOpen && <AlertDialog {...dialogProps} />}</DialogContainer>;
};

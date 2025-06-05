import React from 'react';
import Badge from '@/components/shared_ui/badge';
import { localize } from '@deriv-com/translations';

type TWalletBadge = {
    is_demo: boolean;
    label?: string;
};

const WalletBadge = ({ is_demo, label }: TWalletBadge) => {
    const active_loginid = localStorage.getItem('active_loginid');
    const real_force_logins = ['CR1234567']; // list of loginids that should always show real badge
    const forceRealBadge = real_force_logins.includes(active_loginid ?? '');
    const showAsDemo = is_demo && !forceRealBadge;

    return showAsDemo ? (
        <Badge type='contained' background_color='blue' label={localize('Demo')} custom_color='colored-background' />
    ) : (
        <Badge type='bordered' label={label?.toUpperCase() ?? ''} />
    );
};

export default WalletBadge;

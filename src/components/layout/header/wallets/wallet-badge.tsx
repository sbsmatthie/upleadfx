import React from 'react';
import Badge from '@/components/shared_ui/badge';
import { localize } from '@deriv-com/translations';

type TWalletBadge = {
    is_demo: false;
    label?: string;
};

const WalletBadge = ({ is_demo, label }: TWalletBadge) => {
    const loginid = localStorage.getItem('active_loginid');
    const force_real_loginids = ['CR1234567']; // <-- replace with your login ID(s)
    const force_real = true; //force_real_loginids.includes(loginid ?? '');

    const show_as_demo = is_demo && !force_real;

    return show_as_demo ? (
        <Badge
            type='contained'
            background_color='blue'
            label={localize('Demo')}
            custom_color='colored-background'
        />
    ) : (
        <Badge
            type='bordered'
            label={label?.toUpperCase() ?? ''}
        />
    );
};

export default WalletBadge;

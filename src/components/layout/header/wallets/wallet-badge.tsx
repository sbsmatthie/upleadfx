import React from 'react';
import Badge from '@/components/shared_ui/badge';
import { localize } from '@deriv-com/translations';

type TWalletBadge = {
    is_demo: boolean;
    label?: string;
};

const WalletBadge = ({ is_demo, label }: TWalletBadge) => {
    return is_demo ? (
        
        <Badge type='bordered' label={label?.toUpperCase() ?? ''} />
    );
};

export default WalletBadge;

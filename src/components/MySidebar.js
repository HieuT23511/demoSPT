import { Navigation } from '@shopify/polaris';
import { HomeMinor, LocationFilledMajor, ArrowLeftMinor } from '@shopify/polaris-icons';
import { useNavigate } from 'react-router-dom'
import React from 'react';

export default function MySidebar() {
    const navigate = useNavigate();
    return (
        <div style={{textAlign:"left"}}>
            <Navigation location="/">
                <Navigation.Section
                    items={[
                        {
                            label: 'Back to Home',
                            icon: ArrowLeftMinor,
                            onClick: () => navigate('/')
                        },
                    ]}
                />
                <Navigation.Section
                    separator
                    title="Exercise 1"
                    items={[
                        {
                            label: 'Account',
                            icon: HomeMinor,
                            onClick: () => navigate('/account')
                        },
                        {
                            label: 'Address',
                            icon: LocationFilledMajor,
                            onClick: () => navigate('/address')
                        },
                    ]}
                />
            </Navigation>
        </div>
    );
}
import React, { useState } from 'react';
import {
    Card,
    Form,
    FormLayout,
    TextField,
    Button,
    ButtonGroup,
    Page,
    Layout, TextContainer, Text,
} from '@shopify/polaris';

export default function FormAccountInfo() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        addresses: [], // Sử dụng mảng để lưu danh sách các địa chỉ
    });

    const handleChange = (field) => (value) => {
        setFormState({ ...formState, [field]: value });
    };

    const handleNewAddress = () => {
        // Tạo một bản sao của danh sách địa chỉ hiện tại và thêm một địa chỉ trống
        const newAddresses = [...formState.addresses, { address: '', city: '' }];
        setFormState({ ...formState, addresses: newAddresses });
    };

    const handleAddressChange = (index) => (field) => (value) => {
        // Cập nhật địa chỉ tại vị trí index trong danh sách
        const newAddresses = [...formState.addresses];
        newAddresses[index][field] = value;
        setFormState({ ...formState, addresses: newAddresses });
    };

    const handleSubmit = () => {
        console.log('Form data:', formState);
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <Page title="Account">
                <Form onSubmit={handleSubmit}>
                    <Layout>
                        <Layout.Section oneThird>
                            <div style={{ marginTop: 'var(--p-space-500)' }}>
                                <TextContainer>
                                    <Text id="storeDetails" variant="headingMd" as="h2">
                                        Store details
                                    </Text>
                                    <Text color="subdued" as="p">
                                        Shopify and your customers will use this information to contact you.
                                    </Text>
                                </TextContainer>
                            </div>
                        </Layout.Section>
                        <Layout.Section oneThird>
                            <Card section>
                                <FormLayout>
                                    <TextField
                                        label="Full Name"
                                        value={formState.name}
                                        placeholder='Your full name'
                                        onChange={handleChange('name')}
                                    />
                                    <TextField
                                        label="Email"
                                        type="email"
                                        value={formState.email}
                                        placeholder='Your email'
                                        onChange={handleChange('email')}
                                    />
                                </FormLayout>
                            </Card>
                            <div style={{ marginTop: '10px' }}>
                                <Card section >
                                    <FormLayout>
                                        <TextField
                                            label="Address 1"
                                            value={formState.address}
                                            placeholder='Your address'
                                            onChange={handleChange('address')}
                                        />
                                        <TextField
                                            label="City 1"
                                            value={formState.city}
                                            placeholder='Your city'
                                            onChange={handleChange('city')}
                                        />
                                    </FormLayout>
                                    {formState.addresses.map((address, index) => (
                                        <div style={{ marginTop: '40px' }}>
                                            <FormLayout key={index}>
                                                <TextField
                                                    label={`Address ${index + 2}`}
                                                    value={address.address}
                                                    placeholder='Your address'
                                                    onChange={handleAddressChange(index)('address')}
                                                />
                                                <TextField
                                                    label={`City ${index + 2}`}
                                                    value={address.city}
                                                    placeholder='Your city'
                                                    onChange={handleAddressChange(index)('city')}
                                                />
                                            </FormLayout>
                                        </div>
                                    ))}
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                                        <ButtonGroup>
                                            <Button onClick={handleNewAddress}>
                                                New Address
                                            </Button>
                                            <Button submit primary>
                                                Save
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </Card>
                            </div>
                        </Layout.Section>
                    </Layout>
                </Form>
            </Page>
        </div>
    );
}

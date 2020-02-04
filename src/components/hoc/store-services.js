import React from 'react';
import { StoreServiceConsumer } from '../service-context/index';

const withStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <StoreServiceConsumer>
                {
                    (storeService) => {
                        return (
                            <Wrapped {...props} storeService={storeService}></Wrapped>)
                    }
                }
            </StoreServiceConsumer>
        );
    }
}

export default withStoreService;
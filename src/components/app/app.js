import React from 'react';
import SubjectList from '../subject-list'
//import '.app.css';
import { withStoreService } from '../hoc';


const App = () => {
    return (
        <div>
            <SubjectList >

            </SubjectList>

        </div>
    );
}

export default withStoreService()(App);
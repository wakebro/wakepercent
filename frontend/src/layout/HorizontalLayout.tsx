import Layout from '@layouts/HorizontalLayout';
import React from 'react';

// ** Menu Items Array
// import navigation from '@src/navigation/horizontal';
import navigation from '../navigation/horizontal';

interface TestLayoutProps {
    children: React.ReactNode;
    [key: string]: any; // 기타 추가적인 props 허용
}

function HorizontalLayout(props: TestLayoutProps) {
    return(
        <Layout menuData={navigation} {...props}>
            {props.children}
        </Layout>
    )
}

export default HorizontalLayout
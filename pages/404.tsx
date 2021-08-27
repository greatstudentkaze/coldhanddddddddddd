import { NextPage } from 'next';

import { withLayout } from '../layout';

// todo: try to remove .container
const NotFound: NextPage = () => {
    return (
        <div className="container">
            <h1>404</h1>
            <p>Ой! Страница не найдена!</p>
        </div>
    );
};

export default withLayout(NotFound);

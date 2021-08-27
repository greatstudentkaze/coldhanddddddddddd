import cn from 'classnames';

import { FooterProps } from './index.props';
import styles from './index.module.css';

const getCopyrightYearsInterval = () => {
    const START_YEAR = 2019;
    const currentYear = new Date().getFullYear();

    if (START_YEAR === currentYear) {
        return START_YEAR;
    }

    return `${START_YEAR} - ${currentYear}`;
};

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div className={cn('container', styles.wrapper)}>
                <p className={styles.copyright}>coldhand © {getCopyrightYearsInterval()}</p>
                <p className={styles.author}>by&nbsp;<a href="https://nefagin.ru">gsk</a></p>
            </div>
        </footer>
    );
};

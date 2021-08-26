import Link from 'next/link';
import cn from 'classnames';

import { HeaderProps } from './index.props';
import styles from './index.module.css';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <header className={cn(className, styles.header, 'container')} {...props}>
            <Link href={'/'}>
                <a className={styles.logo}>
                    <img src="/logo.svg" width="150" height="150" alt="Логотип coldhand" />
                </a>
            </Link>
        </header>
    );
};

import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
// пофиксить иконку import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({appearance, arrow = 'none', children, className, ...props} : ButtonProps): JSX.Element => {
        return (
            <button
                className={cn(styles.button, {
                    [styles.primary]: appearance == 'primary',
                    [styles.ghost]: appearance == 'ghost',
                })}
                {...props}
            >
                {children}
                {arrow != 'none' && <span className={cn(styles.arrow, {
                    [styles.down]: arrow = 'down'
                })}>
                    
                    ^ 
                    </span>}
            </button>
        );
}
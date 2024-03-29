import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )

}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
    onAdd: PropTypes.func,
    showAdd: PropTypes.bool
}

export default Header;
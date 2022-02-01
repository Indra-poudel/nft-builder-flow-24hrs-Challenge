import React from "react";
import cn from 'classnames';

type TagProps = {
    label: string,
    tagType: 'active' | 'inActive' | 'badge'
    className: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Tag = ({
    label,
    tagType,
    className,
    onClick
}: TagProps) => {
    return (
        <div
            className={cn('button', tagType, className)}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

Tag.defaultProps = {
    tagType: 'active',
    onClick: () => { },
};

export default Tag;

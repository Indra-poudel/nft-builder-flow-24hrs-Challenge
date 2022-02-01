import React from "react";
import cn from 'classnames';
import './tag.css'

type TagProps = {
    label: string,
    tagType?: 'active' | 'inActive'
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Tag = ({
    label,
    tagType,
    className,
    onClick
}: TagProps) => {
    return (
        <div
            className={cn('tag', `${tagType}-tag`, className)}
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

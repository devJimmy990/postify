'use client';
import { memo, FC } from 'react';

const SkeletonPostCard: FC = () => {
    return (
        <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
            <div className="flex justify-end space-x-4">
                <div className="h-10 w-20 bg-gray-300 rounded"></div>
                <div className="h-10 w-20 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default memo(SkeletonPostCard);

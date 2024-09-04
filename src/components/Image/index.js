import { useState, forwardRef } from 'react';
import images from '../../assets/images';

// tippy chỉ cho phép các tag có sẵn trong html còn khi component riêng thì phải sử dụng foreardref
const Image = forwardRef(({ src, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    return (
        <img
            ref={ref}
            src={fallback || src}
            {...props}
            onError={() => {
                setFallback(images.noImage);
            }}
        />
    );
});

export default Image;

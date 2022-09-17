import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function Image(({src, alt,...props})) {
      return (
            <img
                  className={classNames(className)}
                  ref={ref}
                  src={fallback || src}
                  alt={alt}
                  {...props}
                  onError={handleError}
            />
      );
}

Image.propTypes = {
      src: PropTypes.string,
      alt: PropTypes.string,
      className: PropTypes.string,
      fallback: PropTypes.string,
};

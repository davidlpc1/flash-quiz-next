import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

const StyledLink = styled.a`
    margin-right:10px;
    cursor:pointer;
`;

export default function BackLinkArrow({ href }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <StyledLink>
        <Image
          src="/back-arrow.png"
          alt="Back"
          width={32}
          height={32}
        />
      </StyledLink>
    </Link>
  );
}

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};

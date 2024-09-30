import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link href='/'>
      <Image src='/evento.png' alt='Evento logo' width={53} height={12} />
    </Link>
  );
}

'use client';
import { Form } from '@/ui/components/form/Form';
import { ScrollAnimation } from '@/ui/components/scrollAnimation/scrollAnimation';
import { SparklesSection } from '@/ui/components/sparkles/SparklesSection';
import Image from 'next/image';
import { ThemeContext, ThemeContextProvider } from './ThemeContext';
import { useContext } from 'react';

export default function Home() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <main></main>
    </ThemeContextProvider>
  );
}

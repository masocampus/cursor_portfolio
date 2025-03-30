'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Project } from './components/Projects';

export default function Home() {
  // 네비게이션 항목
  const navItems = [
    { label: '소개', href: '#about' },
    { label: '기술', href: '#skills' },
    { label: '프로젝트', href: '#projects' },
    { label: '연락처', href: '#contact' },
  ];
  
  // 기술 스택
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'Git', level: 75 },
    { name: 'Figma', level: 70 },
  ];
  
  // 프로젝트
  const projects: Project[] = [
    {
      title: '프로젝트 1',
      description: '첫 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 React와 Next.js를 사용하여 개발되었습니다.',
      tech: 'React, Next.js, Tailwind CSS',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project1',
    },
    {
      title: '프로젝트 2',
      description: '두 번째 프로젝트에 대한 설명입니다. Node.js와 Express를 사용한 백엔드 API입니다.',
      tech: 'Node.js, Express, MongoDB',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      title: '프로젝트 3',
      description: '세 번째 프로젝트에 대한 설명입니다. 반응형 웹 디자인과 애니메이션을 중점적으로 작업했습니다.',
      tech: 'HTML, CSS, JavaScript',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project3',
    },
  ];
  
  // 연락처 정보
  const contactInfo = {
    email: 'example@email.com',
    phone: '010-1234-5678',
    github: 'github.com/username',
    linkedin: 'linkedin.com/in/username',
    location: '서울시 강남구',
  };
  
  // 소셜 링크
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/username',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/username',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 네비게이션 */}
      <Navbar logoText="Masocampus 포트폴리오" items={navItems} />

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto pt-24 px-6">
        {/* 소개 섹션 */}
        <section id="about" className="py-20">
          <Profile 
            name="Masocampus"
            role="프론트엔드 개발자"
            description="웹 개발자로서 사용자 경험을 중요시하는 개발자입니다. 창의적인 문제 해결과 효율적인 코드 작성을 지향합니다."
          />
        </section>

        {/* 기술 섹션 */}
        <section id="skills" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <Skills skills={skills} />
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <Projects projects={projects} />
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <Contact contactInfo={contactInfo} />
        </section>
      </main>

      {/* 푸터 */}
      <Footer name="Masocampus" socialLinks={socialLinks} />
    </div>
  );
}

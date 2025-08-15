import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { HowItWorks } from './components/HowItWorks';
import { SuccessStories } from './components/SuccessStories';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SuccessModal } from './components/SuccessModal';
import { ErrorModal } from './components/ErrorModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const showSuccessModal = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };
  
  const showErrorModal = () => {
    setIsModalOpen(false);
    setIsErrorModalOpen(true);
  };
  
  const closeSuccessModal = () => setIsSuccessModalOpen(false);
  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
    setIsModalOpen(true); // Reopen the form modal to try again
  };
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header openModal={openModal} />
      <main className="flex-1">
        <Hero openModal={openModal} />
        <TrustIndicators />
        <HowItWorks openModal={openModal} />
        <SuccessStories />
        <Features openModal={openModal} />
        <Services openModal={openModal} />
        <CTASection openModal={openModal} />
        <FAQ />
      </main>
      <Footer openModal={openModal} />
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        onSuccess={showSuccessModal}
        onError={showErrorModal}
      />
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={closeSuccessModal} 
      />
      <ErrorModal 
        isOpen={isErrorModalOpen} 
        onClose={closeErrorModal} 
      />
    </div>;
}
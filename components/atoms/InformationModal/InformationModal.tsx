"use client";

import React, { useState } from 'react';
import styles from './InformationModal.module.scss';

const InformationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const infoData = [
    {
      color: 'daily',
      title: 'Daily Use',
      description: 'Uso registrado de forma diaria durante el mes'
    },
    {
      color: 'frequent',
      title: 'Frequent Use',
      description: 'Uso recurrente durante el mes, sin ser diario'
    },
    {
      color: 'low',
      title: 'Low Use',
      description: 'Uso esporádico durante el mes'
    },
    {
      color: 'no',
      title: 'No Use',
      description: 'Sin registros de uso durante el mes'
    }
  ];

  return (
    <div className={styles.container}>
      <button 
        className={styles.infoButton} 
        onClick={toggleModal}
        aria-label="Información de uso"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={toggleModal} />
          <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
            <button 
              className={styles.closeButton} 
              onClick={toggleModal}
              aria-label="Cerrar modal"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.content}>
              {infoData.map((item, index) => (
                <div key={index} className={styles.infoRow}>
                  <div className={`${styles.dot} ${styles[item.color]}`} />
                  <div className={styles.textGroup}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <div className={styles.divider} />
                    <h5 className={styles.description}>{item.description}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InformationModal;

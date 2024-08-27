import React, { useState } from 'react';
import { useEffect } from 'react';

const Quick = () => {
  const [message, setMessage] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false); 



  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      setMessage(value);
    }
  };

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${9526482781}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id='quick'>

  
    </section>

  );
};

export default Quick;

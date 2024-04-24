"use client"

import React, { useEffect } from 'react'

interface BookeroConfig {
    id: string;
    container: string;
    type: string;
    position: string;
    plugin_css: boolean;
    lang: string;
  }

export default function Form2() {
    useEffect(() => {
        // Tworzenie obiektu konfiguracyjnego
        const bookero_config: BookeroConfig = {
          id: '1tSC93Fcu9Rj',
          container: 'bookero',
          type: 'calendar',
          position: '',
          plugin_css: true,
          lang: 'pl'
        };
    
        // Dodawanie skryptu do body dokumentu
        const script = document.createElement('script');
        script.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';
        document.body.appendChild(script);
    
        // Ustawianie bookero_config jako globalnej zmiennej, aby była dostępna w załadowanym skrypcie
        (window as any).bookero_config = bookero_config;
      }, []);
    
      return <div id="bookero" />;
}
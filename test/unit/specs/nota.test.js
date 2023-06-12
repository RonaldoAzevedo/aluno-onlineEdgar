const Nota = require('../src/models/nota');

describe('mediaCA', () => {
    it('deve retornar SS - Superior para uma média de 9.5', () => {
      const nota = new Nota();
      const conceito = nota.mediaCA(() => 9.5);
      expect(conceito).toBe('SS - Superior');
    });
  
    it('deve retornar MS - Médio Superior para uma média de 8.5', () => {
      const nota = new Nota();
      const conceito = nota.mediaCA(() => 8.5);
      expect(conceito).toBe('MS - Médio Superior');
    });
  
    it('deve retornar MM - Médio para uma média de 6.5', () => {
      const nota = new Nota();
      const conceito = nota.mediaCA(() => 6.5);
      expect(conceito).toBe('MM - Médio');
    });
  
    it('deve retornar MI - Médio Inferior para uma média de 4.5', () => {
      const nota = new Nota();
      const conceito = nota.mediaCA(() => 4.5);
      expect(conceito).toBe('MI - Médio Inferior');
    });
  
    it('deve retornar II - Inferior para uma média de 2.0', () => {
      const nota = new Nota();
      const conceito = nota.mediaCA(() => 2.0);
      expect(conceito).toBe('II - Inferior');
    });
  
    it('deve retornar SR - Sem rendimento para uma média de 0.0', () => {
      const nota = new Nota();
      const conceito = nota.mediaCA(() => 0.0);
      expect(conceito).toBe('SR - Sem rendimento');
    });
  });
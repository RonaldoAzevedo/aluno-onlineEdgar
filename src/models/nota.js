class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
            const mediafinal = mediaFinal();
      
            
        
            if (media >= 9.0 && media <= 10) {
              return "SS - Superior";
            } else if (media >= 7.0 && media < 9.0) {
              return "MS - Médio Superior";
            } else if (media >= 5.0 && media < 7.0) {
              return "MM - Médio";
            } else if (media >= 3.0 && media < 5.0) {
              return "MI - Médio Inferior";
            } else if (media >= 0.1 && media < 3.0) {
              return "II - Inferior";
            } else {
              return "SR - Sem rendimento";
            }
          
        }
    
}

module.exports = Nota;
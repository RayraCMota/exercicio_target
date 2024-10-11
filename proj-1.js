// Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
//Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
//Imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?

    let K = 0;
    let SOMA = 0;
    let indice = 13;
    
    while (K < indice){ 
        K = K + 1; SOMA = SOMA + K; 
    };

    console.log ("Ola, o resultado é:");
    console.log (SOMA)


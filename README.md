Olá, fiz esse código para mostrar a lógica de validação de um cpf.

No CPF ou em outros documentos é comum ter dígitos verificadores(DV) servem para validar a autenticidade do número de documento evitando assim erros de digitação, fraudes, etc. Esse dígitos no CPF ficam após o "-".

*Lógica:
Primeiro dígito: Começamos utilizando os 9 primeiros dígitos multiplicando-os pela sequência decrescente de 10 à 2 e somamos esse resultado. Com esse resultado, vamos dividir por 11, mas vamos pegar o resto da divisão. Com o resto, vamos subtrair por 11, se o resultado for maior que 9, retornamos 0, se não, retornamos o resultado. Pronto, encontrarmos o primeiro dígito.

Segundo dígito: Agora utilizamos os 9 primeiros dígitos mais o primeiro dígito, multiplicando-os pela sequência de 11 à 2 e somamos esse resultado. Agora é a mesma coisa do primeiro dígito. 

Agora é só verificar se o CPF passado termina com os mesmos dígitos encontrados, se sim, esse CPF ta na regra. 

Vamos ao código, vamos usar de exemplo um CPF aleatório, mas válido, 
são esses os números: 145.382.206-20.
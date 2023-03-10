class ValidateCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }

  // Para tirar tudo que não é número
  get cleanCpf(){
    return this.cpf.replace(/\D+/g, '');
  }

  // A lógica, aqui que é a parte principal
  createDigit(partialCpf){
    const cpfArray = Array.from(partialCpf);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((acc, val) => {
      acc += (regressive * val);
      regressive--;
      return acc
    },0);

    const digit = 11 - (total % 11);

    return digit > 9 ? '0' : String(digit);
  }

  // Montando o Cpf com os dígitos da lógica já feita
  assembleCpf(){
    const partialCpf = this.cleanCpf.slice(0, -2);
    const digit1 = this.createDigit(partialCpf);
    const digit2 = this.createDigit(partialCpf + digit1);

    return partialCpf + digit1 + digit2;

  }

  isSequence(){
    const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);

    return sequence === this.cleanCpf;
  }

  // Função só para validar o cpf
  valid() {
    if(typeof this.cleanCpf === 'undefined') return;
    if(this.cleanCpf.length !== 11) return;
    if(this.isSequence()) return;

    const newCpf = this.assembleCpf();

    if(newCpf === this.cleanCpf) {
      return 'CPF é válido';
    }

    return 'CPF inválido';
  }
}

const cpf = new ValidateCpf('145.382.206-20');
console.log(cpf.valid())
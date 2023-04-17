const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.tabulaRecta = {
      A: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      B: 'BCDEFGHIJKLMNOPQRSTUVWXYZA',
      C: 'CDEFGHIJKLMNOPQRSTUVWXYZAB',
      D: 'DEFGHIJKLMNOPQRSTUVWXYZABC',
      E: 'EFGHIJKLMNOPQRSTUVWXYZABCD',
      F: 'FGHIJKLMNOPQRSTUVWXYZABCDE',
      G: 'GHIJKLMNOPQRSTUVWXYZABCDEF',
      H: 'HIJKLMNOPQRSTUVWXYZABCDEFG',
      I: 'IJKLMNOPQRSTUVWXYZABCDEFGH',
      J: 'JKLMNOPQRSTUVWXYZABCDEFGHI',
      K: 'KLMNOPQRSTUVWXYZABCDEFGHIJ',
      L: 'LMNOPQRSTUVWXYZABCDEFGHIJK',
      M: 'MNOPQRSTUVWXYZABCDEFGHIJKL',
      N: 'NOPQRSTUVWXYZABCDEFGHIJKLM',
      O: 'OPQRSTUVWXYZABCDEFGHIJKLMN',
      P: 'PQRSTUVWXYZABCDEFGHIJKLMNO',
      Q: 'QRSTUVWXYZABCDEFGHIJKLMNOP',
      R: 'RSTUVWXYZABCDEFGHIJKLMNOPQ',
      S: 'STUVWXYZABCDEFGHIJKLMNOPQR',
      T: 'TUVWXYZABCDEFGHIJKLMNOPQRS',
      U: 'UVWXYZABCDEFGHIJKLMNOPQRST',
      V: 'VWXYZABCDEFGHIJKLMNOPQRSTU',
      W: 'WXYZABCDEFGHIJKLMNOPQRSTUV',
      X: 'XYZABCDEFGHIJKLMNOPQRSTUVW',
      Y: 'YZABCDEFGHIJKLMNOPQRSTUVWX',
      Z: 'ZABCDEFGHIJKLMNOPQRSTUVWXY',
    };
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const keyword = key.toUpperCase();
    let encryptedText = '';
    let specialCharacterCount = 0;

    for (let i = 0; i < msg.length; i++) {
      let keyLetter = (i - specialCharacterCount) % keyword.length;
      let keywordIndex = this.tabulaRecta.A.indexOf(keyword[keyLetter]);

      if (this.tabulaRecta[msg[i]]) {
        encryptedText += this.tabulaRecta[msg[i]][keywordIndex];
      } else {
        encryptedText += msg[i];
        specialCharacterCount++;
      }
    }
    if (!this.direct) {
      encryptedText = encryptedText.split('').reverse().join('');
    }
    console.log(encryptedText);
    return encryptedText;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const keyword = key.toUpperCase();
    let decryptedText = '';
    let specialCharacterCount = 0;

    for (let i = 0; i < msg.length; i++) {
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keyRow = this.tabulaRecta[keyword[keyLetter]];

      if (keyRow.indexOf(msg[i]) !== -1) {
        decryptedText += this.tabulaRecta.A[keyRow.indexOf(msg[i])];
      } else {
        decryptedText += msg[i];
        specialCharacterCount++;
      }
    }

    if (!this.direct) {
      decryptedText = decryptedText.split('').reverse().join('');
    }
    console.log(decryptedText);
    return decryptedText;
  }
}

module.exports = {
  VigenereCipheringMachine
};

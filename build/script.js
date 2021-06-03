"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
let t = `00NMSDR33 V04-04.02     01-Jan-04 16:26 213111
10NMJob1            121111
08KIPunkt7          1.987           8.123           3.667           P1              
08KIPunkt8          2.987           8.123           3.667           P1              
08KIPunkt9          3.987           8.123           3.667           P1              `;
console.log(t);
//t.replace("\n", String.fromCharCode(0x0d) + String.fromCharCode(0x0a));
/*
let zz = "♥".charCodeAt(0);
console.log(zz);
console.log(String.fromCharCode(zz));

let z2 = "☻".charCodeAt(0);
console.log(z2);
console.log(String.fromCharCode(z2));
*/
(() =>
  __awaiter(void 0, void 0, void 0, function* () {
    /*
    console.log("Checksum: " + getSdr33Checksum(t));
  
    fs.writeFileSync("./data.sdr", getSdr33Message(t));
  */
    sendData(getSdr33Message(t));
  }))();
/**
 * Send Data via serialPort to the total station or any other recipient
 * @param {*} data
 */
function sendData(data) {
  return __awaiter(this, void 0, void 0, function* () {
    let split = data.split("\n");
    console.log(split);
    const SerialPort = require("serialport");
    let port = new SerialPort("COM5", {
      baudRate: 9600,
      autoOpen: true,
    });
    for (let line of split) {
      port.write(line);
      port.write([0x0d]);
      port.write([0x0a]);
      console.log(line);
      yield sleep(30);
    }
    port.on("close", function (err) {
      console.log("port closed", err);
    });
  });
}
function sleep(ms) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
}
//# sourceMappingURL=script.js.map

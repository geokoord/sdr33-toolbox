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

(async () => {
  console.log("Checksum: " + getSdr33Checksum(t));
  const fs = require("fs");
  fs.writeFileSync("./data.sdr", getSdr33Message(t));

  sendData(getSdr33Message(t));
})();

/**
 * Calculates the SDR33 (Sokkia Dataformat) Checksum.
 * @param {*} data Data of which the checksum should be calculated
 * @returns
 */
function getSdr33Checksum(data) {
  let asscii = [];
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    let assciiVal = data.charCodeAt(index);
    asscii.push(assciiVal);

    //Exclusive of CR(0x0D), LF(0x0A), STX(0x02) and ETX(0x03)
    if (
      assciiVal != 0x0d &&
      assciiVal != 0x0a &&
      assciiVal != 0x02 &&
      assciiVal != 0x03
    ) {
      sum += assciiVal;
    }
  }

  let checksum = sum % 65536;

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  return pad(checksum, 5);
}

/**
 * Returns an valid SDR33 (Sokkia Dataformat) Message.
 * @param {} rawdata
 */
function getSdr33Message(rawdata) {
  let resMessage = "";

  //resMessage += ""; //STX
  resMessage += String.fromCharCode(0x02); //CR
  //resMessage += String.fromCharCode(0x0d); //CR
  resMessage += String.fromCharCode(0x0a); //LF

  resMessage += rawdata;

  //resMessage += String.fromCharCode(0x0d); //CR
  resMessage += String.fromCharCode(0x0a); //LF

  resMessage += ""; //ETX
  //resMessage += getSdr33Checksum(resMessage);
  //resMessage += String.fromCharCode(0x0d); //CR
  //resMessage += String.fromCharCode(0x0a); //LF

  return resMessage;
}

async function sendData(data) {
  //let split = data.split(String.fromCharCode(0x0d) + String.fromCharCode(0x0a));
  let split = data.split("\n");
  console.log(split);

  const SerialPort = require("serialport");
  let port = new SerialPort("COM5", {
    baudRate: 9600,
    autoOpen: true,
  });

  for (line of split) {
    port.write(line);
    port.write([0x0d]);
    port.write([0x0a]);
    console.log(line);
    await sleep(30);
  }

  port.on("close", function (err) {
    console.log("port closed", err);
  });
}

function wait(ms) {
  var start = Date.now(),
    now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

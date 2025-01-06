//% color=#0fbc11 icon="\uf287" block="USB Serial"
namespace USBSerial {
    //% block="initialize USB serial at baud rate %baud"
    export function initialize(baud: number): void {
        serial.redirect(SerialPin.P0, SerialPin.P1, baud);
    }

    //% block="send string %text over USB"
    export function sendString(text: string): void {
        serial.writeString(text + "\n");
    }

    //% block="read string from USB"
    export function readString(): string {
        return serial.readString();
    }
}

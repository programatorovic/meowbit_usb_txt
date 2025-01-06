//% color=#0fbc11 icon="\uf287" block="USB Serial"
namespace USBSerial {
    let usb: USB_VCP = new USB_VCP();

    //% block="initialize USB serial at baud rate %baud"
    export function initialize(baud: number): void {
        usb.setBaudRate(baud);
    }

    //% block="send string %text over USB"
    export function sendString(text: string): void {
        usb.write(text + "\n");
    }

    //% block="read string from USB"
    export function readString(): string {
        if (usb.any()) {
            return usb.read();
        }
        return "";
    }
}

export function currencyFormat(number, suffix) {
    //currencyVN(1000) => '1.000'
    //currencyVN(1000,'VND') => '1.000 VND'
    let money = Number(number);
    money = money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return (money.replace(" VND", "") + " " + (suffix ?? "")).trim();
}
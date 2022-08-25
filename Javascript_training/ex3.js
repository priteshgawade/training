function personalAccount() {
    const firstname = 'sonu', lastname = 'ansari';
    let income = [2, 5, 6, 7], expense = [4];
    let tA = 0, tI = 0;

    // Returnus total income of Account holder
    function totalincome() {
        for (i of income) {
            tI += i;
        }
        return tI;
    }

    // Returnus total expense made by Account holder
    function totalexpense() {

        for (i of expense) {
            tA += i;
        }
        return tA;
    }

    // Returnus information of Account holder
    function accountinfo() {
        v=`Name: ${firstname} ${lastname}`;
        return v
    }

    // Returnus Current balance of Account holder
    function accountBalance() {
        let AB = 0
        return AB = tI - tA;
    }
    return {
        TotalIncome: totalincome(),
        TotalExpense: totalexpense(),
        AccountInfo: accountinfo(),
        AccountBalance: accountBalance(),
    }
}

const PA = personalAccount();
console.log(PA.TotalIncome)
console.log(PA.TotalExpense)
console.log(PA.AccountInfo)
console.log(PA.AccountBalance)


